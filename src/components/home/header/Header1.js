import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { getDestroySession, getSessionData } from "../../../Service/User";

export function Header1({ justBool, setJustBool }) {
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
              <img
                src="main-logo.png"
                alt="merryweddings"
                width="210px"
                height="auto"
              />
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
                <li className="nav-item ">
                  <Link to={"/venue-list"} className="nav-link active hover_line">
                     Venue List
                  </Link>
                </li>
               
                <li className="nav-item ">
                  <Link to={"/about"} className="nav-link active hover_line">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"}
                    className="nav-link active hover_line"
                    
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

                            Profile

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
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
