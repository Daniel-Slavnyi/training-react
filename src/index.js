// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// const elem1 = React.createElement('span', {
//   children: "Hello"
// });
// const elem2 = React.createElement('span', {
//   children: "World"
// });

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: [elem1, ' ', elem2]
// });
// console.log(element);



// const jsxElement = <div>'Hello world'</div>;
// console.log(jsxElement);

// const elem1 = <span>Hello</span>;
// const elem2 = <span>World</span>

// const jsxElem = <div>
//   {elem1}
//   {elem2}
// </div>

ReactDOM.render(<App />, document.querySelector('#root'));