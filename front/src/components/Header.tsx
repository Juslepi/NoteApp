import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

type HeaderProps = {
  setLoginModalOpen: any;
}

const Header: React.FC<HeaderProps> = ({ setLoginModalOpen }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mx-10">
        <Container fluid>
          <Navbar.Brand href="#home">Note</Navbar.Brand>
          <Button variant="dark" onClick={() => setLoginModalOpen(true)}>Login</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
