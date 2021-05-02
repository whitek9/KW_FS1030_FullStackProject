import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch, NavLink} from 'react-router-dom';
import AddPortfolio from './addPortfolio'
import EditItem from './editItemModal'

const EditPortfolio = () => {
    
    const token = sessionStorage.getItem('token')
    const [submission, setSubmission] = useState([])
    const [portfolioItem, setPortfolioItem] = useState()
    const { path } = useRouteMatch()
    const [showModal, setShowModal] = useState(false);

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [urlField, setUrlField] = useState("")

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/portfolio/items', {
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

    const editPortfolioItem = (entry) => { 
        setPortfolioItem(entry.portfolio_id)    
        setImage(entry.image)
        setTitle(entry.title)
        setDescription(entry.description)
        setUrlField(entry.url)
        setShowModal(true)
    }

    const formSubmit = async event => {

        let id = portfolioItem

        event.preventDefault()
        const response = await fetch(`http://localhost:4000/portfolio/edit_item/${id}`, {    
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({image, title, description, urlField})
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
    const deletePortfolioItem = async (event, portfolio_id) => {

        let id = portfolio_id
        
        event.preventDefault()
        const deleteRow = async () => {
            const response = await fetch(`http://localhost:4000/resume/portfolio_item/${id}`, {
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
            <h5>Portfolio Entries</h5>
            <nav className='inPageNav'>
                <ul>
                    <li> <NavLink to="/admin/manage-portfolio/add-item">Add Portfolio Entry</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path={`${path}/add-item`}>
                    <AddPortfolio />
                </Route>
            </Switch>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>URL</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {submission.length === 0 &&
                        <tr>
                            <td colSpan="6" className='red'>
                                <i>No submissions found</i>
                            </td>
                        </tr>
                    }
                    {submission.length > 0 && submission.map(entry => 
                            <tr>
                                <td>{entry.title}</td>
                                <td>{entry.description}</td>
                                <td>{entry.image}</td>
                                <td>{entry.url}</td>
                                <td><button className="buttonGeneral" onClick={() => editPortfolioItem(entry)}>EDIT</button></td>
                                <td><button className="buttonExit" onClick={(event) => deletePortfolioItem(event, entry.resume_id)}>DELETE</button></td>
                            </tr>
                        )
                    }      
                    {showModal && 
                        <EditItem
                            show={() => setShowModal(true)}
                            hide={() => setShowModal(false)}
                            >
                            <h4>Edit Item</h4>
                            <form 
                                className="formLeft" 
                                id="portfolioForm"
                                onSubmit={formSubmit}
                            >
                                <label htmlFor="image">Image</label>
                                <input 
                                    name="image"
                                    type="text" 
                                    required 
                                    value={image} 
                                    onChange={e => setImage(e.target.value)}
                                    autoFocus 
                                />

                                <label htmlFor="title">Title</label>
                                <input 
                                    name="title" 
                                    type="text" 
                                    placeholder="Nice picture" 
                                    required
                                    value={title} 
                                    onChange={e => setTitle(e.target.value) } 
                                />

                                <label htmlFor="description">Description</label>
                                <textarea 
                                    name="description"
                                    className="textAreaFormatted" 
                                    rows={10} 
                                    cols={80} 
                                    required 
                                    value={description} 
                                    onChange={e => setDescription(e.target.value) } 
                                />

                                <label htmlFor="urlField">URL - Optional</label>
                                <input 
                                    name="urlField" 
                                    type="text" 
                                    value={urlField} 
                                    onChange={e => setUrlField(e.target.value) } 
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

export default EditPortfolio