import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import * as validation from '../middleware/validationFunctions.js'
import connection from '../database/connection'

const userRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10

// Route 2
userRouter.post('/users', (req,res) => {

    const requiredFields = ['name','password', 'email']
    const incorrectProperties = validation.validationCheck(req.body, requiredFields)
   
    let errorList = { 
        message: 'validation error',
        invalid: []
    }
    
    let newUser = {
        uuid: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }

    if (incorrectProperties.length) {
        errorList.invalid.push(...incorrectProperties)
    }

    if (errorList.invalid.length) {
        return res.status(400).json(errorList)
    }

    bcrypt.hash(newUser.password, saltRounds, function (err, hash) {

        newUser.password = hash
        
        connection.query(
            "INSERT INTO users (uuid, name, email, password) VALUES (?, ?, ?, ?)", [newUser.uuid, newUser.name, newUser.email, newUser.password],

            function (error, results, fields) {

                if (error) throw error
    
                if (results.affectedRows == 0) {
                    return res
                    .status(400)
                    .json( { message: 'Error, User Not Created' } )
                } else {
                    return res
                    .status(201)
                    .json( { message: `User ${newUser.name} Successfully Created` } )
                }
            }
        )
    })        
})

userRouter.post('/auth', (req, res) => {

    const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

    let registeredUser = {
        email: req.body.email,
        password: req.body.password,
    }

    
    // First, query for all users to see if the user exists in the database
    connection.query(
        "SELECT * FROM users WHERE email = ?",
        [req.body.email],
        function (error, results, fields) {

            // Second, send error if user is not found
            if (isEmpty(results)) {
                return res
                .status(400)
                .json( { message: 'There is no user with that email registered, contact your administrator to register' } )     
            }

            // Third check if password from request matches the existing user's password
            bcrypt.compare(req.body.password, results[0].password, function (err, result) {

                if (!result) {
                    return res
                    .status(401)
                    .json( { message: 'That password is incorrect, please try again' } )
                }
        
                else if (result) {
                    let token = jwt.sign(registeredUser, `${process.env.JWT_SECRET}`)
                    return res
                            .status(201)
                            .json( { 
                                token: token,
                                id: results[0].careProviderID
                            } )
                }
            })
        }
    )
})

export default userRouter;