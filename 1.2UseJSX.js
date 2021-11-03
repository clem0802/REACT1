// 2021.11.01 FROM (MIMO) 
/*----------------------------------*/
//! USE REACT
// REAcT looks different than anything we've coded before
// that is because it uses JSX (JavaScript XML)
// JSX is a markup syntax that combines USER INERFACE (UI) element and logic
//! basically, JSX tells the browser WHAT to render and HOW


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
        <link rel="stylesheet" href="./index.css" />
    </head>
    <body> 
        <div id="root"></div>
        <script type="module" src="./index.js"></script>
    </body>
</html>


//?? (REACT) (script.jsx)------------------
import React from "react";
// type the above code line at the top of the script to gain access to REACT's various features (1)
import ReactDOM from "react-dom";
// also need to IMPORT a second package called ReactDOM, which will allow to render the content onto a webpage (2)
ReactDOM.render(
    <h1>Hello, John</h1>,
    document.getElementById("root")
);
// the ReactDOM.render() FUNCTION needs to be called first (3)





/*----------------------------------*/
/*----------------------------------*/ (II)
//! JSX
// JSX code allows us to generate HTML tags, hence why we can add HTML-like code inside JavaScript
// however, we have to make sure to not confuse it for either HTML or JavaScript
// it's JSX !

//?? (REACT) (script.jsx)------------------
<p>
    This is a React Element... JSX.
</p>





/*----------------------------------*/
/*----------------------------------*/ (III)
// JSX can use the same markup as HTML, including closing TAGS like  />  or  </ > and ATTRIBUTES like  src
// most of the JSX we'll write will look similar to HTML
// create my first JSX element by coding //!  <div>My first JSX</div>
<div>
    My first JSX
</div>





/*----------------------------------*/
/*----------------------------------*/ (IV)
//! VARIABLES inside JSX
// unlike pure HTML, we can use VARIABLES inside JSX
// this is useful in situations where we want to write JSX in one part of our code 
// and then refer to it somewhere else in a more readable way

//?? (HTML) (index.html)------------------
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
import ReactDOM from "react-dom";
var header = (  //! VARIABLE dans JSX
    <h1>
        Hello, Isaac
    </h1>
);
ReactDOM.render(
    header,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (V)
//! EMBEDDED EXPRESSIONS
// we can also use VARIABLES to insert JSX into other elements
// we do that with the help of EMBEDDED EXPRESSIONS
// add the "header" inside the "div" element

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <div id="root"></div>
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";
var app = (  //! add {header} inside the <div> element
    <div>
        {header} //!
    </div>
);
ReactDOM.render(
    app,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (VI)
//! EMBEDDED EXPRESSIONS
// EMBEDDED EXPRESSIONS are values wrapped in between curly braces {} inside of existing JSX elements
// below, INSERT "subheader" into app's JSX

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <div id="root"></div>
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

var header = <h1>Dear John</h1>; //!
var subheader = <h2>The movie</h2>; //!

var app = (  
    <div>
        {header}
        {subheader} //!
    </div>
);
ReactDOM.render(
    app,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (VII)
//! EMBEDDED EXPRESSIONS
// what makes EMBEDDED EXPRESSIONS useful is that they also work with common JavaScript values such as STRINGS or BOOLEANS
//! below, INJECT the VARIABLE "name" into app's JSX

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <div id="root"></div>
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

var name = "Martin Luther"; //!

var app = (  
    <div>
        <h1>Hello, {name} //!
        </h1>
    </div>
);
ReactDOM.render(
    app,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (VIII)
//! EMBEDDED EXPRESSIONS
// we can even use EMBEDDED EXPRESSIONS to pass values into a JSX element's ATTRIBUTES
//! try to INJECT "url" as the "src" of <img />
// EMBEDDED EXPRESSIONS are a powerful tool in our React toolkit and allow for nifty interactions with our app's UI

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <div id="root"></div>
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

var url = "https://mimo.app/i/lori.png";

var app = (  
    <div>
        <img src = {url} alt="Lori's Profile" /> //! ATTENTION !!!! inside the curly braces
    </div>
);
ReactDOM.render(
    app,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (IX)
//! EMBEDDED EXPRESSIONS
// create a VARIABLE so that the code displays the word "ON SALE"

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <div id="root"></div>
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

const header = <h4> ON SALE </h4> //!

ReactDOM.render(
    header, //!
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (X)
// use EMBEDDED EXPRESSIONS to make sure that "name" is rendered inside lf <div>

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <div id="root"></div>
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

const name = <p>Peter Parker</p> //!

ReactDOM.render(
    <div>
        <h1>Profile</h1>
        <h3>Name:</h3>
        {name} //!
    </div>, 
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (XI) //! THIS ONE IS A BIT HARD....
// add the VARIABLES to their correct positions as embedded expressions

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <style>img {
        width: 100%; 
        max-width: 300px;
    }
    </style>
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <div id="root"></div>
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

var name = "Lori Smith";
var url = "https://mimo.app/i/lori.png";

var app = (
    <div>
        <h1>Hello, {name}</h1>
        <img src = {url} alt="Lori's Profile" />
    </div>
);

ReactDOM.render(
    app, 
    document.getElementById("root")
);
