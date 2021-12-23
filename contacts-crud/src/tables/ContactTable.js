import React from "react";

const ContactTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>Contact</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.contacts.length > 0 ?(
                props.contacts.map((contact) => (
                        <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </tr>
            ))
            ): (
                <tr>
                    <td colSpan={3}>No Contacts</td>
                </tr>
            )    
        }

        </tbody>
    </table>
)

export default ContactTable;