import Styles from "./Footer.module.css";

import { BsTelephone, BsEnvelope, BsClock, BsGeoAltFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>

      <footer>

        <div className={Styles.contact}>
            <div className={Styles.sections}>
              <div className="pt-4 pr-4">
                <BsTelephone />
              </div>
              <div>
                <p style={{fontSize:"1.2rem"}}>CALL US <br /> (213)-858-8930</p>
              </div>
            </div>

            <p>|</p>

            <div className={Styles.sections}>
              <div className="pt-4 pr-4">
                <BsEnvelope />
              </div>
              <div>
                <p style={{fontSize:"1.2rem"}}>EMAIL US <br /> sbuitrago@hpautoservices.com</p>
              </div>
            </div>

            <p>|</p>

            <div className={Styles.sections}>
              <div className="pt-4 pr-4">
                <BsClock />
              </div>
              <div>
                <p style={{fontSize:"1.2rem"}}>OPEN HOURS <br /> Mon - Fri: 8am - 5pm | Sat - Sun: Closed</p>
              </div>
            </div>
        </div>

        <div className={Styles.top}>
          <div className={Styles.pages}>

            <div className="mb-2">
              <BsGeoAltFill />
            </div>

            <div style={{display:"flex", flexDirection:"column"}}>
              <h3 style={{marginBottom:"1rem"}}>Visit us</h3>
                <p style={{fontSize:"1.25rem"}}>9832 Rush St <br/> South El Monte, CA 91733</p>
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