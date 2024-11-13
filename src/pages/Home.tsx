import React from "react";
import { ContactList } from "../components/ContactList";

export const Home: React.FC = () => {
  return (
    <div>
      <h1>CRM System</h1>
      <ContactList />
    </div>
  );
};
