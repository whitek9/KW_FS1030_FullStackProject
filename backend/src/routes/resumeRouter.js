import express from 'express'
import connection from '../database/connection'

const resumeRouter = express.Router()

resumeRouter.get('/resume/items', (req,res) => {
    
    connection.query(
        "SELECT * FROM resume_entries",
    
        function (error, results, fields) {
    
            if (error) throw error
    
            return res
            .status(201)
            .json(results)
        }
    )
})

resumeRouter.post('/resume/new_item', (req,res) => {

    let item = req.body
    
    connection.query(
        "INSERT INTO resume_entries (logo, jobTitle, company, startDate, endDate, experience) VALUES (?, ?, ?, ?, ?, ?)", 
        [item.logo, item.jobTitle, item.company, item.startDate, item.endDate, item.experience],
    
        function (error, results, fields) {
    
            if (error) throw error
    
            if (results.affectedRows == 0) {
                return res
                .status(400)
                .json( { message: 'Error, Entry Not Created' } )
            } else {
                return res
                .status(201)
                .json( { message: `Entry Successfully Created` } )
            }
        }
    )
})

resumeRouter.put('/resume/edit_item/:id', (req,res) => {

    let id = req.params.id
    let item = req.body
    let sql = "UPDATE resume_entries SET ? WHERE resume_id=?"
    
    connection.query(sql, [item, id], function (error, results, fields) {
    
            if (error) throw error
    
            if (results.affectedRows == 0) {
                return res
                .status(400)
                .json( { message: 'Error' } )
            } else {
                return res
                .status(201)
                .json( { message: `Entry Successfully Updated` } )
            }
        }
    )
})

resumeRouter.delete('/resume/delete_item/:id', (req,res) => {
    
    let id = req.params.id
    let sql = "DELETE FROM resume_entries WHERE resume_id=?"

    connection.query(sql, [id], function (error, results, fields) {
    
            if (error) throw error
    
            if (results.affectedRows == 0) {
                return res
                .status(400)
                .json( { message: 'Error' } )
            } else {
                return res
                .status(201)
                .json( { message: `Entry Successfully Deleted` } )
            }
        }
    )
})

export default resumeRouter