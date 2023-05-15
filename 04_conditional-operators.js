let a = prompt ("What is your age?")
a = Number.parseInt(a) //convert string to number
if(a<0){
    alert("This is a valid age");
}
else if(a<9){
  alert("You are a kid")
}

else{
    alert("This is an invalid statement");
}

//switch case
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  //ternary operator
console.log("You can", a<18? "not drive" : "drive")