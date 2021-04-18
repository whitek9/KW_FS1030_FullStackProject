// Leveraged from the 'authentication-example/lib/middleware/jstVerify.js' lab code from the FS1020 GitLab repo
import * as jwt from 'jsonwebtoken'

export default (req, res, next) => {
    
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if (token == null) {
        return res.status(400).send( { message: "token not provided" } )
    }
    
    try {
        const data = jwt.verify(token, `${process.env.JWT_SECRET}`)
        req.user = data
        next()
    } 
    
    catch (err) {
        console.error(err)
        return res.status(403).send( { message: err.message } )
    }
}