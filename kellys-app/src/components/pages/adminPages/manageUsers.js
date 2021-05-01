import React, { useState } from 'react'

const ManageUsers = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAdmin, setIsAdmin] = useState("")

    
    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/users', {    
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({name, email, password, isAdmin})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`New user created for ${name}!`)
            setName('')
            setEmail('')
            setPassword('')
        }
    }

    return (
        <main className='containerColumn'>
            <h5>Add New User</h5>
            <form className="formLeftSmall" name="contactForm" onSubmit={formSubmit}>
                <label htmlFor="Name">Name</label>
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Alex Jones" 
                    required
                    value={name} 
                    onChange={e => setName(e.target.value) } 
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

                <label htmlFor="password">Password</label>
                <input 
                    name="password" 
                    type="text" 
                    placeholder="" 
                    required
                    value={password} 
                    onChange={e => setPassword(e.target.value) } 
                />

                <input 
                    type="submit" 
                    defaultValue="Submit" 
                    className="buttonGeneral" 
                />
            </form>
        </main>
    )
}

export default ManageUsers