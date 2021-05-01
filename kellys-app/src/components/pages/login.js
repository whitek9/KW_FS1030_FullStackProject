import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import Navigation from '../shared/navigation';
import Sidebar from '../shared/sidebar.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../css/contact.css';

const LoginPage = () => {

    let history = useHistory()
    let location = useLocation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
            document.getElementById('loginError').innerHTML = payload.message
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/admin" } };
            history.replace(from);
        }
    }

    return (
       <div id="outer-container">
            <Navigation />
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <main class="containerColumn" id="page-wrap">
            {!auth && 
                <div>
                    <p><span className='red' id='loginError'></span></p>
                </div>
            }
            <h4>Log in</h4>
                <form className="formLeftSmall" name="loginForm" onSubmit={loginSubmit}>
                    <label htmlFor="Email">Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="yourname@domain.com" 
                            required
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            autoFocus
                        />
                    <label htmlFor="Password">Password</label>
                        <div className='containerRowLeft'>
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                name="name" 
                                required 
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                            />
                            <span 
                                title='Show Password'
                                className='showPasswordIcon'
                                onClick = {() => {
                                    setShowPassword(!showPassword)
                                }}>
                                <FontAwesomeIcon icon='eye'/>    
                            </span>
                        </div>
                    <input 
                        type="submit" 
                        defaultValue="Sign In" 
                        className="buttonGeneral" 
                    />
                    
                </form>
            </main>
       </div>
    );
}
 
export default LoginPage;