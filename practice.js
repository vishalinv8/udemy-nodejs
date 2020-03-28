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

// console.log("Array elements here...");
// for (let hobby of hobbies){
//     console.log(hobby);
// }

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

console.log("slice", hobbies.slice(1));
console.log(hobbies);

console.log("splice", hobbies.splice(2,1,"Running", "Writing"));
console.log(hobbies);

console.log("unshift", hobbies.unshift("FirstElement"));// Add element at begin
console.log(hobbies);

console.log("concat", hobbies.concat());// Add element at begin
console.log(hobbies);

/************ Rest and Spread Operator ****************/
const copiedArray = [...hobbies];
console.log("Spread Array", copiedArray);

const copiedObject = {...person};
console.log("Spread Object", copiedObject);









