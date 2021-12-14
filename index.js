

// function myfunc(color){
//   var element = document.getElementById("nav");
//   var letters = documents.getElementByClass("nav-item");
//   element.style.background = color;
//   element.style.color = "white"
// }

// function myfunc() {
//   var el = document.getElementById("style1");
//   if (el.href.match("index.css")) {
//       el.href = "index-dark.css";    
//   }
//   else if (el.href.match("index-dark.css")) {
//       el.href = "index.css";  
//   }
// }

function myfunc() {
  // Obtains an array of all <link>
  // elements.
  // Select your element using indexing.
  var theme = document.getElementById("style1");
  if (theme.getAttribute('href') == 'index.css') {
      theme.setAttribute('href', 'index-dark.css');
  } else {
      theme.setAttribute('href', 'index.css');
  }
}
 
// elements.addEventListener('click')
// import React from 'react';

// function Nav(props) {
//   return (
//     <nav className={props.mode ? "nav dark-nav" : "nav"}>

//       <ul className="logo-nav">
//         <div className="btn-mode" title="light or dark mode">
//           <div className={props.mode ? "btn-icons btn-icons-dark" : "btn-icons"} onClick={props.handleMode}>
//             <i className="fas fa-moon"></i>
//             <div className={props.mode ? "btn-circle-new btn-circle" : "btn-circle"}></div>
//             <i className="fas fa-sun"></i>
//           </div>
//         </div>
//       </ul>
//     </nav>
//   )
// }

// export default Nav;



