# JS Notes

- `npm` - Node Package Manager
- `==` => equality operator, compares only value
- `===` => strict equality operator, compares value and type
- JS is case-sensitive
- `...` is a 
- IIFE - Immediately Invoked Function Expression
```javascript
(() => {
    console.log('IIFE');
})();

// or

((uname) => {
    console.log(uname, 'is logged in');
})('John');

// or

((uname = 'John') => {
    console.log(uname, 'is logged in');
})();
```



To run a file using terminal
```bash
node <filname.js>
```