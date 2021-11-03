// 2021.11.02 FROM (MIMO) 
/*----------------------------------*/
//! REACT
//! USING CLASS COMPONENT
// REACT apps are built with 2 TYPES of COMPONENTS
//! "Functional Components" => are meant to render JSX and don't do anything else
//! "Class Components" => are meant to work for more complicated behavior when needed



/*----------------------------------*/
/*----------------------------------*/ (I)
//! CLASS COMPONENT
//! extends React.Component
// creating Class Components is similar to creating JavaScript CLASSES
// Class Components are CLASSES that store DATA over time
// finish the code below by adding //!  extends React.Component

//?? (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {}  //! (croquis of Class Component)





/*----------------------------------*/
/*----------------------------------*/ (II)
//! CLASS COMPONENT
//! RENDER()
// Class Components need an internal //!   render() FUNCTION
// this render() function returns the JSX elements the component should create
// render() is to print out on webpage
// render() is to output the component's JSX
// below, complete the render() function

//?? (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {   //!
        return (
            <div>
                <h1>Hello</h1>
                <p>Welcome to your first React Class Component!</p>
            </div>
        );
    }
} 

ReactDOM.render(
    <App />,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (III)
//! CLASS COMPONENT
//! render()
// within constructor(props) we need to CALL super(props)
// similar to how we use super() and consturctor() in NORMAL CLASSES

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

class App extends React.Component {
    render() {  
        return (
            <div>
                <h3>My Groceries List:</h3>
                <ul>
                    <li>Carrots</li>
                    <li>Milk</li>
                    <li>Apples</li>
                </ul>
            </div>
        );
    }
} 

ReactDOM.render(
    <App />,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (IV)
//! CLASS COMPONENT
//! CONSTRUCTOR(props) {}
// render() doesn't accept any arguments, so we cannot pass "props" to it like with Functional Components
// instead, we need to pass "props" through a "constructor()" FUNCTION first

//?? (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {}  //!  ATTENTION

    render() {  
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <p>Welcome to your first React Class Component!</p>
            </div>
        );
    }
} 

ReactDOM.render(
    <App />,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (V)
//! CLASS COMPONENT
//! constructor(props)
//! super(props)
// within constructor(props) we need to CALL super(props)
// similar to how we use super() and consturctor() in NORMAL CLASSES

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

class App extends React.Component {
    constructor(props) {  //! ATTENTION, this allows "App" to use "props"
        super(props);  //! ATTENTION
    } 

    render() {  
        return (
            <div>
                <h1>Hello</h1>
                <p>Welcome to your first React Class Component!</p>
            </div>
        );
    }
} 

ReactDOM.render(
    <App name="Jake Blake" />,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (VI)
//! CLASS COMPONENT
// add what is necessary to allow "App" to use "props"

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

class App extends React.Component {
    constructor(props) {  //! 
        super(props);  //!
    } 

    render() {  
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>By {this.props.author}</p>
                <p>
                    ...
                    They had walked in single file down the path, and even in the open one stayed behind the other. 
                    Both were dressed in denim trousers and in denim coats with brass buttons. 
                    Both wore black, shapeless hats and both carried tight blanket rolls slung over their shoulders. 
                    The first man was small and quick, dark of face, with restless eyes and sharp, strong features. 
                    Every part of him was defined: small, strong hands, slender arms, a thin and bony nose. 
                    Behind him walked his opposite, a huge man, shapeless of face, with large, pale eyes, and wide, sloping shoulders; 
                    and he walked heavily, dragging his feet a little, they wa a bear drags his paws. 
                    His arms did not swing at this sides, but hung loosely...
                </p>
            </div>
        );
    }
} 

ReactDOM.render(
    <App title="Of Mice and Men" author="John Steinbeck" />,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (VII)
//! CLASS COMPONENT
//! THIS.PROPS. =>  this.props.name
// with super(props) added we can now use "props" by typing "this.props" inside the RENDER()
// here, we can type "this.props.name" to refer to the string value "Sara Smith"

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

class App extends React.Component {
    constructor(props) {
        super(props);  //! 
    } 

    render() {  
        const welcome = this.props.name;  //!  ATTENTION
        return (
            <div>
                <h1>Hello</h1>
                <p>Welcome to your first React Class Component!</p>
            </div>
        );
    }
} 

ReactDOM.render(
    <App name="Sarah Smith" />,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (VIII)
//! CLASS COMPONENT
//! THIS.PROPS. =>  this.props.name
// with 

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

class App extends React.Component {
    constructor(props) {
        super(props);  
    } 

    render() {  
        return (
            <div>
                <h2>Where can I learn how to code?</h2>
                <p>Looking for a way to learn how to code easily?
                <br />
                Have no fear: MIMO is here to help!
                </p>
                <a href={this.props.url}>MIMO Website</a>  //! this will be the LINK to click on
            </div>
        );
    }
} 

ReactDOM.render(
    <App url="https://getmimo.com" />,
    document.getElementById("root")
);
