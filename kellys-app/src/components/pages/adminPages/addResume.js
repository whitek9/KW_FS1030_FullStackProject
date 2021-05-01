import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'

const AddResume = () => {

    let history = useHistory()

    const [logo, setLogo] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [company, setCompany] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [experience, setExperience] = useState("")

    
    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/resume/new_item', {    
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({logo, jobTitle, company, startDate, endDate, experience})
        })
        if (response.status >= 400) {
            alert(`Oops! You got an error!`)
        } else {
            alert(`New Entry Created`)

            history.push(`/admin/manage-resume/`)
            window.location.reload()
        }
        
    }
    
    return (
        <main className='containerColumn'>
            <h5>Add Resume Entry</h5>
            <form className="formLeft" name="contactForm" onSubmit={formSubmit}>
                <label htmlFor="logo">Logo</label>
                <input 
                    name="logo"
                    type="text" 
                    required 
                    value={logo} 
                    onChange={e => setLogo(e.target.value)}
                    autoFocus 
                />

                <label htmlFor="jobTitle">Job Title</label>
                <input 
                    name="jobTitle" 
                    type="text" 
                    placeholder="Developer" 
                    required
                    value={jobTitle} 
                    onChange={e => setJobTitle(e.target.value) } 
                />

                <label htmlFor="company">Company</label>
                <input 
                    name="company" 
                    type="text" 
                    placeholder="Google" 
                    required
                    value={company} 
                    onChange={e => setCompany(e.target.value) } 
                />

                <label htmlFor="startDate">Start Date</label>
                <input 
                    name="startDate" 
                    type="text" 
                    placeholder="Jan 2020" 
                    required
                    value={startDate} 
                    onChange={e => setStartDate(e.target.value) } 
                />

                <label htmlFor="endDate">End Date</label>
                <input 
                    name="endDate" 
                    type="text" 
                    placeholder="Present" 
                    required
                    value={endDate} 
                    onChange={e => setEndDate(e.target.value) } 
                />

                <label htmlFor="experience">Experience</label>
                <textarea 
                    name="experience"
                    className="textAreaFormatted" 
                    rows={10} 
                    cols={80} 
                    required 
                    value={experience} 
                    onChange={e => setExperience(e.target.value) } 
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

export default AddResume