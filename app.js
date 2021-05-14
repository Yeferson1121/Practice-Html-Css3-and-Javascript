
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

var username = "ryan";
let user_Name = "jeff"
const lastname = "carter"


// Carriers - Operators

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

// CONTINUATION

/* VARIABLES 1.0 */

 // Prompt with alert
  var NickName = "Kizaru_11";
   NickName = prompt ('Enter name');
   Year = prompt ("Enter year");
   document.write (NickName + ' ' + Year);

/* ARRAY 1.0 */

// METHODS AND PROPIRTIES
 var friends = ["Carlos", "Cesar", "Alex"];
        //Concatenation 
    // document.write ("Do you have " + friends.length + " friends");    
    /*friends [friends.length] = "Fernando";
    friends [friends.length] = "Luis";*/
    friends.push ("Luis", "Fernando", "Oscar"); 



  








