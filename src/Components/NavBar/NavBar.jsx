import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" bg='white'>
        <Container>
          <Navbar.Brand href="#home"><img src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1697254856/HighPerformance/s8oasljxb7zori2vxkqc.png" alt="Logo" style={{width:"20vw"}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{marginLeft:"7.5rem", fontSize:"1.15rem", display:"flex", gap:"20px"}}>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> HOME </Link>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> ABOUT US </Link>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> SERVICES </Link>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> INSURANCE </Link>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> CONTACT </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{backgroundColor:"red"}}>

      </div>
    </div>
  )
}

export default NavBar