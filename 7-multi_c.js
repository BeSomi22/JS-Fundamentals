const args = process.argv.slice(2);
const number = parseInt(args[0]);

 //  if(!isNaN(number)){
//     for(let i = 0; i < number; i++){
//         console.log("C is fun")
//     }
//  }else {
//     console.log("Missing number of occurrences");
//  }

args[0] === undefined && console.log("Missing number of occurrences");
number > 0 && [...Array(number)].forEach(() => console.log("C is fun"));

