// debugger;

function printNames() {
  var printedNames1 = myName + " " + yourName;
  let printedNames2 = myName + " " + yourName;

  console.log("[function] my name is: ", myName);
  console.log("[function] your name is: ", yourName);

  console.log("[function] printed names 1: ", printedNames1);
  console.log("[function] printed names 2: ", printedNames2);
}

var myName = "Danial";
let yourName = "Reihane";

console.log("[main] my name is: ", myName);
console.log("[main] your name is: ", yourName);

printNames();

// console.log("[function] printed names 1: ", printedNames1);
// console.log("[function] printed names 2: ", printedNames2);

function calculateSomethingHard(n) {
  //   debugger;
  let nSquared = Math.pow(n, 2);
  const pi = 3.141517;
  const result = nSquared * pi;

  return result;
}

function myAwesomeButtonClicked() {
  console.log("clicked");
}

// console.log(calculateSomethingHard(2));

// find element on DOM
let myAwesomeButtonById = document.getElementById("myAwesomeButtonId");

// manipulate/edit element
myAwesomeButtonById.onclick = myAwesomeButtonClicked;

// find element(s)

// singular
// document.getElementById

// plural
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName