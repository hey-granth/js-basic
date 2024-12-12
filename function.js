function sayHi() {
    console.log('Hi');
}
sayHi()

function sum(a = 0, b = 0) {
    return a + b;
}
console.log(sum('granth', 2));

x = sum(2); // default parameter (as we have given default value)
console.log(x);

y = sum(b=2); // named parameter
console.log(y);

// arrow function
const sayhi = () => {
    console.log('Hi');
}
sayhi()
// or
const sayhi2 = () => console.log('Hi');
sayhi2()

const sum2 = (a = 0, b = 0) => (a + b) - (a * b);
console.log(sum2(2, 3))

// if we use curly braces while defining a function, then using the return keyword becomes necessary

// spread operator
function findSum(...num) {
    console.log(num);
}
findSum(10);
findSum(10, 20);
findSum(10, 20, 30);
findSum();
