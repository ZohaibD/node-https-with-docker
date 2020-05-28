const express = require('express')
const https = require('https')
const fs = require('fs')

const port = 3321
const httpsOptions = {
    key: fs.readFileSync('./60266907_localhost.key'),
    cert: fs.readFileSync('./60266907_localhost.cert')
  };

const app = express() 

app.get('/',(req,res)=>{
    res.send("Https node application")
})
https.createServer(httpsOptions , app).listen(port,()=>{
    console.log("app is listening on port " , port)
})