const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5001
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

//Connect to database
connectDB()

const app = express()

//Middleware to handle data which gets posted to server
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the Support Desk API'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))