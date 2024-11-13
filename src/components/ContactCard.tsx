import React, { useState } from "react";
import {
  addToFavorites,
  IContact,
  removeFromFavorites,
} from "../features/contacts/contactsSlice";
import { useStyles } from "../styles/jssStyles";
import { ContactForm } from "./ContactForm";
import { DeleteConfirmationModal } from "./DeleteConfiramtionModal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";

interface ContactCardProps {
  contact: IContact;
  isInFavorites: boolean;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  isInFavorites,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [inFavorites, setInFavorites] = useState(isInFavorites);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);

  const handleFavorites = () => {
    dispatch(addToFavorites(contact));
    setInFavorites(true);
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(contact.id));
    setInFavorites(false);
  };

  return (
    <div className={classes.contactCard}>
      <div className={classes.contactInfoContainer}>
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        {/* <p>{contact.notes}</p> */}
      </div>
      <div className={classes.contactActions}>
        <button
          className={classes.button + " edit"}
          onClick={() => setIsEditOpen(true)}
        >
          Edit
        </button>
        <button
          className={classes.button + " delete"}
          onClick={() => setIsRemoveOpen(true)}
        >
          Delete
        </button>
        <button
          className={`${classes.button} ${!inFavorites ? " favoriteAdd" : " favoriteRemove"}`}
          onClick={!inFavorites ? handleFavorites : handleRemoveFromFavorites}
        >
          {!inFavorites ? "Add To Favorites" : "Remove From Favorites"}
        </button>
        <button
          className={classes.button}
          onClick={() => navigate("/contacts/" + contact.id)}
        >
          View In Detail
        </button>
      </div>
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
