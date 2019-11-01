const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
    {
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
    },
    {
        timestamps: true,
    }
)

const Task = mongoose.model('Tasks', taskSchema)

module.exports = Task
