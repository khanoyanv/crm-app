import { useState } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "../styles/jssStyles";
import { setSearchQuery } from "../features/contacts/contactsSlice";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className={classes.searchBarContainer}>
      <input
        className={classes.searchBar}
        type="text"
        placeholder="Search by name or email..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};
