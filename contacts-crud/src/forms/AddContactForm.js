import React, { useState } from "react";




const AddContactForm = (props) => {
    const initialFormState = { id: null, name: '', email: '' }
    const [contact, setContact] = useState(initialFormState)


    const handleInputChange = (event) => {
        const { name, value } = event.target

        setContact({ ...contact, [name]: value })
    }
    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="text" name="email" value={contact.email} onChange={handleInputChange} />
            <button>Add Contact</button>
        </form>
    )
}

export default AddContactForm