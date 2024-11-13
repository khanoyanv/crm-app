import React from "react";
import { useDispatch } from "react-redux";
import { removeContact } from "../features/contacts/contactsSlice";
import { useStyles } from "../styles/jssStyles";
import { useNavigate } from "react-router-dom";

interface DeleteConfirmationModalProps {
  contactId: string;
  onClose: () => void;
}

export const DeleteConfirmationModal: React.FC<
  DeleteConfirmationModalProps
> = ({ contactId, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleDelete = () => {
    dispatch(removeContact(contactId));
    onClose();
    navigate("/contacts");
  };

  return (
    <div className={classes.container}>
      <h3>Are you sure you want to delete this contact?</h3>
      <div>
        <button className={classes.button} onClick={handleDelete}>
          Yes, Delete
        </button>
        <button className={classes.button} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
