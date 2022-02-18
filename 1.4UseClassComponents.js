// 2021.11.02 FROM (M) 
/*----------------------------------*/ REACT
" USING CLASS COMPONENT "
=> REACT apps are built with 2 TYPES of COMPONENTS: "FUNCTIONAL Components" & "CLASS Components"
                                                     ^^^^^^^^^^^^^^^^^^^^^     ^^^^^^^^^^^^^^^^

/*----------------------------------*/ (I) FUNCTIONAL COMPONENT
/*----------------------------------*/ (1.1) "Functional Components":
-> are meant to render JSX and don't do anything else
-> are special functions that return individual JSX elements, like <button> or <p>
-> we write FC with the normal function() syntax, or the ES6 arrow function ()=>{}
-> "props" is a common keyword used across ALL components
-> ALL components have their own "props"
// (JSX)
const App = (props) => {
     const name = "Sarah Smith";   // => const name = props.name
     return (
      <h1>Hello, {name}</h1>
     );
}
var element = <App name="Sarah Smith" />
    
// (HTML)
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
   
/*----------------------------------*/ (1.2) "Functional Components":
// React apps usually name the topmost component as App, similar to "index.html" for websites.
// This App component contains the starting point for any JSX rendered on the browser. Code App.
// (JSX)
const App = (props) => {
     const name = props.name;
     return (
      <div>
       <h1>Hello, {name}</h1>
       <p>Welcome to my first React component!</p>
      </div>
     );
}

ReactDOM.render(
  <App name="Sarah Smith" />,
  document.getElementById('root')
);

/*----------------------------------*/ (1.3) "Functional Components":
// Given the code below, how many JSX attributes are passed to props? => 4
import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
 return (
   <div>
    <h3>Query: {props.search}</h3>
    <p>Category: {props.category}</p>
    <p>Page: {props.page}</p>
  </div>
 );
}

ReactDOM.render(
 <App 
  search="lens" 
  category="travel" 
  skill="new_to_photography" 
  page="2" 
 />,
 document.getElementById("root")
);

/*----------------------------------*/ (1.4) "Functional Components":
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
 return (
  <div>
   <h1>Did You Know?</h1>
   <p>"Supercalifragilisticexpialidocious" is NOT the longest word in the English language!</p>
  </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);
   
/*----------------------------------*/ (1.5) "Functional Components":
// Add the JSX attribute date with the string value "Jan 3" to <Calendar />.
import React from "react";
import ReactDOM from "react-dom";

const Calendar = (props) => {
 return (
  <div>
   <h3>Today's date is:</h3>
   <p><strong>{props.date}</strong></p>
  </div>
 );
}

ReactDOM.render(
 <Calendar date="Jan3" />,
 document.getElementById("root")
);

/*----------------------------------*/ (1.6) "Functional Components":
// Access the correct JSX attribute through props.
import React from "react";
import ReactDOM from "react-dom";

const CustomButton = (props) => {
 return (
  <button>
   {props.value} //
  </button>
 );
}

ReactDOM.render(
 <CustomButton value="Click me!" />,
 document.getElementById("button")
);

/*----------------------------------*/ (2) "Class Components":
-> are meant to work for "more complicated behavior" when needed
-> Class Components are built with "classes" 
-> "classes" are templates for objects that hold onto info that can change over time



     
/*----------------------------------*/
/*----------------------------------*/ (II) CLASS COMPONENT (ok)
extends React.Component {}
// creating Class Components is similar to creating JavaScript CLASSES
// Class Components are CLASSES that store DATA over time
// finish the code below by adding   "extends React.Component"

// (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {}  // (CROQUIS of "Class Component App")



// (REACT) (script.jsx)------------------(note of studyplan: 2022.02.18)
import React from "react";

class Counter extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <div>
       <h2>Image Container</h2>
       <img src={this.props.src} alt={this.props.alt} />
       <p>{this.props.description}</p>
   </div>
  );
 }
}




/*----------------------------------*/
/*----------------------------------*/ (II) CLASS COMPONENT (ok)
render(){} => is a METHOD
// class components need an internal   render() FUNCTION
// this render() function returns the JSX elements the component should create
// class components need render() to print out on webpage
// render() is to output the component's JSX
// below, complete the render() FUNCTION

// (HTML) (index.html)-------------------
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

// (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {   //
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
/*----------------------------------*/ (III) CLASS COMPONENT ??
render()
// within constructor(props) we need to CALL super(props)
// similar to how we use super() and consturctor() in NORMAL CLASSES

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
/*----------------------------------*/ (IV) CLASS COMPONENT (ok)
constructor(props) {}
// render() doesn't accept any arguments, so we cannot pass "props" to it like with Functional Components
// instead, we first need to pass "props" through a "constructor()" FUNCTION => constructor(props) {}
// a class component use "props" with "constructor(props)" & "super(props)"

// (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {}   // ATTENTION

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
/*----------------------------------*/ (V) CLASS COMPONENT ??
constructor(props)
//! super(props)
// within constructor(props) we need to CALL super(props)
// similar to how we use super() and consturctor() in NORMAL CLASSES

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

class App extends React.Component {
    constructor(props) {  // ATTENTION, this allows "App" to use "props"
        super(props);  // ATTENTION
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
/*----------------------------------*/ (VI) CLASS COMPONENT (ok)

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
// add the necessary code to allow "App" to use "props"
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {  //
        super(props);  //
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
/*----------------------------------*/ (VII) CLASS COMPONENT (ok)
THIS.PROPS. =>  this.props.name
// with super(props) added we can now use "props" by typing "this.props" inside the RENDER()
// here, we can type "this.props.name" to refer to the string value "Sara Smith"

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

class App extends React.Component {
    constructor(props) {
        super(props);  //! 
    } 

    render() {  
        const welcome = this.props.name;  // ATTENTION
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
/*----------------------------------*/ (VIII) CLASS COMPONENT (ok)
THIS.PROPS. =>  this.props.name

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
// Complete the <a> tag inside render() by coding  "this.props.url"
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
                  <p>
                        Looking for a way to learn how to code easily?
                        <br />
                        Have no fear: MIMO is here to help!
                  </p>
                <a href={this.props.url}>MIMO Website</a>  //=> this will be the LINK to click on
            </div>
        );
    }
} 

ReactDOM.render(
    <App url="https://getmimo.com" />,
    document.getElementById("root")
);
