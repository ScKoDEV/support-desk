const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // to tell it which type it is connected with
    },
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Ticket'
    },
    text: {
        type: String,
        required: [true, 'Please add some text']
    },
    isStaff: {
        type: Boolean,
        default: false
    },
    staffId: {
        type: String
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Note', noteSchema)