
// Data types


// Strings

"First codice from practice"
'Second codice from practice'


// Number 

1000
1.000
-1.000


// Boolean

true
false


// Array

// METHODS AND PROPIRTIES
var friends = ["Carlos", "Cesar", "Alex"];
//Concatenation 

// document.write ("Do you have " + friends.length + " friends");

/*friends [friends.length] = "Fernando";

friends [friends.length] = "Luis";*/

friends.push ("Luis", "Fernando", "Oscar"); 
friends.pop();

//var friends2 = friends.join (", ");

var organized = friends.sort();
console.log( friends );

['joe', 'ryan', 'scoot'];
[1, 2, 3];
[true, false, true, false];


// Objects

({
    "username": 'ryan',
    "score": 70.5,
    "hours": 14,
    "proffesional": true
});

({
    "username": 'joe',
    "score": 10.4,
    "hours": 2,
    "proffesional": false
});


// Variables

// Prompt with alert
var NickName = "Kizaru_11";
NickName = prompt ('Enter name');
Year = prompt ("Enter year");
console.log(NickName + ' ' + Year);

var username = "ryan";
let user_Name = "jeff"
const lastname = "carter"

// Example from Variable with functions (alert and prompt)

let nombre = prompt("tell me your name");

alert("Hola " + nombre);


// Carriers - Operators

// All the operators

// = Assignment
// + Sum
// - Subtraction
// * Multiplication
/* / Division */
// % Rest
// ** Exponentiation
// -- Decrement
// ++ Increment

let numberOne = 70;
let numberTwo = 80;

let result = numberOne + numberTwo;

console.log (result);

let Name = "Yeferson";
let lastName = "Tapias";

let completeName = Name + '' + lastName;

console.log (completeName);


// Comparation

let NumberOne = 200;
let NumberTwo = 700;

let Result = NumberOne < NumberTwo;

console.log (Result);

let password = "Skrillex777"
let input = "there'snoleaguethisyear"

let login =password == input;

console.log (login);

let Number_One = 300;
let Number_Two = 966;

let iguality = Number_One >! NumberTwo;

console.log (iguality);


// Conditional

// TYPES OF CONDITIONAL

// < smaller than
// > greater than
// <= less than or equal
// >= greater than or equal
// == equal than (like)
// != different than

if (login == true) {
    console.log ('Login correct');
}
else console.log ('Password wrong');


// Conditional Flow

let score = 20;

if (score > 30) {
    console.log ("You're getting better");
}

else if (score > 15) {
    console.log ('You need to practice more');
}

else {
    console.log ('You practice more housers');
}


// Conditional - Switchs

let TypeCard = 'XXX';

switch (TypeCard) {
    case 'Debid Card':
        console.log ('This is a debid card');
        break
    case 'Credit Card':
        console.log ('This is a credit card');
        break
    default:
        console.log ('No card');        
}


//Bluces 

let count = 0;
 while (count <=50) {
     console.log (count);
      count = count +1
 }

 let names = ['ryan', 'joe', 'john', 'mario'];
 
 for (let i = names.length -1; i >=0; i--) {
     console.log (names [i]);
     
 }


 // Function

 function greeting (person) {
     console.log ('Hello' + person);
 }
greeting ('Bengi');
greeting ('Tanjiro');
greeting ('Saitama');

function add (n1, n2) {
    console.log (n1 + n2);
}
add (3,4);
add (19434,93434);


 













  








