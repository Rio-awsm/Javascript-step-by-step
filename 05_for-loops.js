//sum of n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n= Number.parseInt(n)
for( let i = 0; i<n; i++){
    sum += (i+1)
}
console.log(sum);

// for in loops

let section = {
   Raj: 90,
   Shiv: 80,
   Shyam: 78,
   Ritika: 69,
}
for (let a in section){
    console.log("Marks of " + a+ " are "+ section[a])
}
//for of loop
for (let b of "Supriyo"){
    console.log(b)
}
