let num = [23, 67, 1];
let a = num.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(a);

let arr = [45, 23, 21, 3, 1];
let a2 = arr.filter((a) => {
  return a < 10;
});
console.log(a2);

let dig = [1, 2, 3, 4, 5, 6];
let b = dig.reduce((e , f) =>{
    return e + f
})
console.log(b);