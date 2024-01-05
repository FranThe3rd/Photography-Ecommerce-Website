import React from 'react'
import './contact.css'


const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contact Me</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact
