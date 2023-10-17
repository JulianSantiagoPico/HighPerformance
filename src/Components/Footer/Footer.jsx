import Styles from "./Footer.module.css";
import { Link } from 'react-router-dom';

import { BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";

const Footer = () => {
  return (
    <div>

      <footer>

        <div className={Styles.contact}>
            <div className={Styles.sections}>
              <div>
                <BsTelephone />
              </div>
              <div>
                <p style={{fontSize:"1.2rem"}}>CALL US <br /> (213)-858-8930</p>
              </div>
            </div>

            <p>|</p>

            <div className={Styles.sections}>
              <div>
                <BsEnvelope />
              </div>
              <div>
                <p style={{fontSize:"1.2rem"}}>EMAIL US <br /> sbuitrago@hpautoservices.com</p>
              </div>
            </div>

            <p>|</p>

            <div className={Styles.sections}>
              <div>
                <BsClock />
              </div>
              <div>
                <p style={{fontSize:"1.2rem"}}>OPEN HOURS <br /> Mon - Fri: 8am - 6pm | Sat: 8am-12pm <br /> Closed Sundays</p>
              </div>
            </div>
        </div>

        <div className={Styles.top}>
          <div className={Styles.pages}>
            <div style={{display:"flex", flexDirection:"column"}}>
            <h3>Navigation</h3>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> HOME </Link>
            <Link to="/about" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> ABOUT US </Link>
            <Link to="/services" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> SERVICES </Link>
            <Link to="/insurance" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> INSURANCE </Link>
            <Link to="/contact" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> CONTACT </Link>
            </div>

            <div style={{display:"flex", flexDirection:"column"}}>
            <h3>Brand Name</h3>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> HOME </Link>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> ABOUT US </Link>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> SERVICES </Link>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> INSURANCE </Link>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> CONTACT </Link>
            </div>

            <div style={{display:"flex", flexDirection:"column"}}>
            <h3>Brand Name</h3>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> HOME </Link>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> ABOUT US </Link>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> SERVICES </Link>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> INSURANCE </Link>
            <Link to="/" style={{textDecoration:"none", color:"white", paddingTop:"0.5rem"}}> CONTACT </Link>
            </div>
          </div>
        </div>
        <div className={Styles.info}>
          <div> &copy; 2023 HIGHPERFORMANCE CALIBRATIONS</div>
        </div>
      </footer>

    </div>
  )
}

export default Footer