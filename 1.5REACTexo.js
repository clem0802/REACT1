// 2021.11.03 FROM (MIMO) 
/*----------------------------------*/
/*----------------------------------*/ (I) //! EXO
// where will the React content be rendered in "index.html"?
//! below <p>, above <footer>   // ANSWER TO CHOOSE

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <script type="module" src="./index.js"></script>
    <link rel="stylesheet" href="./index.css" />
    </head>

    <body> 
        <h1>Inline Shop</h1>
        <p>Look here for the best deals!</p>
        <div id="list"></div>

        <footer>Made by m1m0</footer>
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <ul>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
    </ul>, 
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (II) //! EXO
// according to the code below, what data is passed to the "src" ATTRIBUTE of "myImage"
// "http://mimo.app/i/sandals.png"

//?? (REACT) (script.jsx)------------------
const imageSrc = "http://mimo.app/i/sandals.png";
 
const imageAlt = "Socks with Sandals";

const myImage = (
    <img
    id="mainImage"
    src={imageSrc}
    alt={imageAlt}
    />
);





/*----------------------------------*/
/*----------------------------------*/ (III) //! EXO
// const header

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <h2>Did you know?</h2>
        <p>The first person to get convicted for speeding was Alter Arnond of Kent, ebnglant in Jan. 28, 1896.</p>
        <p>He was caught at a speed of 8 miles-per-hour, four times thatn the contemporary speed limit at the time. 
           He was fined one shilling plus costs.</p>
        <div id="footer"></div>
    </body>
</html>

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <h6>
        Remember to drive responsibly!
    </h6>, 
    document.getElementById("footer")
);





/*----------------------------------*/
/*----------------------------------*/ (IV) //! EXO
// EMBEDDED EXPRESSIONS 
// use an Embedded Expression to make sure that "name" and "dob" are rendered inside of "<div>

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

const name = (
    <strong>Peter Parker</strong>
);
const dob = (
    <i>Aug 31, 2001</i>
)

ReactDOM.render(
    <div>
        <h1>Profile</h1>
        <ul>
            <li>Name: {name}</li>
            <li>Date born: {dob}</li>
        </ul>
    </div>, 
    document.getElementById("footer")
);





/*----------------------------------*/
/*----------------------------------*/ (V) //! EXO
// what is wrong witht eh code sample below? 

//?? (REACT) (script.jsx)------------------
import React from "react";

const App = (props) => {
    const years = props.years; //!
    const language = props.language; //!
    const employment= "not employed";
    if (props().hasJob) {
        employment = "employed";
    }

    return (
        <p>
            I am  {year} years old, and my first language is {language}. I am currently {employment}.
        </p>
    );
}

const mainApp = (
    <App
    years={25}
    language="Japanese"
    hasJob={true}
    />
);





/*----------------------------------*/
/*----------------------------------*/ (VI) //! EXO
// const header

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <div id="footer"></div>
    </body>
</html>


//?? (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

const Calendar = (props) => {
    return (
        <div>
            <h3>
                Today's date is: {props.date}
            </h3>
            <ul>
                <li>
                    <i>Weather condition:</i>{props.weather}
                </li>
                <li>
                    <i>Current Temperature:</i>{props.currentTemp} Celcius
                </li>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <Calendar
    date="Jan 3"
    weather="Sunny"
    currentTemp="27"
    />,
    document.getElementById("root")
);





/*----------------------------------*/
/*----------------------------------*/ (VII) //! EXO
// be careful =>  React.component

//?? (REACT) (script.jsx)------------------
import React from "react";

class App extends React.Component {  //!
    render() {   
        return (
            <img
            src="https://mimo.app/i/cafe.png"
            alt="Layout of Coffee Shop"
            />
        );
    }
} 





/*----------------------------------*/
/*----------------------------------*/ (VIII) //! EXO
// CLASS COMPONENT => //!  class App extends React.Component {}
// the component "Fig" will display //!  NOTHING
// because "Fig" isn't set up to use "props" and its attributes are empty
// the DIFFERENCE about "props" between Class Components and Functional Components is:
// Class Components use //!  THIS.PROPS

//?? (REACT) (index.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

class Fig extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.url} />  //!
                <p>{this.props.caption}</p>  //!
            </div>
        );
    }
}

ReactDOM.render(
    <Fig
        url=""
        caption=""
    />, 
    document.getElementById("footer")
);





/*----------------------------------*/
/*----------------------------------*/ (IX) //! EXO
// pass "userData" into "App by referencing the values inside "this.props.userData" with the appropriate VARIABLES

//?? (HTML) (index.html)------------------
<!doctype html>
<html>
    <head>
    <link rel="stylesheet" href="./index.css" />
    <style>
        img { width: 100%; max-width: 300px; }
    </style>
    <script type="module" src="./index.js"></script>
    </head>

    <body> 
        <div id="root"></div>
    </body>
</html>


//?? (REACT) (script.jsx)------------------
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const avatar = this.props.userData.avatar;
        const name = this.props.userData.name;
        const joined = this.props.userData.joined;

        return (
            <div>
            <h2>Your Profile</h2>
            <img src={avatar} alt={name} />
            <p>Name: {name}</p>
            <h6>Joined: {joined}</h6>
            </div>
        );
    }
}

ReactDOM.render(
    <App
    userData={
        {
            name: "Christina Lee",
            joined: "Aug Sep 05, 2001",
            avatar: "https://mimo.app/i/lee.png"
        }
    }
    />,
    document.getElementById("root")
);
