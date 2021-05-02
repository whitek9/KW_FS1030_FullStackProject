import React, { useState, useEffect } from 'react'
import Navigation from '../shared/navigation'
import Sidebar from '../shared/sidebar.js'

import '../../css/resume.css';
 
const Resume = () => {

    const [submission, setSubmission] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/resume/items', {
                method: 'GET',
                headers: {

                }
            })
            const data = await response.json()
            setSubmission(data)
        }
        getData()
    }, [])

    return (
        <div id='outer-container'>
            <Navigation />
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <main className="containerColumn" id='page-wrap'>
                <section className='containerColumnLeft' id='WorkExperience'>
                    <h4>Relevant Work Experience</h4>
                    {submission.length > 0 && submission.map(entry =>
                        <div>
                        <div className='containerRow'>
                            <p>{entry.logo}</p>
                            <div className="containerColumnLeftTitle">
                                <h5 className="h5Left">{entry.jobTitle}</h5>
                                <p className="subtitle">{entry.company}, {entry.startDate}-{entry.endDate}</p>
                            </div>
                        </div>
                        <ul className='experienceList' id="simpliiExperience">
                            <li>{entry.experience}</li>
                        </ul>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
 
export default Resume;