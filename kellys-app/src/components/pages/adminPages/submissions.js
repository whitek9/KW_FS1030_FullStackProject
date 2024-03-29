import React, { useEffect, useState } from 'react'

import '../../../css/submissions.css'

const Submissions = () => {
     
    const token = sessionStorage.getItem('token')
    const [submission, setSubmission] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/contact_form/entries', {
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

    // base formatPhoneNumber solution leveraged from https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/

    const formatPhoneNumber = (str) => {

        let cleaned = ('' + str).replace(/\D/g, '')

        let match = cleaned.match(/^([+]?\d{1})(\d{3})(\d{3})(\d{4})$/)

        if (match) {
            return '+' + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4]
        }

        return null
    }

    return (
        <main className='containerColumn' >
            <h5>Contact Form Submissions</h5>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {submission.length === 0 &&
                        <tr>
                            <td colSpan="5" className='red'>
                                <i>No submissions found</i>
                            </td>
                        </tr>
                    }
                    {submission.length > 0 && submission.map(entry => 
                            <tr>
                                <td className='nowrap'>{entry.name}</td>
                                <td className='nowrap'>{formatPhoneNumber(entry.phoneNumber)}</td>
                                <td>{entry.email}</td>
                                <td>{entry.content}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Submissions