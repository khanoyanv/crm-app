import React from "react";
import { useAppSelector } from "../hooks/useAppDispatch";
import { ContactCard } from "../components/ContactCard";
import { useStyles } from "../styles/jssStyles";
import { SearchBar } from "../components/SearchBar";

export const Favorites: React.FC = () => {
  const favorites = useAppSelector((state) => state.contacts.favorites);
  const classes = useStyles();

  return (
    <div className={classes.contactCardContainer}>
      <h2>Favorites</h2>
      <SearchBar />
      {favorites.length > 0 ? (
        favorites.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            isInFavorites={true}
          />
        ))
      ) : (
        <p>No favorite contacts yet</p>
      )}
    </div>
  );
};
