// 2021.11.02 FROM (MM) 
/*----------------------------------*/
//! REACT
//! USING FUNCTIONAL COMPONENT


/*----------------------------------*/
/*----------------------------------*/ (I)
//! FUNCTIONAL COMPONENT
// FUNCTIONAL COMPONENTs are special FUNCTIONs that return JSX elements
// the function "App" below is a FUNCTIONAL COMPONENT
// thses components work differently than normal JavaScript functions
// functional components return individual JSX elements like a <button> or <p> element
// we can write functional components with :
//! (1) the normal function() syntax or 
//! (2) the ES6 arrow function ()=>{} syntax

//?? (REACT) (script.jsx)------------------
const App = () => {
    const name = "Sarah Smith";
    return (
        <h1>Hello,{name}</h1>
    );
}





/*----------------------------------*/
/*----------------------------------*/ (II)
//! FUNCTIONAL COMPONENT
// now we have created a functional component, we can //! RENDER it with JSX markup
// to render the "App" component, code //!  <App />

//?? (REACT) (script.jsx)------------------
const App = () => {
    const name = "Sarah Smith";
    return (
        <h1>Hello,{name}</h1>
    );
}

var element = <App />;  //!





/*----------------------------------*/
/*----------------------------------*/ (III)
//! FUNCTIONAL COMPONENT
// we can also specify unique component values and pass them as JSX attributes 
// like in this example with  //!   name = "Sarah Smith"

//?? (REACT) (script.jsx)------------------
const App = () => {
    const name = "Sarah Smith";
    return (
        <h1>Hello,{name}</h1>
    );
}

var element = <App name = "Sarah Smith" />;  //!





/*----------------------------------*/
/*----------------------------------*/ (IV)
//! FUNCTIONAL COMPONENT
//! PROPS
// to access values passed via JSX attrkbutes, we need to add the ARGULENT "props" to the functional component
// "PROPS" is a common KEYWORD used across all components
// all components have their own  //!  "props"

//?? (REACT) (script.jsx)------------------
const App = (props) => {  //!
    const name = "Sarah Smith";
    return (
        <h1>Hello,{name}</h1>
    );
}

var element = <App name = "Sarah Smith" />;





/*----------------------------------*/
/*----------------------------------*/ (V)
//! FUNCTIONAL COMPONENT
//! PROPS.NAME
// with "props" we can access any JSX attributes we have passed along by typing "props" 
// this "PROPS" followed by a period (.) and the ATTRIBUTE NAME
// below, we have replaced "Sarah Smith" from the "App" component with  //!   "PROPS.NAME"

//?? (REACT) (script.jsx)------------------
const App = (props) => {  
    const name = props.name;  //!
    return (
        <h1>Hello,{name}</h1>
    );
}

var element = <App name = "Sarah Smith" />;





/*----------------------------------*/
/*----------------------------------*/ (VI)
//! FUNCTIONAL COMPONENT
//! PROPS.NAME
// REACT apps usually name the topmost component as "App", similar to "index.html" for websites
// this App COMPONENT contains the starting point for any JSX rendered on the browser
// code "App"

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

const App = (props) {  //!
    const name = props.name;
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>Welcome to my first React component!</p>
        </div>
    )
}

ReactDOM.render(
    <App name = "Sarah Smith" />,  //!
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (VII)
//! FUNCTIONAL COMPONENT
// how many JSX attributes are passed to "PROPS"?
//! 4 

//?? (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

const App = (props) {  
    return (
        <div>
            <h3>Query: {props.search}</h3>
            <p>Category: {props.category}</p>
            <p>Page: {props.page}</p>
        </div>
    );
}

ReactDOM.render(   //! 4 JSX attributes are passed to "PROPS"
    <App 
    search="lens"
    category="travel"
    skill="new_to_photography"
    page="2"
    />,  
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (VIII)
//! USE ES6 ARROW FUNCTION

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

const App = () => {  //!
    return (
        <div>
            <h1>Did you know?</h1>
            <p>"Supercalifragilisticexpialidocious" is NOT the longest word in the English language!</p>
        </div>
    );
}

ReactDOM.render(
    <App />,  //! 1st ARGUMENT of ReactDOM.render()
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (IX)
// add the JSX attribute "date" with the string value "Jan 3" <Calendar />

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

const Calendar = (props) => {  //!
    return (
        <div>
            <h3>Today's date is!</h3>
            <p><strong>{props.date}</strong></p>
        </div>
    );
}

ReactDOM.render(
    <Calendar date="Jan 3" />,  //! 1st ARGUMENT of ReactDOM.render()
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (X)

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <h3>It's tempting to click the button, but don't click it!</h3>
        <div id="button"></div>  //! 
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

const CustomButton = (props) => {  
    return (
        <button>
            {props.value}  //! ATTENTION
        </button>
    );
}

ReactDOM.render(
    <CustomButton value="Click me!" />,  // 1st ARGUMENT of ReactDOM.render()
    document.getElementById("button")  //!
);
