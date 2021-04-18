import React, { useState } from 'react';
import Navigation from '../shared/navigation';
import PhoneInput from 'react-phone-number-input/input'
import Sidebar from '../shared/sidebar.js'

import '../../css/contact.css';

const Contact = () => {

    // base formSubmit function leveraged from example-master file provided in the sample from the course material

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")

    
    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {    
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Please enter a valid ${payload.invalid.join(",")}`)
        } else {
            alert(`Thanks for your message! I'll be in touch soon`)
            setName('')
            setPhoneNumber('')
            setEmail('')
            setContent('')
        }
        
    }

    return (
       <div id='outer-container'>
            <Navigation />
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <main class="containerColumn" id="page-wrap">
                <h4>Get in touch with me!</h4>
                <form className="formLeft" name="contactForm" onSubmit={formSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        name="name"
                        type="text" 
                        required 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        autoFocus 
                    />

                    <label htmlFor="phoneNumber">Phone Number (Canada or US only)</label>
                    <PhoneInput
                        country='US'
                        name="phoneNumber" 
                        type="tel" 
                        placeholder="(xxx) xxx-xxxx" 
                        required
                        value={phoneNumber} 
                        onChange={setPhoneNumber} 
                    />

                    <label htmlFor="Email">Email Address</label>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="yourname@domain.com" 
                        required
                        value={email} 
                        onChange={e => setEmail(e.target.value) } 
                    />

                    <label htmlFor="content">Write your message below</label>
                    <textarea 
                        name="content"
                        className="textAreaFormatted" 
                        rows={10} 
                        cols={40} 
                        placeholder="I wanted to tell you..."
                        required 
                        value={content} 
                        onChange={e => setContent(e.target.value) } 
                    />
                    
                    <input 
                        type="submit" 
                        defaultValue="Submit" 
                        className="buttonGeneral" 
                    />
                </form>
            </main>
       </div>
    );
}
 
export default Contact;