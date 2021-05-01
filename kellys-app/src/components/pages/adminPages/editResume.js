import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch, NavLink} from 'react-router-dom';
import AddResume from './addResume'
import EditItem from './editItemModal'

const EditResume = () => {
    
    const token = sessionStorage.getItem('token')
    const [submission, setSubmission] = useState([])
    const [resumeItem, setResumeItem] = useState()
    const { path } = useRouteMatch()
    const [showModal, setShowModal] = useState(false);

    const [logo, setLogo] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [company, setCompany] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [experience, setExperience] = useState("")

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/resume/items', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setSubmission(data)
        }
        getData()
    }, [token])

    const editResumeItem = (entry) => { 
        setResumeItem(entry.resume_id)    
        setLogo(entry.logo)
        setJobTitle(entry.jobTitle)
        setCompany(entry.company)
        setStartDate(entry.startDate)
        setEndDate(entry.endDate)
        setExperience(entry.experience)
        setShowModal(true)
    }

    const formSubmit = async event => {

        let id = resumeItem

        event.preventDefault()
        const response = await fetch(`http://localhost:4000/resume/edit_item/${id}`, {    
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({logo, jobTitle, company, startDate, endDate, experience})
        })
        if (response.status >= 400) {
            alert(`Oops! You got an error!`)
        } else {
            alert(`Item Changed`)
            setShowModal(false)
            window.location.reload()
        }
        
    }

    // Delete item function
    const deleteResumeItem = async (event, resume_id) => {

        let id = resume_id
        
        event.preventDefault()
        const deleteRow = async () => {
            const response = await fetch(`http://localhost:4000/resume/delete_item/${id}`, {
                method: 'DELETE',
                headers: {
                }          
            })
            const payload = await response.json()
            alert(payload.message)
            window.location.reload() 
        }
        deleteRow()
           
    }

    return (
        <main className='containerColumn'>
            <h5>Resume Entries</h5>
            <nav className='inPageNav'>
                <ul>
                    <li> <NavLink to="/admin/manage-resume/add-item">Add Resume Entry</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path={`${path}/add-item`}>
                    <AddResume />
                </Route>
            </Switch>
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Experience</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {submission.length === 0 &&
                        <tr>
                            <td colSpan="8" className='red'>
                                <i>No submissions found</i>
                            </td>
                        </tr>
                    }
                    {submission.length > 0 && submission.map(entry => 
                            <tr>
                                <td>{entry.logo}</td>
                                <td>{entry.jobTitle}</td>
                                <td>{entry.company}</td>
                                <td>{entry.startDate}</td>
                                <td>{entry.endDate}</td>
                                <td>{entry.experience}</td>
                                <td><button className="buttonGeneral" onClick={() => editResumeItem(entry)}>EDIT</button></td>
                                <td><button className="buttonExit" onClick={(event) => deleteResumeItem(event, entry.resume_id)}>DELETE</button></td>
                            </tr>
                        )
                    }      
                    {showModal && 
                        <EditItem
                            show={() => setShowModal(true)}
                            hide={() => setShowModal(false)}
                            >
                            <h4>Edit Item</h4>
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
                        </EditItem>
                    }  
                </tbody>
            </table>
        </main>
    )
}

export default EditResume