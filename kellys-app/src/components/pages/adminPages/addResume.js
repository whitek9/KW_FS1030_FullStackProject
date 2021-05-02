import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const AddResume = () => {

    let history = useHistory()

    const [logo, setLogo] = useState({
        file: [],
        filePreview: null
    })

    const [jobTitle, setJobTitle] = useState("")
    const [company, setCompany] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [experience, setExperience] = useState("")

    const handleLogoChange = (event) => {
        setLogo({
            ...logo,
            file: event.target.files[0],
            filePreview:URL.createObjectURL(event.target.files[0])
        })
    }

    
    const formSubmit = async event => {

        let resumeForm = document.getElementById('resumeForm')
        const formData = new FormData(resumeForm)
        formData.append('logo', logo.file)
        event.preventDefault()

        axios.post("http://localhost:4000/resume/new_item", formData,{   
            headers: { "Content-Type": "multipart/form-data" } 
        }).then(res => {
            if (res.status >= 400) {
                alert(res)
            } else {
                alert(`New Entry Created`)
    
                history.push(`/admin/manage-resume/`)
                window.location.reload()
            }
            })  
    }
    
    return (
        <main className='containerColumn'>
            <h5>Add Resume Entry</h5>
            <form 
                className="formLeft" 
                id="resumeForm"
                onSubmit={formSubmit}
            >
                <label htmlFor="logo">Logo</label>
                <input 
                    name="logo"
                    type="file" 
                    required 
                    onChange={handleLogoChange}
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