
import React from "react";
import "./Footer.css";
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
            <div>
            <img
            className="Logo"
            src="https://i.pinimg.com/736x/c6/53/68/c653681df99073ace9deba0d8340d1b6.jpg"
            alt="First slide"
          />

            </div>
            <h1 className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4><i>Quik Links</i></h4>
            <ui className="list-unstyled">
              <li><Link to={"/"}aria-current="page"className="text active hover_line" style={{textDecoration:'none'} }>Home</Link></li>
              <li><Link to={"/vendorsList"}className="text active hover_line" style={{textDecoration:'none'} }>Venues</Link></li>
              <li><Link to={"/vendorsList"}className="text active hover_line" style={{textDecoration:'none'} }>Vender</Link></li>
              <li > <Link to={"/about"}className="text active hover_line" style={{textDecoration:'none'} }> About us </Link></li>
            </ui>
          </div>
          <div className="col">
            <h4><i>Favourites</i></h4>
            <ui className="list-unstyled">
              <li><Link to={"/vendorsList"}className="text active hover_line" style={{textDecoration:'none'} }>Photographer</Link></li>
              <li><Link to={"/vendorsList"}className="text active hover_line" style={{textDecoration:'none'} }>Bridal Wear</Link></li>
              <li><Link to={"/vendorsList"}className="text active hover_line" style={{textDecoration:'none'} }>Make Up</Link></li>
              <li><Link to={"/vendorsList"}className="text active hover_line" style={{textDecoration:'none'} }>Groom Wear</Link></li>
              <li><Link to={"/vendorsList"}className="text active hover_line" style={{textDecoration:'none'} }>Catering</Link></li>
              <li><Link to={"/vendorsList"}className="text active hover_line" style={{textDecoration:'none'} }>Planning And Decoration</Link></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col"> 
          
            <h5>"Love Is When You Care More About The Happiness Of Other Person Than Your Own"</h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} MerryWeddings 
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