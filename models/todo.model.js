const {Schema,model} = require('mongoose')

const toDoSchema = Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        trim:true,
        maxlenght:[20,'name cannot be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = model('toDo', toDoSchema)