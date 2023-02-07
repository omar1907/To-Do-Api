process.on("uncaughtException",(err)=>{
    console.log("uncaughtException",err);
})


const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const tasks = require('./routes/todo')
const dbConnect = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/notfound')
const errHandlerMiddleWare = require('./middleware/errorHandler')



/// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)

//Error Handling Middleware
app.use(errHandlerMiddleWare)
app.use(notFound)

//Checking DB Connection
const start = async () =>{
    try {
        await dbConnect(process.env.CONNECT_URL).then(()=>{
            console.log('db connection established');
        })
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    } catch (err) {
        console.log(err);
    }
}

start()

process.on('unhandledRejection',(err)=>{
    console.log("unhandledRejection",err);
})