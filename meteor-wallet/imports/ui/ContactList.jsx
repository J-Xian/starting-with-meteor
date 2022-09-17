import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from 'meteor/react-meteor-data'

export const ContactList = () => {
    const contacts = useTracker (() => {
        return ContactsCollection.find({}).fetch(); // Tracker  
    }) 
    return (
        <>
        <h2>Contact List</h2>
        {contacts.map(contact => (
            <li key={contact.email}>{contact.name} - {contact.email}</li>
        ))}
        </>
    )
}