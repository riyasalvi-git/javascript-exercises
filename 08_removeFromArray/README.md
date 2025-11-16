# Exercise 08 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

See if you can make use of some built-in array methods in this exercise.

## Hints

The first test on this one is fairly easy, but there are a few things to think about (or google) here for the later tests:

- you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
- how to remove a single element from an array
- how to deal with multiple optional arguments in a JavaScript function
- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

## Learnings
- About the use of spread syntax: to be used when there is a possibility of there being more than one arguments for a function call. Basically a parameter that can be expanded in an array like obj if needed but not necessary.
