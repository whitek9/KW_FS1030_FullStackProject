import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const AddPortfolio = () => {

    let history = useHistory()

    const [image, setImage] = useState({
        file: [],
        filePreview: null
    })

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [urlField, setUrlField] = useState("")

    const handleImageChange = (event) => {
        setImage({
            ...image,
            file: event.target.files[0],
            filePreview:URL.createObjectURL(event.target.files[0])
        })
    }

    
    const formSubmit = async event => {

        let portfolioForm = document.getElementById('portfolioForm')
        const formData = new FormData(portfolioForm)
        formData.append('image', image.file)
        event.preventDefault()

        axios.post("http://localhost:4000/portfolio/new_item", formData,{   
            headers: { "Content-Type": "multipart/form-data" } 
        }).then(res => {
            if (res.status >= 400) {
                alert(res)
            } else {
                alert(`New Entry Created`)
    
                history.push(`/admin/manage-portfolio/`)
                window.location.reload()
            }
            })  
    }
    
    return (
        <main className='containerColumn'>
            <h5>Add Portfolio Entry</h5>
            <form 
                className="formLeft" 
                id="portfolioForm"
                onSubmit={formSubmit}
            >
                <label htmlFor="image">Image</label>
                <input 
                    name="image"
                    type="file" 
                    required 
                    onChange={handleImageChange}
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
        </main>
    )
}

export default AddPortfolio