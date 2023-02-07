const mongoose = require('mongoose')

const connectDb = (connectUrl)=>{
    return mongoose
    .connect(connectUrl,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
}

module.exports = connectDb