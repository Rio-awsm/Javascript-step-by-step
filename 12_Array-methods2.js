let num = [23, 67, 1, 45, 4, 9, 100];
num.sort(); //alphabetical sort
console.log(num);

let compare = (a, b) => {
  return a - b;
};
num.sort(compare);
console.log(num);
console.log(num.reverse());

let dig = [21, 6, 10, 34, 56, 31];
let deleted = dig.splice(2, 3, 101, 102, 103);
console.log(dig);
console.log(deleted);

let dig2 = [2, 44, 67, 89, 12, 11];
let newNum = dig2.slice(3);
console.log(dig2);
console.log(newNum);
