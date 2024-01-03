
const NextQNA = [
  {
    id: 1,
    qus: "What is Next.js and what are its benefits?",
    ans: "Next.js is a React framework that provides features such as server-side rendering, static site generation, code splitting, routing, and more. Some of the benefits of Next.js are:It improves the performance and SEO of React applications by rendering them on the server and sending pre-rendered HTML to the browser.It simplifies the development and deployment of React applications by providing a zero-configuration setup, a file-system based router, and a built-in bundler.It enables the creation of hybrid applications that can use both static and dynamic rendering methods depending on the page and the data.",
  },
  {
    id: 2,
    qus: "How does routing work in Next.js?",
    ans: "Next.js uses a file-system based router that maps the URL to a file in the pages directory. For example, a request to /about will render the file pages/about.js. Next.js also supports dynamic routes, which can use parameters or query strings to render different pages based on the URL. Dynamic routes are created by using square brackets in the file name, such as pages/posts/[id].js or pages/[...slug].js.",
  },
  {
    id: 3,
    qus: "How can data be fetched in Next.js?",
    ans: "Next.js provides two built-in methods for fetching data: getStaticProps and getServerSideProps. getStaticProps is used for static site generation and runs at build time. It fetches the data and passes it as props to the page component. getServerSideProps is used for server-side rendering and runs on every request. It fetches the data and passes it as props to the page component. Both methods can use any data source, such as an API, a database, or a file system.",
  },
  {
    id: 4,
    qus: "What are the advantages of using Next.js over create-react-app?",
    ans: "Next.js is a React framework that provides features such as server-side rendering, static site generation, code splitting, routing, and more. Some of the advantages of using Next.js over create-react-app are:It improves the performance and SEO of React applications by rendering them on the server and sending pre-rendered HTML to the browser.It simplifies the development and deployment of React applications by providing a zero-configuration setup, a file-system based router, and a built-in bundler.It enables the creation of hybrid applications that can use both static and dynamic rendering methods depending on the page and the data.",
  },
  {
    id: 5,
    qus: "How can you use CSS modules in Next.js?",
    ans: "CSS modules are a way of scoping CSS to specific components and avoiding global style conflicts. To use CSS modules in Next.js, you need to follow these steps:Create a CSS file with the same name as your component and add the .module extension. For example, Button.module.css.Write your CSS rules as usual, using class names or ids.Import the CSS file in your component and use the imported object to access the generated class names. For example:JavaScriptAI-generated code. Review and use carefully. More info on FAQ.",
  },
];


export default NextQNA
