import { Container, Navbar } from 'react-bootstrap';

export const NavbarC = () => {
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container fluid>
        <Navbar.Brand>Blog del Programador, 2022238</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Perfil de Github: <a href="https://github.com/jceferino-2022238">GitHub</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};