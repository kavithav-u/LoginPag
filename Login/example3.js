// // const express = require('express')
// // const app = express();



// // app.set('view engine','ejs')

// // app.get('/',(req,res)=>{
// //     res.render('myEJS',{
// //         heading:"My heading",
// //         title: "My Title"
// //     })
// // })

// // app.listen(3000,()=>{
// //     console.log("server Listening")
// // })




// let str = "hello";
// let newStr = "";
// let count = 0;

// for(let i=0;i<str.length;i++){
//     for(let j=i+1;j<str.length;j++){
//         if(str[i]!==str[j]){
//             count = 1;
//              newStr += str[i];
//         }
//     }
// }
// if(count===0){
// console.log(newStr)
// }




function splitDigits(n) {
    let digits = [];
    while (n > 0) {
      let remainder = n % 10;
      digits.unshift(remainder);
      n = Math.floor(n / 10);
    }
    return digits;
  }
  let n = 88;
  let digits = splitDigits(n);
  console.log(digits); // outputs [1, 2, 3, 4, 5]
    