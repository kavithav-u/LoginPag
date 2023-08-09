const experss = require('express')
const app = express();


app.set('view engine','ejs')

const items=[
    { name:'apple',price:25},
    {name:'banana',price :30}
]

app.get('/',(req,res)=>{
    res.render('index',{items:items})
})

app.listen(3001, ()=>{
    console.log("server listeninig")
})


// let ops = ["5","2","C","D","+"]
// let Record= []
// var sum = 0

//     for (let i = 0; i < ops.length; i++) {
//       if (!isNaN(parseInt(ops[i]))) {
//         Record.push(parseInt(ops[i]));
//         console.log(Record);
//       }

//     else if(ops[i]=="C"){
//         Record.pop()
//         console.log(Record)
//     } 
//     else if(ops[i]=="D"){
//         Record.push((Record[Record.length-1])*2)
//         console.log(Record)
//     } 
//     else if(ops[i]=="+"){
//         Record.push((Record[Record.length-1])+Record[Record.length-2])
//         console.log(Record)
//     }
    
        
//     } 
//     for(let j=Record.length-1;j>=0;j--){
//         console.log(Record)
//         sum= sum + Record[j]
//         console.log(sum)
  
// }

// console.log(sum)
