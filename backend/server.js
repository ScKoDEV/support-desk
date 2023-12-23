const path = require('path')
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

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

// Server Frontend
if(process.env.NODE_ENV === 'production'){
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
} else {

    app.get('/', (req, res) => {
        res.status(200).json({message: 'Welcome to the Support Desk API'})
    })

}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))