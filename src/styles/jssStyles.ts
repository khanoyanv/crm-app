
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
    color: '#c209c1',
  },
  contactCardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contactCard: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    padding: '15px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    color: "black",
  },
  contactInfo: {
    flex: '1',
    marginRight: '10px',
  },
  contactActions: {
    display: 'flex',
    gap: '10px',
  },
  controlButtonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    gap: '5%',
  },
  button: {
    padding: '5px 10px',
    borderRadius: '10px',
    border: '1px solid #c209c1',
    color: '#c209c1',
    cursor: 'pointer',
    transition: '0.2s',
    '&:hover': {
      color: '#00cffd',
      backgroundColor: '#c209c1',
    },
  },
  searchBarContainer: {
    width: '100%',
    marginBottom: '5px',
  },
  searchBar: {
    width: '50%',
    padding: '10px 5px',
    color: '#00cffd',
    borderRadius: '20px',
    border: '1px solid #c209c1',
    outline: 'none',
  },
  notFound: {
    textAlign: 'center',
    color: '#999',
    fontSize: '18px',
    marginTop: '20px',
  },
  contactInfoContainer: {
    '& h3': {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#c209c1'
    }
  },
  contactFormInput: {
    padding: '5px',
    borderRadius: '10px',
    color: '#00cffd',
    border: '1px solid #c209c1',
    marginBottom: '10px',
  },
  contactTextarea: {
    minWidth: '60%',
    color: '#00cffd',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    color: '#c209c1',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
});
