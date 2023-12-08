const asyncHandler = require('express-async-handler')

// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = asyncHandler( async (req, res) => {
    const {name, email, password} = req.body

    // Validation
    if(!name || !email || !password) {
        // Client did not send the correct information = 400 error
        res.status(400)
        // We use our error handler to deal with the error message
        throw new Error('Please include all fields')
    }
    res.send('Register Route')
})


// @desc Login a new user
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser
}