// In Java U have List ->> In JavaScript no need the size is dynamic u can pop it and size it down

//Can except multiple Types of data
let elements = ["James", "Daniel", 1, 2, 3, 4, true, false, 5.5];

console.log(elements);
console.log(elements.length);

console.log("--------------------------------");

let students = ["Shay", "Yulia", "Nijat", "Belinda"];

console.log(students);
console.log(students[0]);
console.log(students[1]);

students[2] = "Breanna";

console.log(students);

console.log("--------------------------------");

let numbers = [45, 55, 65, 75, 80, 90, 100];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log('--------------------------------');

for(let each of numbers){
    console.log(each);
}

console.log('--------------------------------');

let employees = ['Aygun', 'Musabekhon', 'Nasera', 'Betul'];

console.log(employees);

employees.push('Isabella');

console.log(employees);

employees.unshift('Daniel');

console.log(employees);

employees.unshift('Ahmet');
employees.unshift('Ahmet');
employees.unshift('Ahmet');

console.log(employees);

employees.splice(1,3);

console.log(employees);
console.log('----------Shift--------------');
employees.shift();
console.log(employees);

console.log('----------Pop--------------');
employees.pop();

console.log(employees);
