const mongoose = require('mongoose')

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
})

module.exports = Tasks
