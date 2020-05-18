/* 2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```
*/

function createBase(base){
    return function(num){
        return base + num;
    }
}

// const addSix = createBase(6);
// console.log(addSix(10));
// console.log(addSix(21));
// console.log(addSix(0));

// const addTen = createBase(10);
// console.log(addTen(10));
// console.log(addTen(21));
// console.log(addTen(0));