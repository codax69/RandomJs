const QandA = [
  {
    id: 1,
    qus: "What is the difference between var, let, and const in JavaScript?",
    ans: "var declares a variable in the function scope, which means it is accessible anywhere within the function. let and const declare variables in the block scope, which means they are only accessible within the block where they are defined. const also prevents reassignment of the variable, while let allows it.",
  },
  {
    id: 2,
    qus: "What is the difference between == and === in JavaScript?",
    ans: "== is the equality operator, which compares two values and returns true if they are equal or can be coerced to be equal. === is the strict equality operator, which compares two values and returns true only if they have the same type and value.",
  },
  {
    id: 3,
    qus: "What are some of the new features in ES6 (ECMAScript 2015)?",
    ans: "Some of the new features in ES6 are:Arrow functions, which are concise and lexically bind this.Template literals, which allow string interpolation and multi-line strings.Destructuring, which allows extracting values from arrays and objects into variables.Classes, which provide syntactic sugar for defining constructor functions and prototypes.Modules, which allow exporting and importing values from other files.Promises, which represent asynchronous operations that can be chained and handled with then and catch.Generators, which are functions that can be paused and resumed with yield and next.Async/await, which are syntactic sugar for working with promises using async and await keywords.",
  },
  {
    id: 4,
    qus: "What is the difference between a promise and an observable in JavaScript?",
    ans: "A promise is an object that represents a single asynchronous operation that can either resolve or reject with a value. An observable is a stream of values that can be subscribed to and can emit multiple values over time. Promises are eager, meaning they start executing as soon as they are created, while observables are lazy, meaning they only start emitting values when they are subscribed to.",
  },
  {
    id: 5,
    qus: "How can you implement inheritance in JavaScript?",
    ans: "There are different ways to implement inheritance in JavaScript, such as using the prototype chain, the constructor function, the class syntax, or the object.create method. One common way is to use the prototype chain, which links objects to other objects and allows them to share properties and methods. For example, to create a subclass of an existing class.",
  },
];
export default QandA;
