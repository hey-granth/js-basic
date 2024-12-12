const stud = {
    gender: 'male',
    'full name': 'Ramesh Sharma',
    email: 'ramesh@gmail.com',
    age: 25,
    location: 'Ghaziabad',
    loginDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    isLogin: true,
};

console.log(stud);
console.log(typeof stud);

stud.name = 'Ramesh Sharma';

console.log(stud);
console.table(stud);
console.log(stud.age);
console.log(stud['full name'])
console.log(stud['email'])


// if statement
if (stud.isLogin) {
    console.log(stud.loginDays);
}


// if the key is more than one words, we use '' or "" to enclose the variable name.
// in anything except false, NULL is true in JS

let t1 = {}
if (t1) {
    console.log('Yes')
} else {
    console.log('No')
}
// the output will be yes as t1 is an empty object and it is true in JS

let t2;
if (t2) {
    console.log('Yes')
} else {
    console.log('No')
}
// the output will be no as t2 is undefined and it is false in JS

// we can also create and store functions within an object
stud.greeting = () => console.log('hello')
stud.greeting()