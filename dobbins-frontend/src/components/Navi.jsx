import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navi() {

    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    🐎 Dobbins or Bobbins 🐎
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">New Game</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navi
