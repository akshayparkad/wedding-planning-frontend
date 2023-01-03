import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar collapseOnSelect expand="lg" className="_079">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <NavDropdown
              title="Venues"
              style={{ color: "white" }}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item chref="#action/3.1">Mumbai</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pune</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kolkata</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={"Vendors"} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Photographer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bridal Wear
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Makeup</NavDropdown.Item>
              <NavDropdown.Item shref="#action/3.3">
                Groom Wear
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Catering</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Planning and Decoration
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              style={{ color: "white" }}
              href="#features"
              onClick={handleShow}
            >
              Contact us
            </Nav.Link>
            <div>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <h1 className="font">MerryWedding</h1>
                    <hr></hr>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h5 className="font">
                        <b>Email Id:-</b>
                      </h5>
                      <h6 className="font">meet@merrywedding.com</h6>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5 className="font">
                        <b>Phone No:-</b>
                      </h5>
                      <h6 className="font"> 0124-8812385</h6>
                      <h6 className="font">+91-7218472847</h6>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5 className="font">
                        <b>Address:-</b>
                      </h5>
                      <h6> Main Office, Raintree Marg, Sector 7, Cbd Belapur,
                         Navi Mumbai - 400614 </h6>
                      
                      
                      <hr className="font"></hr>
                    </ListGroup.Item>
                  </ListGroup>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            <Nav.Link style={{ color: "white" }} href="#features">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link style={{ color: "white" }} href="/signin">
              Sign In
            </Nav.Link>
            <Nav.Link eventKey={2} style={{ color: "white" }} href="/signup">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
