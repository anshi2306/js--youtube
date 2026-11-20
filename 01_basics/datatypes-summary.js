// # Primitive 

// 7 types: String,number,boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 389565442121543434n



//Reference (Non Primitive)= datatype:function hi bola jata hai

//  types:Arrays,Objects,Functions

const heroes =[ "shaktimaan","naagraj","doga"]
let myObj = {
    name:"Anshika",
    age:21,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

