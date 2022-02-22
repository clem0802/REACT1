/*-----------------------------*/
/*-----------------------------*/ (I) REACT-purple
=> JSX uses < and > for its elemetns
// Modify the content variable so that <h1>Hello!</h1> is now wrapped within a <div> element. 
// Inside the new <div> element and under the <h1> header, add <button>Say hi</button>.
// (index.html)
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

// (index.jsx)
import React from 'react';
import ReactDOM from 'react-dom';

const content = (
 <div>
    <h1>Hello!</h1>,
    <button>Say hi</button>
 </div>
);

ReactDOM.render(
 content,
 document.getElementById('root')
);
export { content };

// (index.css)
#root {
 display: flex;
 width: 100%;
 justify-content: center;
 align-items: stretch;
 flex-direction: column;
 padding-top: 200px;
 text-align: center;
}

button {
 width: 100%;
 height: 30px;
 border: 1px solid black;
 border-radius: 4px;
 background-color: indigo;
 color: white;
 font-size: 20px;
}



/*-----------------------------*/
/*-----------------------------*/ (II) REACT-purple
=> EMBEDDED EXPRESSIONS are used to "INSERT" JSX elements into other elements





