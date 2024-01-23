const QandA = [
  {
    id: "1",
    que: "What is JavaScript?",
    ans: "JavaScript is a high-level, interpreted programming language that is used to make web pages interactive.",
  },
  {
    id: "2",
    que: "What are the advantages of using JavaScript?",
    ans: "There are several advantages of using JavaScript, such as: 1. Increased interactivity and responsiveness of web pages. 2. Reduced server load. 3. Immediate feedback to the visitors. 4. Richer interfaces and enhanced user experience.",
  },
  {
    id: "3",
    que: "What are the different data types in JavaScript?",
    ans: "The different data types in JavaScript are: 1. Number 2. String 3. Boolean 4. Object 5. Null 6. Undefined 7. Symbol (new in ECMAScript 6)",
  },
  {
    id: "4",
    que: "What is the difference between 'null' and 'undefined' in JavaScript?",
    ans: "In JavaScript, 'null' is an assignment value that represents no value or no object. 'undefined' is a variable that has been declared but has not been assigned a value.",
  },
  {
    id: "5",
    que: "What is the difference between '=='' and ''===' in JavaScript?",
    ans: "The '==' operator checks for equality after doing necessary type conversions. The '===' operator (strict equality operator) checks for equality without performing any type conversions.",
  },
  {
    id: "6",
    que: "What is the use of 'this' keyword in JavaScript?",
    ans: "The 'this' keyword refers to the object that the function is a property of. It has different values depending on where it is used: 1. In a method, 'this' refers to the owner object. 2. In a function, 'this' refers to the global object (window object in a browser). 3. In an event, 'this' refers to the element that received the event.",
  },
  {
    id: "7",
    que: "What is a closure in JavaScript?",
    ans: "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It remembers the variables in its scope chain even if the outer function has finished executing.",
  },
  {
    id: "8",
    que: "What is the difference between 'let' and 'var' in JavaScript?",
    ans: "The 'var' keyword has function scope and can be redeclared and reassigned. The 'let' keyword has block scope and cannot be redeclared but can be reassigned within its scope.",
  },
  {
    id: "9",
    que: "What is event delegation in JavaScript?",
    ans: "Event delegation is a technique in which we attach a single event listener to a parent element instead of attaching multiple event listeners to multiple child elements. This is useful when we have a large number of child elements or when the child elements are dynamically added or removed.",
  },
  {
    id: "10",
    que: "What is the purpose of the 'use strict' directive in JavaScript?",
    ans: "The 'use strict' directive is used to enable strict mode in JavaScript. It helps to write more reliable and bug-free code by catching common mistakes and preventing the use of certain error-prone features.",
  },
  {
    id: "11",
    que: "What is hoisting in JavaScript?",
    ans: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before the code is executed.",
  },
  {
    id: "12",
    que: "What are the different ways to create objects in JavaScript?",
    ans: "There are several ways to create objects in JavaScript, such as: 1. Object literals 2. Constructor functions 3. Object.create() method 4. ES6 classes",
  },
  {
    id: "13",
    que: "What is the difference between 'null' and 'undefined' in JavaScript?",
    ans: "In JavaScript, 'null' is an assignment value that represents no value or no object. 'undefined' is a variable that has been declared but has not been assigned a value.",
  },
  {
    id: "14",
    que: "What is the difference between '=='' and ''===' in JavaScript?",
    ans: "The '==' operator checks for equality after doing necessary type conversions. The '===' operator (strict equality operator) checks for equality without performing any type conversions.",
  },
  {
    id: "15",
    que: "What is the use of 'this' keyword in JavaScript?",
    ans: "The 'this' keyword refers to the object that the function is a property of. It has different values depending on where it is used: 1. In a method, 'this' refers to the owner object. 2. In a function, 'this' refers to the global object (window object in a browser). 3. In an event, 'this' refers to the element that received the event.",
  },
  {
    id: "16",
    que: "What is a closure in JavaScript?",
    ans: "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It remembers the variables in its scope chain even if the outer function has finished executing.",
  },
  {
    id: "17",
    que: "What is the difference between 'let' and 'var' in JavaScript?",
    ans: "The 'var' keyword has function scope and can be redeclared and reassigned. The 'let' keyword has block scope and cannot be redeclared but can be reassigned within its scope.",
  },
  {
    id: "18",
    que: "What is event delegation in JavaScript?",
    ans: "Event delegation is a technique in which we attach a single event listener to a parent element instead of attaching multiple event listeners to multiple child elements. This is useful when we have a large number of child elements or when the child elements are dynamically added or removed.",
  },
  {
    id: "19",
    que: "What is the purpose of the 'use strict' directive in JavaScript?",
    ans: "The 'use strict' directive is used to enable strict mode in JavaScript. It helps to write more reliable and bug-free code by catching common mistakes and preventing the use of certain error-prone features.",
  },
  {
    id: "20",
    que: "What is hoisting in JavaScript?",
    ans: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before the code is executed.",
  },
  {
    id: "21",
    que: "What are the different ways to create objects in JavaScript?",
    ans: "There are several ways to create objects in JavaScript, such as: 1. Object literals 2. Constructor functions 3. Object.create() method 4. ES6 classes",
  },
  {
    id: "22",
    que: "What is the difference between 'null' and 'undefined' in JavaScript?",
    ans: "In JavaScript, 'null' is an assignment value that represents no value or no object. 'undefined' is a variable that has been declared but has not been assigned a value.",
  },
  {
    id: "23",
    que: "What is the difference between '=='' and ''===' in JavaScript?",
    ans: "The '==' operator checks for equality after doing necessary type conversions. The '===' operator (strict equality operator) checks for equality without performing any type conversions.",
  },
  {
    id: "24",
    que: "What is the use of 'this' keyword in JavaScript?",
    ans: "The 'this' keyword refers to the object that the function is a property of. It has different values depending on where it is used: 1. In a method, 'this' refers to the owner object. 2. In a function, 'this' refers to the global object (window object in a browser). 3. In an event, 'this' refers to the element that received the event.",
  },
  {
    id: "25",
    que: "What is a closure in JavaScript?",
    ans: "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It remembers the variables in its scope chain even if the outer function has finished executing.",
  },
  {
    id: "26",
    que: "What is the difference between 'let' and 'var' in JavaScript?",
    ans: "The 'var' keyword has function scope and can be redeclared and reassigned. The 'let' keyword has block scope and cannot be redeclared but can be reassigned within its scope.",
  },
  {
    id: "27",
    que: "What is event delegation in JavaScript?",
    ans: "Event delegation is a technique in which we attach a single event listener to a parent element instead of attaching multiple event listeners to multiple child elements. This is useful when we have a large number of child elements or when the child elements are dynamically added or removed.",
  },
  {
    id: "28",
    que: "What is the purpose of the 'use strict' directive in JavaScript?",
    ans: "The 'use strict' directive is used to enable strict mode in JavaScript. It helps to write more reliable and bug-free code by catching common mistakes and preventing the use of certain error-prone features.",
  },
  {
    id: "29",
    que: "What is hoisting in JavaScript?",
    ans: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before the code is executed.",
  },
  {
    id: "30",
    que: "What are the different ways to create objects in JavaScript?",
    ans: "There are several ways to create objects in JavaScript, such as: 1. Object literals 2. Constructor functions 3. Object.create() method 4. ES6 classes",
  },
  {
    id: "31",
    que: "What is the difference between 'null' and 'undefined' in JavaScript?",
    ans: "In JavaScript, 'null' is an assignment value that represents no value or no object. 'undefined' is a variable that has been declared but has not been assigned a value.",
  },
];
export default QandA;
