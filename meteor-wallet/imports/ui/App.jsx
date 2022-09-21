import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

// Contact: name, email, imageURL
export const App = () => (
  <div>
    <ContactForm />
    <ContactList />
  </div>
);
