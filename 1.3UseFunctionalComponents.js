// 2021.11.02 FROM (M) 
/*----------------------------------*/
//! REACT
//! USING FUNCTIONAL COMPONENT


/*----------------------------------*/
/*----------------------------------*/ (I) FUNCTIONAL COMPONENT
// FUNCTIONAL COMPONENTs are special FUNCTIONs that return JSX elements
// the function "App" below is a FUNCTIONAL COMPONENT
// these components work differently than normal JavaScript functions
// functional components return individual JSX elements like a <button> or <p> element
// they specifically return JSX elemetns
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
/*----------------------------------*/ (II) FUNCTIONAL COMPONENT
// now we have created a functional component, we can //! RENDER it with JSX markup
// to render the "App" component, code //!  <App />
// React applications normally name their topmost component as "App"
// it's usually the starting point of a React app
// with which method can we pass data into a component rendered with JSX, such as <App />   ?
//! => we use JSX ATTRIBUTES

//?? (REACT) (script.jsx)------------------
const App = () => {
    const name = "Sarah Smith";
    return (
        <h1>Hello,{name}</h1>
    );
}

var element = <App />;  //!





/*----------------------------------*/
/*----------------------------------*/ (III) FUNCTIONAL COMPONENT
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
/*----------------------------------*/ (IV) FUNCTIONAL COMPONENT (PROPS)
// to access values passed via JSX attributes, we need to add the ARGUMENT "props" to the functional component
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
/*----------------------------------*/ (V) FUNCTIONAL COMPONENT (PROPS.NAME)
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
/*----------------------------------*/ (VI) FUNCTIONAL COMPONENT (PROPS.NAME)
// REACT apps usually name the topmost component as "App", similar to "index.html" for websites
// this App COMPONENT contains the starting point for any JSX rendered on the browser
// code "App"

// (HTML) (index.html)------------------
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

// (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {  //!
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
/*----------------------------------*/ (VII) PROPS (compared with VIII, below)
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
/*----------------------------------*/ (VIII) (with LIVIA) PROP (compared with VII, above)
// how may "prop" values is "App" using => 3
from LIVIA:
// first we set the "TEMPLATE", then we send in the "DATA"
// "const App" is a template, we create 3 spots for data coming in
// "const App only has 3 attributes listed/used: {{props.search}}, {{props.category}}, {{props.page}}
// the data is coming in via the <App atttributes, we have 4 attributes
// but we use only 3 in the template
// so here, 4 data attributes passed, and 3 of thems used

//?? (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

const App = (props) {  
    return (
        <div>
            <h3>Query: {props.search}</h3>  //=> uses the search attribute sent in via the render App
            <p>Category: {props.category}</p>  //=> uses the category attribute sent in via the render
            <p>Page: {props.page}</p>  //=> uses the page attribute sent in via the render App
        </div>
    );
}

ReactDOM.render(   //! App is using "3" PROP VALUES
    <App 
    search="lens"
    category="travel"
    skill="new_to_photography"
    page="2"
    />,  
    document.getElementById("root")
);




/*----------------------------------*/
/*----------------------------------*/ (IX)
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
/*----------------------------------*/ (X)
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
/*----------------------------------*/ (XI)

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

// (OR, the REACT part could also be as following)
//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

const CustomButton = (props) => {  
    return (
        <button>
            {props.text}  //! ATTENTION
        </button>
    );
}

ReactDOM.render(
    <CustomButton text="Click me!" />,  //! ATTENTION
    document.getElementById("button")  
);
