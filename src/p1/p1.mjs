// ReactDOM.render(<h1>Hello,React</h1>, document.getElementById('root'))

// ReactDOM.render(
//                  <ul>
//                     <li>Fish</li>
//                     <li>Chicken</li>
//                  </ul>, 
//                  document.querySelector("#root")
//                 )


// function Navbar(){
//     return(
//             <nav
//       id="mainNavbar"
//       className="navbar navbar-dark navbar-expand-md py-0 sticky-top"
//     >
//       <a href="#" className="navbar-brand">CANDY</a>
//       <button
//         className="navbar-toggler"
//         data-toggle="collapse"
//         data-target="#navLinks"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navLinks">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a href="" className="nav-link">HOME</a>
//           </li>
//           <li className="nav-item">
//             <a href="" className="nav-link">ABOUT</a>
//           </li>
//           <li className="nav-item">
//             <a href="" className="nav-link">TICKETS</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//     )
// }

// function MainContent() {
//     return(
//         <h1>Hello, Im using composability in React!</h1>
//     )
// }

// ReactDOM.render(
//                 <div>             //names of functions should start with a capital letter 
//                     <Navbar />
//                     <MainContent />
                    

//                 </div>,
//                 document.getElementById('root')
// )


// ReactDOM.render(//there can be only one block inside 
//                 <h1 className="header">Hello Im doing some projects using React</h1>,
//                 document.querySelector('#root')
// )

// const h1=document.createElement('h1')
// h1.textContent="Hey there this is Vaib."
// h1.className='header'
// document.getElementById('root').append(h1)

//JSX:
// const navbar=(
//     <nav>
//         <h1>Starbucks!!</h1>
//         <ul>
//             <li>Cappucino</li>
//             <li>Frappe</li>
//             <li>Plain white coffee</li>
//         </ul>
//         <p>
//             What would you like to have sir??
//         </p>
//     </nav>
// )

// ReactDOM.render(
//                  navbar,
//                  document.getElementById("root")
// )

//JSX returns plain js objects
// const content=(
//     <nav>
//         <h1>Starbucks!!</h1>
//         <ul>
//             <li>Cappucino</li>
//             <li>Frappe</li>
//             <li>Plain white coffee</li>
//         </ul>
//         <p>
//             What would you like to have sir??
//         </p>
//     </nav>
// )
// // document.getElementById("root").append(JSON.stringify(content))

//we r using a variable here, 
//in the same way we can also use a fn putting all of the data into its return line, and calling the fn name afterwards

// ReactDOM.render(
//                  content,
//                  document.getElementById("root")
// )


//JSX all content should be inside a single parent block
//This form is called a custom component
// function Data(){
//     return(
//     <div>
//         <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" width="60px"></img>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>has well over 100K stars in GitHub</li>
//             <li>Is maintained bt Facebook</li>
//             <li>Powers thousands of enetrprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )
//     }

// ReactDOM.render(
//                  <Data />,
//                  document.getElementById("root")
// )

//React component also called UI
// function Data(){
//     return(
//     <div>
//         <header>
//             <nav>
//                 <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" width="60px"></img>
//             </nav>
//         </header>
//         <h1>Learning React!!</h1>
//         <ol>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>has well over 100K stars in GitHub</li>
//             <li>Is maintained bt Facebook</li>
//             <li>Powers thousands of enetrprise apps, including mobile apps</li>
//         </ol>
//         <footer>
//             <small>@ 2022 Vaib development. All rights reserved.</small>
//         </footer>
//     </div>
// )
//     }

// ReactDOM.render(
//                  <Data />,
//                  document.getElementById("root")
// )

import React from 'react'
// import ReactDOM from 'react-dom/client'
import Header from "./Header.mjs"
import MainContent from "./MainContent.mjs"
import Footer from './Footer.mjs'
import './p1.css'

export default function Data(){
    return(
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
)
}

