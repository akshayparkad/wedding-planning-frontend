import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { getDestroySession, getSessionData } from "../../../Service/User";

export function Header1({ justBool ,setJustBool}) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({ type: null });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  console.log(justBool);

  var getSession = async () => {
    const session = await getSessionData();
    setUser(session.data);
  };
  var getSession = async () => {
    const session = await getSessionData();
    setUser(session.data);
  };
  const destroysession = async () => {
    const response = await getDestroySession();
    setJustBool(!justBool);
    navigate("/signin");
  };

  useEffect(() => {
    getSession();
  }, [justBool]);

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
                      <Link
                        to={"/vendorsList/mumbai"}
                        className="dropdown-item bg_drop"
                      >
                        Mumbai
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList/pune"}
                        className="dropdown-item bg_drop"
                      >
                        Pune
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <Link
                      to={"/vendorsList/kolkata"}
                      className="dropdown-item bg_drop"
                    >
                      Kolkata
                    </Link>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList/goa"}
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
                        to={"/vendorsList/Photoshoot"}
                        className="dropdown-item bg_drop"
                      >
                        Photoshoot
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg_drop" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList/Bridalwear"}
                        className="dropdown-item bg_drop"
                      >
                        Bridal wear
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider bg_drop" />
                    </li>
                    <li>
                      <Link
                        to={"/vendorsList/Makeup"}
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
                        to={"/vendorsList/Groomwear"}
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
                        to={"/vendorsList/Catering"}
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
                        to={"/vendorsList/Palning & decoration"}
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
                          <h1 className="font">MerryWedding</h1>
                          <hr></hr>
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <ListGroupItem variant="flush">
                          <ListGroup.Item>
                            <h5 className="font">
                              <b>Email Id:-</b>
                            </h5>
                            <h6 className="font">meet@merrywedding.com</h6>
                          </ListGroup.Item>
                          <br></br>
                          <ListGroup.Item>
                            <h5 className="font">
                              <b>Phone No:-</b>
                            </h5>
                            <h6 className="font"> 0124-8812385</h6>
                            <h6 className="font">+91-7218472847</h6>
                          </ListGroup.Item>
                          <br></br>
                          <ListGroup.Item>
                            <h5 className="font">
                              <b>Address:-</b>
                            </h5>
                            <h6>
                              {" "}
                              Main Office, Raintree Marg, Sector 7, Cbd Belapur,
                              Navi Mumbai - 400614{" "}
                            </h6>
                            <hr className="font"></hr>
                          </ListGroup.Item>
                        </ListGroupItem>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </div>
                </li>
              </ul>
              
                <div>
                  {(() => {
                    if (user.type == "admin") {
                      return (
                        <ul className="navbar-nav mx-5 my-4 m">
                          <li className="nav-item ml-5">
                            <Link
                              to={"/admin"}
                              className="nav-link active hover_line"
                            >
                              Admin
                            </Link>
                          </li>
                          <li className="nav-item ml-5">
                            <Link
                              to={"/signin"}
                              className="nav-link active hover_line"
                              onClick={destroysession}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      );
                    } else if (user.type == "vendor") {
                      return (
                        <ul className="navbar-nav mx-5 my-4 m">
                          <li className="nav-item ml-5">
                            <Link
                              to={"/vendor"}
                              className="nav-link active hover_line"
                            >
                              Vendor
                            </Link>
                          </li>
                          <li className="nav-item ml-5">
                            <Link
                              to={"/signin"}
                              className="nav-link active hover_line"
                              onClick={destroysession}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      );
                    } else if (user.type == "user") {
                      return (
                        <ul className="navbar-nav mx-5 my-4 m">
                          <li className="nav-item ml-5">
                            <Link
                              to={"/userprofile"}
                              className="nav-link active hover_line"
                            >
                              profile
                            </Link>
                          </li>
                          <li className="nav-item ml-5">
                            <Link
                              to={"/signin"}
                              className="nav-link active hover_line"
                              onClick={destroysession}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      );
                    } else { 
                      return (
                        <ul className="navbar-nav mx-5 my-4 m">
                          <li className="nav-item ml-5">
                            <Link
                              to={"/signup"}
                              className="nav-link active hover_line"
                            >
                              Signup
                            </Link>
                          </li>
                          <li className="nav-item ml-5">
                            <Link
                              to={"/signin"}
                              className="nav-link active hover_line"
                            >
                              Signin
                            </Link>
                          </li>
                        </ul>

                   ) }
                  })()}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
