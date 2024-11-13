import { useDispatch } from "react-redux";
import {
  addContact,
  IContact,
  updateContact,
} from "../features/contacts/contactsSlice";
import { useState } from "react";
import { useStyles } from "../styles/jssStyles";

interface IContactFromProps {
  contact?: IContact;
  onClose: () => void;
}

export const ContactForm: React.FC<IContactFromProps> = ({
  contact,
  onClose,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    id: contact?.id || "",
    name: contact?.name || "",
    email: contact?.email || "",
    phone: contact?.phone || "",
    notes: contact?.notes || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact?.id) {
      dispatch(updateContact(formData));
    } else {
      dispatch(addContact({ ...formData, id: Date.now().toString() }));
    }

    onClose();
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <h3>{contact ? "Edit Contact" : "Add Contact"}</h3>
      <div>
        <label>Name: </label>
        <input
          className={classes.contactFormInput}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone: </label>
        <input
          className={classes.contactFormInput}
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          className={classes.contactFormInput}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Notes: </label>
        <textarea className={classes.contactTextarea} name="notes" value={formData.notes} onChange={handleChange} />
      </div>
      <div className={classes.controlButtonsContainer}>
        <button className={classes.button} type="submit">
          {contact ? "Update" : "Add"} Contact
        </button>
        <button className={classes.button} type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};
