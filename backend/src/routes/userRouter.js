import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import * as validation from '../middleware/validationFunctions.js'
import path from 'path'
import { createItem, getAllItems} from '../util/jsonHandler.js'

const userRouter = express.Router()
const usersPath = path.resolve(`${process.env.USERS_PATH}`);
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10

// Route 2
userRouter.post('/users', (req,res) => {

    const requiredFields = ['name', 'password', 'email']
    const incorrectProperties = validation.validationCheck(req.body, requiredFields)
   
    let errorList = { 
        message: 'validation error',
        invalid: []
    }
    
    let newUser = {
        id: uuidv4(),
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        date: Date.now()
    }

    if (incorrectProperties.length) {
        errorList.invalid.push(...incorrectProperties)
    }

    if (errorList.invalid.length) {
        return res.status(400).json(errorList)
    }

    bcrypt.hash(newUser.password, saltRounds, function (err, hash) {

        newUser.password = hash
        
        createItem(newUser, usersPath)
            .then(() => {
                return res.status(201).json(newUser)
            })

    })        
})

// Route 3
userRouter.post('/auth', async (req, res) => {

    let registeredUser = {
        email: req.body.email,
        password: req.body.password,
    }
       
    let existingUser = validation.missingEntryCheck(await getAllItems(usersPath), "email", req.body.email,)

    // First check if email is registered (in user database)

    if (existingUser == null) {
        
        return res
        .status(400)
        .json( { message: 'There is no user with that email registered, contact the site owner to register' } )     
    }

    // Then check if password from request matches the existing user's password

    bcrypt.compare(req.body.password, existingUser.password, function (err, result) {

        if (!result) {
            return res.status(401).json( { message: 'That password is incorrect, please try again' } )
        }

        else if (result) {
            let token = jwt.sign(registeredUser, `${process.env.JWT_SECRET}`)
            return res.status(201).json( { token: token } )
        }

        })
    
    
})

export default userRouter;