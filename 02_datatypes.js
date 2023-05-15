//Premitive data types (7 in number)
let a = null; //null
let b = 345; //number
let c = true; //boolian
let d = BigInt("3345") //big int
let e = "Rio" //string
let f = Symbol("This is a symbol") //symbol
let g = undefined //undefined

console.log(a,b,c,d,e,f,g)
console.log (typeof d)

//Non premitive datatypes --> Objects
const hero = {
   Health : 500,
   Power : "Infinite strength",
   Weakness :  false,
}

console.log(hero);
console.log(hero["Power"]);
//function of objects is to make key avlue pairs