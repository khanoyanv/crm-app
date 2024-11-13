import { useState } from "react";
import { useStyles } from "../styles/jssStyles";
import { ContactForm } from "./ContactForm";
import { Modal } from "./Modal";

export const AddContactButton: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const classes = useStyles();

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <button className={classes.button} onClick={handleOpenForm}>
        Add Contact
      </button>
      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        {isFormOpen && <ContactForm onClose={handleCloseForm} />}
      </Modal>
    </div>
  );
};
