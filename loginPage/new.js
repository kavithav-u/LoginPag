// const sayHello = require('./work')



// sayHello();


// const hello = require("./work")

// console.log(hello.name)
// hello.greet();



const express = require('express');
const app = express();
const port = 2001;

app.get('/',(req,res)=>{
res.send("Hello world")
}) 

app.listen(port,()=>{
    console.log("app listening to port 2000")
})