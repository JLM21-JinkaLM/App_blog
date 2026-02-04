const express = require('express');

const app = express()

const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000

app.use(express.json());

const blog = require('./routes/blog')

app.use('/api/v1',blog);

app.listen(PORT,()=>{
    console.log('server is runnig')
})

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>")
})
const mongoDB = require('./config/database')

mongoDB()