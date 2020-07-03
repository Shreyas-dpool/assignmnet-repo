// // basic if
// let condition =100
//if (condition>100){
//     console.log('true')
        
// }   
// }
// // if else 
// let condition =100
//     if (condition>100){
//         console.log('true')
//     }   
//     else{
//         console.log ('false')
//     }
// //else if
// let condition =100
// if (condition>100){
//     console.log('true')
// }   
// else if (condition>90){
//       console.log('greater than 90')
// }else{
//     console.log ('false')
// }
// nested if
// let condition =100
// if (condition==100){
//     console.log('true')
    
//     if (condition>90){
//         console.log('greater than 90')
//     }
//      if (condition>80){
//             console.log('greater than 80')
//     }
       
// }else {
//     console.log("False")
// }

// Test Area 
    
let h =true
let b = 7
while (h) {
    
    h= b % 4
    if (h>1 || h==1){                         
console.log('greater than 1')
   
    if (h>2){
        console.log ('greater than 2')
        
    }
            if (h>3 || h==3){
                 console.log('greater than 3 equal to 3')
                 
      break

       }
    }
}