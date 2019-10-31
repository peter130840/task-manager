const mongoose = require('mongoose')

const Task = mongoose.model('Tasks', {
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
})

module.exports = Task
