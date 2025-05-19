const args = process.argv.slice(2);
const number = parseInt(args[0]);

//  if (!isNaN(number)){
//     for(let i = 0; i < number; i++){
//         console.log("X".repeat(number))
//     }
//  }else{
//     console.log("Missing size");
//  }

!isNaN(number)
  ? [...Array(number)].forEach(() => console.log("X".repeat(number)))
  : console.log("Missing size");
