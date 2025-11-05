console.log("hello world")

// List
a = [1,2,3,4,4,'asd']
a.push(3)
b = a.push({2:45, 4:'this'})
console.log(`updated list ${a}`)
console.log(`This is pushed append ${b}`)
c=a.pop()
console.log(`This is popped ${c}`)
a.shift() //remove from start
a.splice(4, 1); //split 1 element startoing fromm 4th idex

console.log(`THis is 2nd ${a[2]}`)

a.splice(2, 6); //split 6 element startging fromm 4th idex
console.log(`this is list ${a.join(' ')}`)    // unlike python only ` interpolate not "" or ''

//unshift
console.log(a)
a.unshift(4) // push at start
console.log(a)

//function
funk1 = (params,n)=>{
    console.log('THis is arrow function')
    console.log(`pparams ${params} ${n}`)
    // return 45
}
v = funk1(34,56)
console.log(`v is ${v}`)


// Create a new Map
let m = new Map();

// Add elements (key-value pairs)
m.set("name", "Om");
m.set("age", 25);
m.set("language", "JavaScript");

// Access elements
console.log(`Name: ${m.get("name")}`); // Om

// Update a value
m.set("age", 26);

// Delete a key
m.delete("language");

// Iterate through Map
console.log("All entries:");
for (let [key, value] of m) {
  console.log(`${key} => ${value}`);
}

// Check if a key exists
console.log(`Has 'age'? ${m.has("age")}`);

// Size of Map
console.log(`Map size: ${m.size}`);



// const

const a1 = 'tjs'
// a1 = 'asd' We ge error 


var b2 = 12

func2 = ()=>{
    // let b2 = 43 
    var b2 = 43 
    // b2 = 345

    // let and var will unot update the global b2
    // directly using b2 will update the variable
}
func2()
if (true){
    let b2 =  56  //wont update the global b2
}
// data types in the javascript
console.log(`this is b2 ${b2}`)
console.log(typeof a)
console.log(typeof b2)
let x = 42;
console.log(typeof x); // "number"

let name = "Om";
console.log(typeof name); // "string"

let isActive = true;
console.log(typeof isActive); // "boolean"

let arr = [1, 2, 3];
console.log(typeof arr); // "object"  (⚠️ arrays are objects in JS)

let m1 = new Map();
console.log(typeof m1); // "object"

let f = function() {};
console.log(typeof f); // "function"


// object destructuring 
const person = { name1: "Om", age: 25 };

// variable names match keys
const { name1: fullName, age: years } = person;
const { name1, age } = person;

console.log(fullName, name1); // "Om"
console.log(years, age);  // 25

// rest/spread
console.log(...a)

// assignment
person2 = person

console.log('Person 1 Name(bef update)', person.name1)
person2.name1 = 'Om2'

console.log('Person 1 Name(after update)', person.name1)
console.log(`Person 1 ${person.name1} Person 2 ${person2.name1}`)

function printDetails({ name, age, city, country }, vg) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);
  console.log(`Country: ${country}`);
  console.log(vg)
}

printDetails({
  name: "Om",
  age: 25,
  city: "Pune",
  country2: "India",
  hfa: '23'
});

console.log(a)
// MAP
b = a.map()
console.log(b)
