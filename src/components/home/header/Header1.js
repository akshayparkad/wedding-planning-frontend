import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export function Header1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row m-0 p-0 header ">
        <nav className="navbar navbar1 navbar-expand-lg p-0">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              <img src="./image/logo.png" width="180px" height="70px" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-light"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto my-4">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link active hover_line"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle active hover_line"
                    href=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Venue
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/vendorsList"} className="dropdown-item bg_drop">
                        Mumbai
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList"}
                        className="dropdown-item bg_drop"
                      >
                        Pune
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <Link
                      to={"/vendorsList"}
                      className="dropdown-item bg_drop"
                    >
                      Kolkata
                    </Link>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList"}
                        className="dropdown-item bg_drop"
                      >
                        Goa
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active hover_line"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Service
                  </a>
                  <ul className="dropdown-menu">
                    <li className="">
                      <Link
                        to={"/vendorsList"}
                        className="dropdown-item bg_drop"
                      >
                        Photography
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg_drop" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList"}
                        className="dropdown-item bg_drop"
                      >
                        Bridal Wear
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg_drop" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList"}
                        className="dropdown-item bg_drop"
                      >
                        Makeup
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg_drop" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList"}
                        className="dropdown-item bg_drop"
                      >
                        Groom Wear
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg_drop" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList"}
                        className="dropdown-item bg_drop"
                      >
                        Catering
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg_drop" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList"}
                        className="dropdown-item bg_drop"
                      >
                        Planning and Decoration
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <Link to={"/about"} className="nav-link active hover_line">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active hover_line"
                    onClick={handleShow}
                  >
                    Contact us
                  </Link>
                  <div>
                    <Offcanvas show={show} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                          <h1 className="font">Crafty-recipes</h1>
                          <hr></hr>
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <ListGroupItem variant="flush">
                          <ListGroup.Item>
                            <h5 className="font">
                              <b>Email Id:-</b>
                            </h5>
                            <h6 className="font">Crft-recipe@gmail.com</h6>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <h5 className="font">
                              <b>Phone No:-</b>
                            </h5>
                            <h6 className="font">+91-1110111011 </h6>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <h5 className="font">
                              <b>Owned By:-</b>
                            </h5>
                            <h6 className="font">Krunal Sonani</h6>
                            <h6 className="font">Pratiksha Barge</h6>
                            <h6 className="font">Akshay Durgade</h6>
                            <hr className="font"></hr>
                          </ListGroup.Item>
                        </ListGroupItem>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav mx-5 my-4 m">
                <li className="nav-item ml-5">
                  <Link to={"/signup"} className="nav-link active hover_line">
                    Sign-up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/signin"} className="nav-link active hover_line">
                    Sign-in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
