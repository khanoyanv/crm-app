import { createUseStyles } from "react-jss";
import { ContactList } from "../components/ContactList";
import { AddContactButton } from "../components/AddContactButton";
import { useAppSelector } from "../hooks/useAppDispatch";

const useStyles = createUseStyles({
  container: {
    padding: "20px",
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
    textDecoration: "none",
  },
});

export const Contacts: React.FC = () => {
  const classes = useStyles();
  const contacts = useAppSelector((state) => state.contacts.contacts);

  return (
    <div className={classes.container}>
      <h2>Contacts</h2>
      {contacts.length > 0 ? <ContactList /> : <p>No contacts available</p>}
      <AddContactButton />
    </div>
  );
};
