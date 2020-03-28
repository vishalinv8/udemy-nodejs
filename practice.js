/****************** Arrow Function here ******************/
console.log("Arrow function type 1...");
var funcType1 = (name, age, txt) => {
    return "Name : "+name+" age : "+age+" txt : "+txt;
}
console.log("Arrow function type 1...", funcType1('Amit', 40, 'test'));

var funcType2 = (name, age, txt) =>  "Name : "+name+" age : "+age+" txt : "+txt ;
console.log("Arrow function type 2...", funcType2('Ajay', 30, 'virun'));

/****************** Object properties and methods ******************/
const person = {
    name: "Vijaydinanath",
    age: 75,
    profession(){
        console.log("i am an Actor")
    }
};
console.log(person.name, person.age);
person.profession();

/****************** Arrays and array methods ******************/


