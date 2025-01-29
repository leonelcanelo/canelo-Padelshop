
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetReactIcons from './CartWidgetReacticons';

function NavBarPadelBootstrap() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
           <img className='logo-nav' src='../img/Pelota de paddle.jpeg' alt="PadelShop"/> <span className='padel'>Padelshops</span>
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paletas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">zapatillas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pelotas</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <CartWidgetReactIcons/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPadelBootstrap