
import React from "react";
import "./Footer.css";
// import './Cookingfinal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {Link} from 'react-router-dom';

export function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>THICC MEMES INC</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;


// import './Cookingfinal.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// import {Link} from 'react-router-dom';

// export function Footer() { 
//     return (
//      <>
//       <footer className="footer">
//                 <div className="column-1">
//             <Link to={'/'}>
//             <img src="/image/logo.png" alt="Logo" className="logo img-fluid"/></Link>
            
//         </div >
//         <div className="column-m"> 
//             <p id="ready-to-cook">Ready to cook?</p>
//             <p id="newsletter">Sign up for trying our tasty dishes!</p>
//             <input type="text" name="email" className="input-box" placeholder="Enter your email"/>
//                     <button className="input-button my-2">
//                 <Link to={'/signup'} className="hover_line ">Sign-Up</Link>
//              </button>
//             <p className="friends">Let's be friends!</p>
//         </div>
//         <div className="column-2 third_foot">
//                     <ul className="navbaritems">
//                 <li><Link to="/about" className="hover_line"><>About Us</></Link></li>
//                 <li>Contact:-Crafty-recipes@gmail.com</li>
//             </ul>
//         </div>
//     </footer>
//         </>
//     );
// }