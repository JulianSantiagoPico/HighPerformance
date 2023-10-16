import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsInstagram, BsFacebook } from "react-icons/bs";


const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" bg='white'>
        <Container>
          <Navbar.Brand href="#home"><img src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1697254856/HighPerformance/s8oasljxb7zori2vxkqc.png" alt="Logo" style={{width:"50%", height:"10%"}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{fontSize:"1.15rem", display:"flex", gap:"50px"}}>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> HOME </Link>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> ABOUT US </Link>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> SERVICES </Link>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> INSURANCE </Link>
              <Link to="/" style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}> CONTACT </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand style={{paddingLeft:"2.5rem", display:"flex", gap:"20px"}}>
            <a href="https://www.instagram.com" target='_blank' style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}><BsInstagram /></a>
            <a href="https://www.facebook.com" target='_blank' style={{textDecoration:"none", color:"black", paddingTop:"0.5rem"}}><BsFacebook /></a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar