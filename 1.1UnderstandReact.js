// 2021.11.01 FROM (M) 
/*----------------------------------*/ REACT
// UNDERSTAND REACT
REACT = a JavaScript library
// React is a collection of code scripts and functions that can be used for building my own code
// REACT lets coders create web apps and interactive user interfaces purely with JavaScript

/*----------------------------------*/ REACT
// will need a package manager called "npm" to set up React on the computer
 npm install react    => Success! React isntalled
|_________________|



/*----------------------------------*/
/*----------------------------------*/ (I)
// UNDERSTAND REACT
// REACT generated and then inserts HTML into a pre-existing HTML container, 
// like a dive element, in our webpage
// Here we set up that container 
// and create an empty  <div id="root"></div>  inside  "index.html"  file
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


/*----------------------------------*/ REACT (script.jsx)
import React from "react";
// this statement imports React into our app
// this code import React into the script.jsx
// we type this at the top of the script to gain access to REACT's various features (1)

import ReactDOM from "react-dom";
// also need to IMPORT a second package called ReactDOM, 
// which will allow to render (print out) the content onto a webpage (2)

ReactDOM.render();
// the ReactDOM.render() print out content into a webpage
// the ReactDOM.render() FUNCTION needs to be called first (3)

ReactDOM.render(
    <h1>Hello, Isaac</h1>,
);
// now specify "WHAT" to render and "WHERE" to render (4)
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



/*----------------------------------*/
/*----------------------------------*/ An example:
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

//?? (JSX)------------------
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
    <h1>Hello, Isaac</h1>,
    document.getElementById("root")
);
/*----------------------------------*/




/*----------------------------------*/
/*----------------------------------*/ (II)
//?? (HTML)------------------
<!doctype html>
<html>
 <head>
  <script type="module" src="./index.js"></script> 
  <link rel="stylesheet" href="./index.css" />
 </head>
 <body>
  <div id="root">loading</div>
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
