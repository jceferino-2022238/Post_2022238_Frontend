import { Container } from "react-bootstrap";
import Navbar  from "react-bootstrap/Navbar";
export const NavbarC = () =>{
    return(
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Blog del Programador, 2022238</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Perfil de Github: <a>GitHub</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}