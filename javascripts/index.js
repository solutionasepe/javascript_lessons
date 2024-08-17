const prompt = require('prompt-sync')();
//1. First lecture, introduction to js, assigning a variabe
let iceCream = "chocolate";
if (iceCream === "chocola") {
  console.log("Yay, I love chocolate ice cream!");
} else {
  console.log("Awwww, but chocolate is my favorite…");
}

//2. second lecture, creating a function
function test() {
  var a = "3";
  var b = "8";
  var c = a; 
  a = b;
  b = c;

  console.log("a is " + a);
  console.log("b is " + b);
} 
 
test();

// 3. Third lecture, still on variable assignment
var message = "Hello";
var name = " Asepe";

card = message + name
console.log(card)


// 4. Fourth lecture, quiz challange, for the maximum number of characters to be 140
var Txt = prompt("Enter the characters: ");
// console.log(Txt);
var txtLength = Txt.length;
let totalLength = 140;
if (txtLength <= 140){
  var side = totalLength - txtLength
  console.log(txtLength);
  console.log("The total length remain: " +side,);
}
else{
    console.log("This are: "+Txt.slice(0,140));
}


//5. Fifth lecture, lecture on slicing
var name = ("the name of my faculty is the faculty of technology, in ile-ife, osun state");
console.log(name.slice(0,8));

// 6. Sixth lecture, still on slicing.
var name = prompt("What is your name? ");
name = name.toLowerCase();
var firstIndex = name.slice(0,1);
name = name.slice(1);
var firstIndexToUpper = firstIndex.toUpperCase();
console.log("Hello", firstIndexToUpper+name);

// 7. Seventh lecture, sill on slicing.
var name = prompt("What is your name?" );

capitalizedName = '';
for (let i=0; i<name.length; i++){
  if(i===0){
    newName = name[i].toUpperCase();
  }
  else {
    newName = name[i].toLowerCase();
  }
  // capitalizedName += newName;
};
console.log(newName);

// 8. Eight lecture, learning about function in js.
function lifeInWeeks(age){
  var yearsRemaining = 90 - age;
  var days = age * 365;
  var months = age * 12;
  var weeks = age * 52;

  console.log("You have", yearsRemaining, "years remaining", months, "months", weeks, "weeks", "and", days, "days left");
}

lifeInWeeks(56);

// 9. Ninth lecture, still on functions.
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  var numberOfBottles = Math.floor(money/1.5);
  console.log("buy", numberOfBottles, "bottles of milk");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5;
}
var change = getMilk(4);
console.log(change);


// 10. Application of function a BMI task 
let weightInput = prompt("What is your weight: ");
let weight = parseInt(weightInput, 10);

let heightInput = prompt("What is your height: ");
let height = parseInt(heightInput, 10);

function Bmi(weight, height){
  var bmi = weight/height**2;
  // console.log(Bmi);
  return bmi;
}

console.log(Bmi(weight, height));

// 11. matching love game
prompt('what is your name: ');
prompt('what is her name: ');

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;


// 12. leap year task
let leapYearInput = prompt("pick any year you think is a leap year and we will confirm whether you are right or wrong: ");
let year = parseInt(leapYearInput, 10);

function leapYear(year){
    if (year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                console.log("This is a leap year");   
            } else{
                console.log('This is not leap year');
            };    
        } else{
            console.log("This is a leap year");
        };
    } else{
        console.log("This is not a leap year");
    };
}

leapYear(year);

// 13. Adding of guest task
var guestList = ["Angela", "Asepe", "Anu", "Mary", "Ogo"];
var guest = prompt("What is your name? ");

if (guestList.includes(guest)){
    console.log("You're welcome");
} else{
    console.log("You aren't invited");
};


// 14. fizzbuzz challenge 
var output = [];
var count = 1;

function fizzBuzz(){
    if (count % 3 === 0){
        output.push("fizz");
    }
    else if (count % 5 === 0){
        output.push("Buzz");
    }
    else if (count % 5&&3 === 0){
        output.push("fizzbuzz");
    }
    else{
        output.push(count);
    }
    count++;
    console.log(output);
}
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();


// 15. continuation on functions and other aspects, i've learnt
var name = ["Asepe", "Mayowa", "Tunde", "Asake"]

function whospaying(name){
        var numberOfPeople = name.length;
        var randomPosition = Math.floor(Math.random() * numberOfPeople);
        var payer = name[randomPosition];
        console.log(payer, "will pay for it.");
        return payer, "will pay for it.";
}

whospaying(name)


// 16. Bottle lyrics game
var numberOfBottles = 99;

while(numberOfBottles >= 0 ){
    var bottleWord = "bottles";
    if (numberOfBottles === 1){
        bottleWord = "bottles";
    };
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");

    numberOfBottles--;
}

// 16. fibonacci Genetrator task
var num = [0,1];
function fibonacciGenetrator(n){
    
    for(var i=2; i<n; i++){
        // var num = [];
        if (n === 1){
            num = [0];
        }
        else if (n === 2){
            num = [0, 1];
        }
        else if (n>2){
            
            num.push(num[num.length-2]+num[num.length-1]);
        }
        
    } 
    return num;
}

var ans = fibonacciGenetrator(4)
console.log(ans)

// 17. another method to the fibonacci task

function fibonacciGenetrator(n){
    var output =[];
    if (n===1){
        output = [0];
    }
    else if(n===2){
        output =[0,1];
    }
    else{
        output =[0,1];
        for(i=2; i<n; i++){
            output.push(output[output.length-2]+output[output.length-1]);
        }
    }
    return output;
}

var ans = fibonacciGenetrator(6)
console.log(ans)