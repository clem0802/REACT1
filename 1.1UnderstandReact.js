// 2021.11.01 FROM (MIMO) 
/*----------------------------------*/
//! UNDERSTAND REACT
// REACT = JavaScript library
// a collection of code scripts and functions that can be used for building my own code
// REACT lets coders create web apps and interactive user interfaces purely with JavaScript
// npm install react //! NPM INSTALL REACT
// Success! React isntalled


/*----------------------------------*/
/*----------------------------------*/ (I)
//! UNDERSTAND REACT
// REACT generated and then inserts HTML into a pre-existing HTML container, like a dive element, in our webpage
// set up that container 
// create an empty  <div id="root">  inside  index.html  file
//! we need this HTML <div id="root"> TAG to make this React app print properly

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <script type="module" src="./index.js"></script>
    </head>
    <body> 
        <div id="root"></div>
    </body>
</html>


//?? (REACT) (script.jsx)------------------
import React from "react";
// this statement imports React into our app
// type the above code line at the top of the script to gain access to REACT's various features (1)

import ReactDOM from "react-dom";
// also need to IMPORT a second package called ReactDOM, which will allow to render (print out) the content onto a webpage (2)

ReactDOM.render();
// the ReactDOM.render() FUNCTION needs to be called first (3)

ReactDOM.render(
    <h1>Hello, Isaac</h1>,
);
// now specify WHAT to render and WHERE to render (4)
// ReactDom.render() takes 2 arguments (4)
// first argument is the content we want to render (4)

ReactDOM.render(
    <h1>Hello, Isaac</h1>,
    document.getElementById("root")
);
// now tell React WHERE to render it in index.html (5)
// add document.getElementById("root"); (5)
//! an <h1> TAG with "Hello, Isaac" is expected to render with this setup in React





/*----------------------------------*/
/*----------------------------------*/ (II)
//! UNDERSTAND REACT

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <script type="module" src="./index.js"></script>
    </head>
    <body> 
        <div id="root"></div>
    </body>
</html>


//?? (REACT) (index.jsx)------------------
import React from "react";
// type the above code line at the top of the script to gain access to REACT's various features (1)

import ReactDOM from "react-dom";
// also need to IMPORT a second package called ReactDOM, which will allow to render the content onto a webpage (2)

ReactDOM.render(
    <p>My first React content</p>,
    document.getElementById("root")
);
