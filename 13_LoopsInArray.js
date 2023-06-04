let num = [23, 67, 1, 45, 4, 9, 100];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// num.forEach((element)=>{
//     console.log(element*element);
// })

let name = "Raja";
let arr = Array.from(name);
console.log(arr);

for (const i of num) {
  console.log(i);
}

for (const i in num) {
   console.log(i);
}
