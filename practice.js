/****************** Arrow Function here ******************/

// console.log("Arrow function type 1...");
// var funcType1 = (name, age, txt) => {
//     return "Name : "+name+" age : "+age+" txt : "+txt;
// }
// console.log("Arrow function type 1...", funcType1('Amit', 40, 'test'));

// var funcType2 = (name, age, txt) =>  "Name : "+name+" age : "+age+" txt : "+txt ;
// console.log("Arrow function type 2...", funcType2('Ajay', 30, 'virun'));

/****************** Object properties and methods ******************/

// const person = {
//     name: "Vijaydinanath",
//     age: 75,
//     profession(){
//         console.log("i am an Actor")
//     }
// };
// console.log(person.name, person.age);
// person.profession();

/****************** Arrays and array methods ******************/

const hobbies = ["Sports", "Cooking", "Reading"];
console.log("Elements of hobbies", hobbies);

// console.log("Array elements here...");
// for (let hobby of hobbies){
//     console.log(hobby);
// }

console.log("Map", hobbies.map( element => 'element : '+element));
console.log(hobbies);

console.log("Push",hobbies.push('Driving'));
console.log(hobbies);

console.log("Reverse",hobbies.reverse());
console.log(hobbies);

console.log("Sort",hobbies.sort());
console.log(hobbies);

console.log(hobbies);
console.log("join",hobbies.join("---"));

console.log(hobbies);
console.log("indexOf",hobbies.indexOf('Sports'));









