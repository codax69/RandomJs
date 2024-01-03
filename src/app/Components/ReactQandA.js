const ReactQandA =  [
  {
    id: 1,
    qus: "What are props and state in React?",
    ans: "Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React components on creation using a naming convention similar to HTML-tag attributes. Props are read-only and cannot be modified by the component. State is local data storage that is local to the component only and can be changed by the component. State is mutable and can trigger re-rendering of the component when it is updated.",
  },
  {
    id: 2,
    qus: "What is JSX and why is it used in React?",
    ans: "JSX stands for JavaScript and XML and allows writing HTML in React. JSX is a syntax extension that makes it easier to write and read React code. JSX is not mandatory, but it is recommended because it simplifies the creation of React elements and components. JSX is compiled into JavaScript by a transpiler such as Babel.",
  },
  {
    id: 3,
    qus: "What is the difference between a class component and a functional component in React?",
    ans: "A class component is a React component that is defined using a class that extends React.Component. A class component has a state, a lifecycle, and methods. A functional component is a React component that is defined using a function that returns a React element. A functional component does not have a state, a lifecycle, or methods, but it can use hooks to add state and lifecycle features.",
  },
  {
    id: 4,
    qus: "What are hooks in React and why are they useful?",
    ans: "to reuse logic across components, avoid complex class components, and simplify your code. Some of the built-in hooks are useState, useEffect, useContext, useRef, and useReducer.",
  },
  {
    id: 5,
    qus: "How can you optimize the performance of a React application?",
    ans: "There are different ways to optimize the performance of a React application, such as:Using production build and minifying the code.Using code splitting and lazy loading to reduce the initial bundle size and load only what is needed.Using memoization and pure components to avoid unnecessary re-rendering of components.Using custom hooks and useCallback to avoid creating new functions on every render.Using the React DevTools and the Profiler API to measure and analyze the performance.",
  },
  
];

export default ReactQandA;
