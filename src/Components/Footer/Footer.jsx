import Styles from "./Footer.module.css";
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

const Footer = () => {
  return (
    <div>
      
      <footer >
        <div className={Styles.footerContent}>

          <div style={{backgroundColor:"#af1616"}}>
            <div className={Styles.footerInfo}>
              <p>Foolish Developer — source code.</p>
              <p>|</p>
              <p>Foolish Developer — source code.</p>
              <p>|</p>
              <p>Foolish Developer — source code.</p>
            </div>
          </div>

          <h3 style={{color:"white"}}>Sample</h3>

            <div style={{color:"white"}}>
              <p>Foolish Developer — source code.</p>
            </div>

          <div className={Styles.footerMenu} style={{display:"flex", gap:"15px", paddingBottom:"0.75rem", paddingTop:"0.5rem"}}>
              <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> HOME </Link>
              <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> ABOUT US </Link>
              <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> SERVICES </Link>
              <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> INSURANCE </Link>
              <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> CONTACT </Link>
          </div>

          <div className={Styles.footerBottom} style={{paddingTop:"0.25rem"}}>
            <p>CopyRight 2023</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer