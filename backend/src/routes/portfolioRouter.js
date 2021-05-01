import express from 'express'
import connection from '../database/connection'

const portfolioRouter = express.Router()

portfolioRouter.get('/portfolio/items', (req,res) => {
    
    connection.query(
        "SELECT * FROM portfolio_entries",
    
        function (error, results, fields) {
    
            if (error) throw error
    
            return res
            .status(201)
            .json(results)
        }
    )
})

portfolioRouter.post('/portfolio/new_item', (req,res) => {

    let item = req.body
    let sql = "INSERT INTO `portfolio_entries` (`title`, `description`, `image`, `url`) VALUES (?,?,?,?)"

    
    connection.query( sql, [item.title, item.description, item.image, item.url], function (error, results, fields) {
    
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

portfolioRouter.put('/portfolio/edit_item/:id', (req,res) => {

    let id = req.params.id
    let item = req.body
    let sql = "UPDATE portfolio_entries SET ? WHERE portfolio_id=?"
    
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

portfolioRouter.delete('/portfolio/delete_item/:id', (req,res) => {
    
    let id = req.params.id
    let sql = "DELETE FROM portfolio_entries WHERE portfolio_id=?"

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




export default portfolioRouter