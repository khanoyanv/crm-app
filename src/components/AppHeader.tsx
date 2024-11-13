import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#c209c1",
    padding: "10px",
    color: "#00cffd",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  link: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
    borderBottom: "1px solid transparent",
    boxSizing: "border-box",
    height: "30px",
    transition: "0.2s",
    "&:hover": {
      color: "#00cffd",
      borderBottom: "2px solid #00cffd",
    },
  },
  activeLink: {
    color: "#00cffd",
    borderBottom: "2px solid #00cffd",
  },
});

export const AppHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1>CRM App</h1>
      <nav className={classes.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${classes.link} ${isActive ? classes.activeLink : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `${classes.link} ${isActive ? classes.activeLink : ""}`
          }
        >
          Contacts
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${classes.link} ${isActive ? classes.activeLink : ""}`
          }
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
