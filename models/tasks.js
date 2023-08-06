const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema ({
    name: {
        type : String,
        required : [true, 'Must provide an name'],
        trim : true,
        maxlength : [250, 'Name must be within 20 characters']
    },
    completed: {
        type : Boolean,
        default : false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)