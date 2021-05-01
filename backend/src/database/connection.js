import mysql from 'mysql'

const DB_SECRET = process.env.DB_SECRET
const DB_NAME = process.env.DB_NAME

const connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: DB_SECRET,
    database: DB_NAME
})

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }

    console.log('Database Connected')
})


export default connection