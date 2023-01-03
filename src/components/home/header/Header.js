import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="_079">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{ color: 'white' }} >Home</Nav.Link>
            <NavDropdown title="Venues" style={{ color: 'white' }} id="collasible-nav-dropdown">
              <NavDropdown.Item chref="#action/3.1">Mumbai</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pune
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kolkata</NavDropdown.Item>


            </NavDropdown>
            <NavDropdown title={"Vendors"} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Photographer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bridal Wear
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Makeup</NavDropdown.Item>
              <NavDropdown.Item shref="#action/3.3">Groom Wear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Catering</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Planning and Decoration</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link style={{ color: 'white' }} href="#features">About</Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#features">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link style={{ color: 'white' }} href="#deets">Sign In</Nav.Link>
            <Nav.Link eventKey={2} style={{ color: 'white' }} href="#memes">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;