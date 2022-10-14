import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mx-10">
        <Container fluid>
          <Navbar.Brand href="#home">Note</Navbar.Brand>
          <Button variant="dark">Login</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
