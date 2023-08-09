// const http = require("http")

// http.createServer(function(req,res){
//     res.write("welcome from me");
//     res.end()
// }).listen("2000")


// function sayHello(){
//     console.log("Module example")
// }

// module.exports = sayHello;


const hello = {
    name:"kavitha",
    age:24 ,
    greet:function(){
        console.log("I am"+this.name)
    }
}

module.exports=hello;