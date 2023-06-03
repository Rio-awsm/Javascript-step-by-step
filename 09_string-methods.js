let name = "Harry\""
let friend = "Raju"
let girl = "    Meena"
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2 , 4));
console.log(name.replace("Har", "Per"));
console.log(name.concat(friend));
console.log(girl.trim());
console.log(name[2]);

const sentence = "He is a good boy"
const word = "girl"
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : "is not"} in the sentence`);