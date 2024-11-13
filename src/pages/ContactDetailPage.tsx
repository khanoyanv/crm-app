import { useParams } from "react-router-dom";
import { useStyles } from "../styles/jssStyles";
import { useAppSelector } from "../hooks/useAppDispatch";
import { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { DeleteConfirmationModal } from "../components/DeleteConfiramtionModal";
import { Modal } from "../components/Modal";

export const ContactDetailPage: React.FC = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const classes = useStyles();

  const contact = useAppSelector((state) =>
    state.contacts.contacts.find((c) => c.id === contactId)
  );

  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState<boolean>(false);

  if (!contact) {
    return <div className={classes.notFound}>Contact not found</div>;
  }

  return (
    <div className={classes.contactDetail}>
      <h2>Contact Details</h2>
      <div className={classes.contactInfo}>
        <p>
          <strong>Name:</strong> {contact.name}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Notes:</strong> {contact.notes}
        </p>
      </div>

      <button className={classes.button} onClick={() => setIsEditOpen(true)}>
        Edit Contact
      </button>
      <button className={classes.button} onClick={() => setIsRemoveOpen(true)}>
        Delete Contact
      </button>
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
        {isEditOpen && (
          <ContactForm contact={contact} onClose={() => setIsEditOpen(false)} />
        )}
      </Modal>

      {isRemoveOpen && (
        <DeleteConfirmationModal
          contactId={contact.id}
          onClose={() => setIsRemoveOpen(false)}
        />
      )}
    </div>
  );
};
