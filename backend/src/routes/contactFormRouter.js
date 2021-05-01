import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import * as validation from '../middleware/validationFunctions.js'
import verifyToken from '../middleware/jwtVerify'
import connection from '../database/connection'

const contactFormRouter = express.Router()

contactFormRouter.post('/contact_form/entries', (req, res) => {
    
    const requiredFields = ['name', 'email', 'phoneNumber', 'content']
    const incorrectProperties = validation.validationCheck(req.body, requiredFields)
   
    let errorList = { 
        message: 'validation error',
        invalid: []
    }

    let newEntry = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        content: req.body.content,
    }
    
    if (incorrectProperties.length) {
        errorList.invalid.push(...incorrectProperties)
    }

    if (errorList.invalid.length) {
        return res.status(400).json(errorList)
    }
    
    // createItem(newEntry, entriesPath)
    //     .then(() => {
    //         return res.status(201).json(newEntry)
    //     })
})

contactFormRouter.get('/contact_form/entries', verifyToken, async (req,res) => {
    
    // return res.status(201).json(await getAllItems(entriesPath))

})

contactFormRouter.get('/contact_form/entries/:id', verifyToken, async (req,res) => {
    
    let id = req.params.id
    // let existingUser = await getItemById(id, entriesPath)

    if (existingUser == null) {
        
        return res.status(404).json( { message: `entry ${id} not found` } )     
    }

    return res.status(201).json(existingUser)

})

export default contactFormRouter