const ReactQandA = [
  {
    id: "1",
    que: "What is React?",
    ans: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: "2",
    que: "What are the features of React?",
    ans: "The key features of React are Virtual DOM, JSX, Components, and One-way data flow.",
  },
  {
    id: "3",
    que: "What is JSX?",
    ans: "JSX is a syntax extension for JavaScript that allows you to write HTML-like structures in your JavaScript code.",
  },
  {
    id: "4",
    que: "What is the significance of Virtual DOM?",
    ans: "Virtual DOM is a lightweight copy of the actual DOM and it allows React to perform faster updates.",
  },
  {
    id: "5",
    que: "What are React components?",
    ans: "React components are the building blocks of a React application's user interface.",
  },
  {
    id: "6",
    que: "What is the difference between functional and class components?",
    ans: "Functional components are simple JavaScript functions whereas class components are ES6 classes.",
  },
  {
    id: "7",
    que: "What is the purpose of render() in React?",
    ans: "The render() method is used to render the component's HTML representation.",
  },
  {
    id: "8",
    que: "What is state in React?",
    ans: "State is an object that holds the data that influences how the component is rendered.",
  },
  {
    id: "9",
    que: "What are props in React?",
    ans: "Props are inputs to a React component that are passed from its parent component.",
  },
  {
    id: "10",
    que: "What is the significance of keys in React?",
    ans: "Keys are used to identify unique Virtual DOM elements and improve performance.",
  },
  {
    id: "11",
    que: "What is the purpose of componentDidMount() in React?",
    ans: "componentDidMount() is a lifecycle method that is invoked immediately after a component is mounted.",
  },
  {
    id: "12",
    que: "What is the use of shouldComponentUpdate() in React?",
    ans: "shouldComponentUpdate() is used to let React know if a component's output is affected by the state or props change.",
  },
  {
    id: "13",
    que: "What is the purpose of componentWillUnmount() in React?",
    ans: "componentWillUnmount() is a lifecycle method that is invoked immediately before a component is unmounted.",
  },
  {
    id: "14",
    que: "What is React Router?",
    ans: "React Router is a popular routing library for React applications.",
  },
  {
    id: "15",
    que: "What are controlled and uncontrolled components in React?",
    ans: "Controlled components are components that manage their state, while uncontrolled components manage their own state.",
  },
  {
    id: "16",
    que: "What is Redux?",
    ans: "Redux is a predictable state container for JavaScript applications.",
  },
  {
    id: "17",
    que: "What is the purpose of action creators in Redux?",
    ans: "Action creators are functions that create actions, which are payloads of information that send data from your application to your Redux store.",
  },
  {
    id: "18",
    que: "What are reducers in Redux?",
    ans: "Reducers specify how the application's state changes in response to actions sent to the store.",
  },
  {
    id: "19",
    que: "What is the role of the store in Redux?",
    ans: "The store holds the application's state and allows access to it via getState().",
  },
  {
    id: "20",
    que: "What is React Native?",
    ans: "React Native is a framework for building mobile applications using React.",
  },
  {
    id: "21",
    que: "What is the purpose of AsyncStorage in React Native?",
    ans: "AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system for React Native.",
  },
  {
    id: "22",
    que: "What is the significance of the shouldComponentUpdate() method in React Native?",
    ans: "The shouldComponentUpdate() method is used to let React Native know if a component's output is affected by the state or props change.",
  },
  {
    id: "23",
    que: "What is the purpose of the useEffect() hook in React?",
    ans: "The useEffect() hook is used to perform side effects in function components.",
  },
  {
    id: "24",
    que: "What is the use of the useState() hook in React?",
    ans: "The useState() hook is used to add state to function components.",
  },
  {
    id: "25",
    que: "What is the purpose of the useContext() hook in React?",
    ans: "The useContext() hook is used to access the value of a context in a function component.",
  },
  {
    id: "26",
    que: "What is the significance of the useMemo() hook in React?",
    ans: "The useMemo() hook is used to memoize a value and optimize expensive calculations.",
  },
  {
    id: "27",
    que: "What is the use of the useRef() hook in React?",
    ans: "The useRef() hook is used to create a mutable reference that persists across component renders.",
  },
  {
    id: "28",
    que: "What is the purpose of the useCallback() hook in React?",
    ans: "The useCallback() hook is used to memoize a function and optimize expensive calculations.",
  },
  {
    id: "29",
    que: "What is the significance of the useReducer() hook in React?",
    ans: "The useReducer() hook is used to manage complex state logic in a more organized way.",
  },
  {
    id: "30",
    que: "What is the use of the useLayoutEffect() hook in React?",
    ans: "The useLayoutEffect() hook is used to perform side effects after the DOM has been updated.",
  },
  {
    id: "31",
    que: "What is the purpose of the useImperativeHandle() hook in React?",
    ans: "The useImperativeHandle() hook is used to customize the instance value that is exposed to parent components when using the ref attribute.",
  },
  {
    id: "32",
    que: "What is the significance of the forwardRef() function in React?",
    ans: "The forwardRef() function is used to forward the ref attribute to a child component.",
  },
  {
    id: "33",
    que: "What is the purpose of the memo() function in React?",
    ans: "The memo() function is used to memoize a component and optimize rendering.",
  },
  {
    id: "34",
    que: "What is the significance of the React.Fragment component in React?",
    ans: "The React.Fragment component is used to return multiple elements from a component's render method.",
  },
  {
    id: "35",
    que: "What is the purpose of the PureComponent class in React?",
    ans: "The PureComponent class is used to optimize the rendering performance of a component.",
  },
  {
    id: "36",
    que: "What is the significance of the React.StrictMode component in React?",
    ans: "The React.StrictMode component is used to highlight potential problems in an application's code.",
  },
  {
    id: "37",
    que: "What is the purpose of the React.createContext() function in React?",
    ans: "The React.createContext() function is used to create a context object.",
  },
  {
    id: "38",
    que: "What is the significance of the React.lazy() function in React?",
    ans: "The React.lazy() function is used to lazily load a component.",
  },
  {
    id: "39",
    que: "What is the purpose of the React.Suspense component in React?",
    ans: "The React.Suspense component is used to show a fallback UI while waiting for a lazily loaded component to load.",
  },
  {
    id: "40",
    que: "What is the significance of the React.memo() function in React?",
    ans: "The React.memo() function is used to memoize a component and optimize rendering.",
  },
];
export default ReactQandA;
