import React, { useEffect, useState } from 'react'

const EditPortfolio = () => {
    
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

    return (
        <main className='containerColumn'>
            <h5>Portfolio Entries</h5>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
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

export default EditPortfolio