const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
        },
        completed: {
            type: Boolean,
            default: false,
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
