import React from "react";
import { useAppSelector } from "../hooks/useAppDispatch";
import { ContactCard } from "./ContactCard";
import { IContact } from "../features/contacts/contactsSlice";
import { useStyles } from "../styles/jssStyles";
import { SearchBar } from "./SearchBar";

export const ContactList: React.FC = () => {
  const classes = useStyles();
  const contacts = useAppSelector((state) => state.contacts.contacts);
  const favorites = useAppSelector((state) => state.contacts.favorites);
  const searchQuery = useAppSelector((state) => state.contacts.searchQuery);
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={classes.contactCardContainer}>
      <SearchBar />
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact: IContact) => {
          let isInFavorites: boolean = false;
          if (
            favorites.some(
              (favoriteContact) => favoriteContact.id === contact.id
            )
          ) {
            isInFavorites = true;
          }
          return (
            <ContactCard
              key={contact.id}
              contact={contact}
              isInFavorites={isInFavorites}
            />
          );
        })
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};
