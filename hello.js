// Javascript file
// alert("Js Running...")
console.log("Hello Ajay!");

// Variables
// Variables are names we use to store data in computer programs.
// Variables declarators are var, let, and const.
var fname = "Blard";
let gravity = 9.8;

console.log(fname);
console.log(gravity);

var firstName = "Samson"
var lastName = "Ajama"
var middleName = "Peregete"

console.log(firstName);
console.log(lastName);
console.log(middleName);

// class activity 1
const ftName = "John";
let mdName = "Doe";
mdName = "love";
const ltName = "Wilshere";
const age = 45;

console.log(ftName, mdName, ltName, age);


// Data Types in JS
/*
-Strings
-Numbers
-Boolean
-Null
-Undefined
-Objects
-Arrays
-BigInt
*/ 

// String
// strings are text/data stored in either single or double quotes
const singleQuoteString = 'Hello, this is a string in single quotes';
const doubleQuoteString = "Hello, this is a string in double quotes";
console.log(singleQuoteString);
console.log(doubleQuoteString);

const stack = 'I\'m a fullstack developer at techstudio academy';
console.log(stack);

// Numbers
// Numbers represented integers and floats
const num1 = 3;
const num2 =2.333;
const num3 = 3 * 10**5
const num4 = 3e5
const num5 = -273
const num6 = "x" /2
console.log(num3 == num4, num3, num4);
console.log(num6);


// Boolean
// Booleans return true or false
let isAuth = true;
const isAdult = false;
if (isAuth) {
    console.log("user logged in");
}else{
    console.log("You're not logged in");
}

// Null
let emptyCan = null;
console.log(emptyCan); 
emptyCan = [2,5,7]
console.log(emptyCan);

// undefined
let undefinedCan = undefined;
console.log(undefinedCan);

// checking data type
console.log(typeof age);
console.log(typeof firstName);

// Object
// object is a data structure that stores data in key-value pairs 
// object is created using {}
const bioData = {
    fname: "Bugman",
    lname: "Soft",
    age: 75,
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    address: {
        street: "Adeyanju",
        city: "Lagos",
    }
}
console.log(bioData);
console.log(bioData.address.city);
console.log(bioData.skills[2]);

// Arrays
// Array is a collection of items enclosed in a rectangular bracket.
const myArr = [1, 2, true, null, false, "string"]
console.log(myArr);

// string and string methods
// concationation of strings 
// string methods- length, indexOf, toUpperCase, toLowerCase, concat, split, slice, trim, replace
const myStr1 = "Javascript";
const myStr2 = "Python";
const myAgeStr = "23";
const statement = "My name is " + fname + " " + lastName + " I am " + age + " years old, and i write " + myStr1 + " and " + myStr2;
console.log(statement);
// template string
const newStatement = `My name is ${fname} ${lastName}, I am ${age} years old, and I write ${myStr1} and ${myStr2}`;
console.log(newStatement);

// length
let lengthOfStr1 = myStr1.length;
console.log(lengthOfStr1);

// indexOf
console.log(myStr1.indexOf('p'));
console.log(myStr1[8]);

// Uppercase
let upper = newStatement.toUpperCase();
console.log(upper);

// Lowercase
let lower = newStatement.toLowerCase();
console.log(lower);

// concat
let newStr = myStr1.concat(myStr2);
console.log(newStr);

// split
let str = "Although the and operator is often used to add together two values";
let arr = str.split("");
console.log(arr);

// slice
const sentence = 'Comparison operators are used to compare two values';
const crthebest = sentence.slice(3,  15);
console.log(crthebest);
const ghost = sentence.slice(18);
console.log(ghost);

// trim
const Str = "  Straight, Up!  ";
const trimmedStr = Str.trim();
console.log(trimmedStr);


// substring
const stew  = "MetroBooming";
console.log(stew.substring(3, 7));

// replace
console.log(myStr1);
const replString = myStr1.replace("Javascript", "Django");
console.log(replString);

const OldString = "My name is Blard Ajama I am 45 years old, and i write Javascript and Python"
const lovString = OldString.replace("Ajama", "Samson")
console.log(lovString);

// Operators

// Arithmetic Operators
console.log(5 + 3 - 4 / 2);
let x = 20
let y = 10
let z = -5
let result = (x - y - z) % 5
console.log(result);
if (x % 2 == 0){
    console.log("x is an even number");
}else{
    console.log("x is not an even number");
}

// 
x += 5;
console.log(x);
console.log(y);
y -= z;
console.log(y);

// ++
const num = [1, 2, 3, 4]
for (let i = 0; i < num.length; i++){
    console.log(num[i] + 2);
}

// --
const sum = [1, 2, 3, 4]
for (let i = sum.length; i >= 0; i--){
    console.log(sum[i] * 2);
}

// Assignment operators
let academy = "Techstudio.com";
let oddNum = [1, 3, 5, 7, 9];
// 

// Logical operators
const T = true
const F = false
console.log(isAuth);
console.log(isAdult);
console.log(T && T);
console.log(T && F);
console.log(F && T);
console.log(F && F);
console.log(T && !isAdult);
console.log(isAuth && isAdult);
console.log("////////////");
console.log(T || T);
console.log(T || F);
console.log(F || T);
console.log(F || F);
console.log(T || !isAdult);
console.log(isAuth || isAdult);
console.log(isAuth || isAdult && T);

let pwd = "mypassword123"
if(pwd.length >11 && pwd.includes("#")){
    console.log("strong password");
}else{
    console.log("Your password is not strong enough!");
}

// Comparison operators
// == lose comparison: compares the values of the variables and not the data types.
// === strict comparison: compares the values of the variables and their data types.

let Age = '23'
let newAge = 23;
console.log(Age == newAge);
console.log(Age === newAge);
console.log(Age === String(newAge));
console.log(Age !== newAge);
console.log(Age != newAge);


// Math methods: floor, ceil, max, main, random, rounds
// Math.floor() returns only the whole number part of a decimal (Not rounding up/down)
let unfloor = 9.6554;
console.log(unfloor);
let floorNum = Math.floor(unfloor);
console.log(floorNum);

// Math.ceil() this rounds upward to the nearest whole number regardless of the decimal part. 
let ceilNum = Math.ceil(unfloor);
console.log(ceilNum);

// Math.round()
// Math.round() rounds up/down to nearest whole number
let rounded = 3.56;
console.log(Math.round(rounded));

// Math.random()
// Math.random() is used to generate random numbers and between 0 and 9
const myRandom = Math.random() *1000000
console.log(myRandom);
const OTP = Math.floor(myRandom)
console.log(OTP);
let dice = Math.random() * 9
let dice2 = Math.ceil(dice)
console.log(dice);
console.log(dice2);

// Conditionals if, if-else, else-if-else, switch, ternary operator

// if 
// if(condition){

// }
// if
if (!isAdult){
    console.log("You can drive");
}

// if-else
if (isAdult){
    console.log("You can drive");
}else{
    console.log("Wait till you turn 18");
}

let pass = "example@123";
if (isAuth && pass.length < 8){
    console.log("Very weak password!");
}else if (pass.length > 8 && pass.includes("P")){
    console.log("Moderately strong password!");
}else if (pass.includes("@") || pass.includes("#") && pass.length > 10){
    console.log("Very strong pasword!");
}

// create variables called acctBal, atmPin. Using simple conditional statements, write a code that logs the following:
// a) if user is authenticated, and atmPin is correct, it should log the message: "Your account balance is ---"
// b) if user is not authenticated or incorrect atmPin, it should log the message: "Transaction declined"

let pin = "2000";
if (isAuth && pin.length < 4){
    console.log("Incorrect Pin");
}else if (pin.length >= 4){
    console.log("Transaction successful! Your account balance is $30,000");
}

const withDraw = "$25,000"
const acctBal = "$40,000"
const newBal = "$15,000"
if (withDraw > acctBal){
    console.log("Insufficient Balance");
}else if (acctBal > withDraw){
    console.log(`Withdrawal successful. Your new account balance is ${newBal}`);
}

// Switch statement
const caseValue = null
switch (caseValue){
    case 1:
        // run this code 1
        break
    case 2:
        // run this code 2
        break
    case 3:
        // run this code 3
        break
    default:
        // run this default code
}

// Example
// let userInput = prompt('What day is today?')
// let day = userInput.toLowerCase()
// console.log(userInput, day);
// switch (day) {
//     case 'sunday':
//         console.log(`Today is ${day}`);
//         break
//     case 'monday':
//         console.log(`Today is ${day}`);
//         break
//     case 'tuesday':
//         console.log(`Today is ${day}`);
//         break
//     case 'wednesday':
//         console.log(`Today is ${day}`);
//         break
//     case 'thursday':
//         console.log(`Today is ${day}`);
//         break
//     case 'friday':
//         console.log(`Today is ${day}`);
//         break
//     case 'saturday':
//         console.log(`Today is ${day}`);
//         break
//     default:
//         console.log("Invalid entry");
// }

// let userPass = prompt('What is your username and password?')
// let myPass = userPass.toLowerCase()
// const acctBal3 = ('What is your account balance?')
// const money = '10,000'
// const deposit = ('How much did you deposit?')
// const withDraw2 = ('How much do you want to withdraw?')
// switch (myPass) {
//     case 'soft':
//         console.log(`Log in succesful`);
//         break
//     case 'value':
//         console.log(`Your account balance is ${money}`);
//         break
//     case 'view':
//         console.log(`Your account has been credited with ${money}`);
//         break
//     case 'long':
//         console.log(`Withdrawal Successful. Your new balance is ${money}`);
//         break
//     default:
//         console.log("Invalid entry");
// }

// let ourInput = prompt("Enter PIN or username")
// let loginPin = ourInput.toLowerCase();
// let accName = "Blard"
// let deposit = "deposit";
// let withdraw = "withdraw";
// let checkbalance = "balance";
// let myAcctBal = 1000;
// if(loginPin == 1234 || loginPin == "admin"){
//        let action = prompt("What would you like to do?").toLowerCase();
//        switch(action) {
//             case "deposit":
//                 // console.log("Deposit");
//                 let depAmt = Number(prompt("Enter amount to deposit"))
//                 // myAcctBal = myAcctBal + depAmt;
//                 myAcctBal += depAmt;
//                 console.log(`Your new account balance is:  $${myAcctBal}`);
//                 break
//             case "withdraw":
//             // console.log("Withdraw");
//                 let withdrwAmt = Number(prompt("Enter amount to withdraw"))
//                 myAcctBal -= withdrwAmt
//                 console.log(`You withrew: $${withdrwAmt}\nYour new account balance is: $${myAcctBal}`);
//                 break
//             case "balance":
//             console.log("Checkbalance");
//                     console.log(`Your account balance is: $${myAcctBal}`);
//                 break
//             default:
//                 console.log("something went wrong");
//        }  
// }else{
//     console.log("Wrong PIN or Username");
// }

// Ternary Operator
// syntax:
// condition? run_this_code_1 : run_this_code2
// Using Ternary Operator
// !isAuth ? console.log("You are authorized") : console.log("You are not authorised");
// let action = prompt("What would you like to do?").toLowerCase();

// (loginPin == 1234 || loginPin == "admin") ? console.log("You're logged in") : console.log("Login failed")


// Array
const myNewArr = [3, true, "apple", null, undefined, {key1: "value1", key2: "value2"}, [1,2,3], "Okiki"]

// Accessing array items
console.log(myNewArr[3]); //null
const firstItem = myNewArr[0] //3
const indexOflastItem = myNewArr.length - 1 // 
console.log(myNewArr[indexOflastItem]);

// modifying Arrays
console.log(myNewArr);
myNewArr[4] = "defined"
console.log(myNewArr);

// unshift() or push() for adding one item at beginning and at end r.p.t
myNewArr[4] = "defined"
console.log(myNewArr);
myNewArr.unshift("newItem")
console.log(myNewArr);
myNewArr.push("lastItem") 
console.log(myNewArr);

// shit and pop 
myNewArr.shift("newItem")
console.log(myNewArr);
myNewArr.pop("lastItem")
console.log(myNewArr);

// splice
// Arr.splice(startIndex, delNumItems, addNumItems)
const splicedArr = myNewArr.splice(0, 3)
console.log(splicedArr);
console.log(myNewArr);
myNewArr.splice(0, 0, "banana", 10, "Orange")
console.log(myNewArr);

myNewArr.splice(3, 2,"fire","love");
console.log(myNewArr);

// Assignment
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey',  'Soap', 'Malt', 'Coke'];

shoppingCart.unshift('Chocolate')
console.log(shoppingCart);

let milo = ("Sugar")
milo = shoppingCart.concat("Sugar")
console.log(milo);

shoppingCart[3] = "Green Tea"
console.log(shoppingCart);

shoppingCart.splice(3, 2);
console.log(shoppingCart);

const zeke = shoppingCart.concat("Cornflakes","Bournvita","Hennessy");
console.log(zeke);

const cane = shoppingCart.length;
console.log(cane);


// join()
const numbers = [1,2,3,4,5]
console.log(numbers.join(":"));

// reverse()
console.log(numbers.reverse());

// sort()
let mNum = [20, 40, 5, 30, 15, 98, 70, 2];
mNum.sort(function(a, b) {
    return a - b;
});
console.log(mNum);
let alph = ["Submarine", "Pineapple", "Vintage", "Python"];
console.log(alph.sort());

// clear
numbers.length = 0;
console.log(numbers);

// Loops for, while, for-in, do-while:

// for:
for(let i = 0; i < 7; i++){
    console.log(i);
}

for(let i = 1; i <= 12; i++){
    if(i == 5){
        // break
        // continue
    }
    console.log(`${i} X ${12} = ${i * 12}`);
}

// while:
let n = 1;
while(n <= 12){
    console.log(`${n} X ${12} = ${n * 12}`);
    n++;
}

// do-while
let k = 1;
do{
    console.log(`${k} X ${12} = ${k * 12}`);
    k++;
}while(k <= 12);

// class activity
let marks = [1, 5, 3, 2, 7, 4, 6, 8, 10, 9]
const evenNum = []
for(let i = 0; i < marks.length; i++){
    if(marks[i] % 2 == 0){
        evenNum.push(marks[i])
    }
}
console.log(evenNum);

let newMarks = [];
let markLength = marks.length;
while(markLength != 0){
    if (marks[markLength] % 2 == 0){
    newMarks.push(marks[markLength])
    }
    markLength --;
}
console.log(newMarks);

// using for-of
for (const alph of marks) {
    console.log(alph);
}

// using filter()
let filtered = marks.filter((even) => even % 2 == 0)
console.log(filtered);

// Functions:
// How to create function:
// function declaration
// function expression
// Arrow function

// // function declaration
// function sampleFunction(){
//     // write some code here
// }

// // function expression
// const sampleFunction = function (){
//     // write some code here
// }

// // Arrow function
// let myFunction = ()=>{
//     // write some code here 
// }


function sampleFunction(){
    console.log("This is function declaration....");
}
sampleFunction();


const sampleFunction2 = function(){
    console.log("This is function expression....");
}
sampleFunction2();


let myFunction = ()=>{
    console.log("This is arrow function....");
}
myFunction();


// Function parameter and arguements
function greetingFunction (fname="Haland", lname="Debruyne"){
    console.log(`Hello ${fname} ${lname}`);
}
greetingFunction("Okiki", "Daniel");

const addNum = (a, b)=>{
    return a + b;
}
console.log(addNum(2, 6));


function addNum2 (...args){
    let sum = 0
    for (let i = 0; i < args.length; i++){
        sum += args[i];
    }
    console.log(sum);
}
addNum2(1, 3, 5, 6, 6, 5,)

// Task
const country = ["Zimbabwe", "Togo", "Ghana", "Sudan", "Uk", "Spain"]
const fruits = ["Guava", "Lime", "Apple", "Pawpaw", "Banana"]

// creating the function
const changeToUpperSort = (arr) => {
  let newCountry = []
  for (const element of arr) {
    newCountry.push(element.toUpperCase())
  }
  // console.log(newCountry.sort());
  newCountry = newCountry.sort()
  console.log(newCountry);
}
// Involking the function
changeToUpperSort(country);
changeToUpperSort(fruits);


// Objects
// Object is a collection of properties in key-value pairs.
// creating an object

const myObj = {};
const rectangle = {
    length: 20,
    width: 10,
    area: function (){
        return `Area is: ${this.length * this.width}cm^2`;
    }

}
console.log(rectangle);
console.log(rectangle.length);
console.log(rectangle.width);
console.log(rectangle.area());

// const person = {
//     firstName2: "Ajama",
//     lastName2: "Samson",
//     age2: 20,
//     country2: "Nigeria",
//     skills: ["html" , "css" , "bootstrap" , "javascript", "React"],
//     isMarried: false,
//     status: this.isMarried ? "I am married" : "I'm single",
//     getDetail: function (){
//         return `My name is ${this.firstName2} ${this.lastName2}, i'm ${this.age2}. I am from ${this.country2}. My skills are ${this.skills}.\n${this.status}`
// }
// }

import {otherData, person} from "./module.js"
console.log(otherData);
console.log(person);
// console.log(person.firstName2);
// console.log(person.lastName2);
// console.log(person.age2);
// console.log(person.country2);
// console.log(person.skills);
// console.log(person.getDetail());

// // creating new properties
// person.education = ["Bsc", "Msc", "PhD"]
// console.log(person);

// // Adding to an existing properties
// person.skills.push('Saas')
// console.log(person.skills);
// console.log(person.skills[person.skills.length - 1]);

// // Destructing object 
// const {firstName2, lastName2, age2, country2, skills, isMarried} = person
// console.log(`My name is ${firstName2} ${lastName2}`);

// // combining objects using spread operator
// const newObj = {
//     experience: 10,
//     canDrive: true,
//     drink: false
// }
// const ObjAdd = {...person, ...newObj}
// console.log(ObjAdd);

// // object methods
// // object methods are assign(), keys(), values(), entries()
// // object.assign() is used to copy an existing object 

const copyPerson = Object.assign({}, person)
console.log(copyPerson);
copyPerson.hobby = "Gaming"

const directCopy = person
console.log(directCopy);
directCopy.club = "Man City"

// Object.keys() is used to get all the keys in an object
const keys = Object.keys(copyPerson)
console.log(keys);

// Object.values() is used to get all the values in an object
const values = Object.values(copyPerson)
console.log(values);

// Object.entries() is used to get the value pair in an object
const entries = Object.entries(copyPerson)
console.log(entries);

for(const keys in person){
    if(keys == 'getDetail'){
        continue
    }
    console.log(`${keys}: ${person[keys]}`);
}

// import todoList
import {toDoList} from "./data.js"
console.log(toDoList);

// Higher Order Array functions map, filter, find, forEach, reduce, some, every
// map()
toDoList.map((item)=> {
    console.log(item.id, item.text);
})

// const callbackFunction = (item)=>console.log(item.id, item.next)
// toDolist.map(callbackFunction)
const mappedList = toDoList.map(function(item){
    return `Item: ${item.id} is ${item.text}`
})
console.log(mappedList);

// To filter out completedTask
const completedTask = toDoList.filter((item)=>{
    return item.isDone
})
console.log(completedTask);
let mapHelper = completedTask.map((item)=>`${item.text} ${item.time}`)
console.log(mapHelper);
mapHelper.forEach((item)=>console.log(item))

// forEach
toDoList.forEach((item)=>{
    console.log(item.text);
})

// find
const prices = [23, 22, 25, 32, 22, 98]
const findPrice = prices.find((price)=> price > 25)
console.log(findPrice);

const students = ['Nathan', 'Eddy', 'Seun', "Enny", 'Mubarak']
const largeName = students.find((student)=> student.length > 6)
console.log(largeName);
console.log(largeName.toUpperCase());


//reducer
// arrName.reduce((acc, cur)=>)

// }, intialValue)
const addPrices = prices.reduce((acc, curr)=> acc += curr, 0)
console.log(addPrices);

import {companies} from "./company.js"
console.log(companies);

// step 1
const filteredCompanies = companies.filter(company => {
    const yearsOfExistence = company.to - company.from;
    return yearsOfExistence >= 15;
});
console.log(filteredCompanies);

// step 2
const answer = filteredCompanies.map(company => {
    return `${company.company} has existed for ${company.to - company.from} years`
});
console.log(answer);

const cateGory = filteredCompanies.map(company =>{
    return `${company.category}`
})
console.log(cateGory);


// step 3
answer.forEach(company => console.log(company));

// To filter company with same category
// let searchResult = prompt('Search Category')
// const categorySearch = companies.filter((company)=>{
//     const category = company.category
//     return category === searchResult
// })
// categorySearch.forEach(item => console.log(`Company name: ${item.company} Category: ${item.category}`))

// sort()
const sortedStudents = students.sort()
console.log(sortedStudents);

// sorting array of numbers
prices.sort((a, b) =>{
    return a - b;
})
console.log(prices);


// setTimeout(callback, timeOut)
console.log('Before setTimeOut');
setTimeout(()=>{
    console.log("SetTimeout is finally out!");
}, 5000)
console.log('After setTimeOut');

// steTimeInterval
const myInterval = setInterval(() =>{
    console.log("Hey! some code running...");
}, 5000);

const stopInterval = ()=>{
    clearInterval(myInterval)
}
stopInterval()


// Promise
// creating a promise
// syntax:
// const promise = new Promise((resolve, reject)=>{
    // resolve('promise fulfilled');
    // reject('promise rejected');
// })

const doPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const sports = ['Soccer', 'Tennis', 'Golf']
        if(sports.length > 0){
            resolve(sports)
        }else{
            reject('Something went wrong')
        }
    }, 2000)
})

doPromise
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})

// Async/await

const sqNum = async function(n){
    return n*n
}

const result2 = await sqNum(8);
console.log(result2);


// Fetch API
// fetch using promises
// fetch using async await

// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const array = data
//     const desiredObj = array.map((item)=>`${item.name}`)
//     console.log(desiredObj[10]);
//     console.log(data)
//   })
//   .catch(error => console.error(error))



  const love = ["james", "stacy", "imade"]; 
const [first, second, third] = love

console.log(first);


import {Bank} from "./theory.js"
console.log(Bank);


let totalBal = "100,000" 
let withdraw5 = "40,000"
let newBal2 = "60,000"

if(totalBal < withdraw5){
    console.log(`your account bal is ${newBal2}`);
}else{
    console.log("Insufficient Balance");
}

// To get specified number of countries
const url = 'https://restcountries.com/v2/all';
const li = document.querySelector('#con')

fetch(url)
.then(response => response.json())
.then(data =>{
    const numberOfItems = 10;
    const slicedData = data.slice(0, numberOfItems);
    console.log(slicedData);
    slicedData.forEach(item =>{
        console.log(`${item.name}(${item.cioc}) Population: ${item.population}`)
        li.innerHTML += `<li><strong>${item.name}</strong> (${item.cioc}) <strong>Population:</strong> ${item.population}</li>`
    })
})
.catch(error => console.error(error));


//Using async await
async function getFirstTen(start, end){
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const firstTen = data.slice(start, end)
    console.log(firstTen);
}

getFirstTen(0, 10)












