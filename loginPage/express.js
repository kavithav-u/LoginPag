const express = require('express')
const app = express()
const ejs = require('ejs')


app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const data={
        title : "my title",
        message:"good evening"
    };
    res.render('index',data)
});

app.listen(3000,()=>{
    console.log("Server started")
})