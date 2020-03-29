/****************** Arrow Function here ******************/

// console.log("Arrow function type 1...");
// var funcType1 = (name, age, txt) => {
//     return "Name : "+name+" age : "+age+" txt : "+txt;
// }
// console.log("Arrow function type 1...", funcType1('Amit', 40, 'test'));

// var funcType2 = (name, age, txt) =>  "Name : "+name+" age : "+age+" txt : "+txt ;
// console.log("Arrow function type 2...", funcType2('Ajay', 30, 'virun'));

/****************** Object properties and methods ******************/

const person = {
    name: "Vijaydinanath",
    age: 75,
    profession(){
        console.log("i am an Actor")
    }
};

// console.log(person.name, person.age);
// person.profession();

/****************** Arrays and array methods ******************/

const hobbies = ["Sports", "Cooking", "Reading"];

console.log("Elements of hobbies", hobbies);

console.log("Array elements here...");
for (let hobby of hobbies){
    console.log(hobby);
}

console.log("Map", hobbies.map( element => 'element : '+element)); // traverse each element of array
console.log(hobbies);

console.log("Push",hobbies.push('Driving')); // add new element at end
console.log(hobbies);

console.log("Reverse",hobbies.reverse()); // reverse array element
console.log(hobbies);

console.log("Sort",hobbies.sort());
console.log(hobbies);

console.log(hobbies);
console.log("join",hobbies.join("---"));// concatenate elements of array with given separator and return string

console.log(hobbies);
console.log("indexOf",hobbies.indexOf('Sports'));// index Of element -1 if not found

console.log(hobbies);
console.log("length", hobbies.length);// provide array length

console.log("pop", hobbies.pop()); // remove element from end
console.log(hobbies);

console.log("shift", hobbies.shift()); // remove element from begin
console.log(hobbies);

hobbies.push("Boxing");
hobbies.push("VideoGame");
hobbies.push("Painting");
console.log(hobbies);

console.log("slice()", hobbies.slice()); // copied entire array from start to end
console.log("slice(1,2)", hobbies.slice(1,2)); // copied entire array from start to end
console.log(hobbies);

console.log("splice", hobbies.splice(2,1,"Running", "Writing"));
console.log(hobbies);

console.log("unshift", hobbies.unshift("FirstElement"));// Add element at begin
console.log(hobbies);

console.log("concat", hobbies.concat());// Add element at begin
console.log(hobbies);

/************ Rest and Spread Operator ****************/
const copiedArray = [...hobbies];   // spread operator for array
console.log("Spread Array", copiedArray);

const copiedObject = {...person}; // spread operator for object
console.log("Spread Object", copiedObject);

const restArray = (...args) =>{
    return args;
}
console.log("restOperator", restArray(1,2,3,4,5,6,7,8,9,10)); // rest operator for array

/********************* Object Destructuring  *****************/

/*
Destructuring - The destructuring syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable

*/

let a, b, rest;
[a,b,] = [10,20];
console.log("a", a, "b", b);
[a,b,...rest] = [10,20,30,40,50,60,70,80,90,100];
console.log("a", a, "b", b, "rest", rest);





