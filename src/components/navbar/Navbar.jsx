import { Container, Navbar } from 'react-bootstrap';
import './navbar.css'
export const NavbarC = () => {
  return (
    <div className='navbar-container'>
      <Navbar className="bg-body-tertiary" expand="lg">
      <Container fluid>
        <Navbar.Brand className='brand'>Blog del Programador, 2022238</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Perfil de Github: <a href="https://github.com/jceferino-2022238">GitHub</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};