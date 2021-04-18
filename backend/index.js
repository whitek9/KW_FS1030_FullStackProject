import express from 'express'
import cors from 'cors'
import contactFormRouter from './src/routes/contactFormRouter'
import userRouter from './src/routes/userRouter'
import errorHandler from "./src/middleware/errorHandler"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

app.use(userRouter)

app.use(contactFormRouter)

app.get("*", (req, res, next) => {
    
    let err = new Error("user typed non-existent URL")
    
    next(err)

})

app.use(errorHandler)

app.listen(PORT, () => console.log(`API server ready on http://localhost:${PORT}`))


