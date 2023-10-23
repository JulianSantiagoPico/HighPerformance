import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Styles from "./ServicesContainer.module.css";

const ServicesContainer = () => {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
        <Card style={{width:"98%", display:"flex", alignItems:"center", padding:"1rem"}}>
          <Card.Img variant="bottom" src="" />
          <Card.Body>
            <Card.Text>
              <div style={{paddingLeft:"5rem", paddingRight:"5rem", display:"flex"}}>

                <div >
                  <div className={Styles.wrapper}>
                    <div>
                      <Image className={Styles.image} src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1698021363/HighPerformance/adas-statistics-scaled_1_cfkt9y.jpg" rounded />
                    </div>

                    <div>
                      <div>
                        <h1>
                          ADAS Calibration
                        </h1>
                      </div>

                      <div style={{display:"flex", flexDirection:"column", fontSize:"1.25rem"}}>
                        <div>
                          <p>
                          ADAS calibration (and recalibration) is the precise physical alignment, testing, and electronic aiming of sensors that collect data to inform your vehicle's advanced driver assistance systems (ADAS), like forward collision warning (FCW), lane departure warning (LDW), automatic emergency braking (AEB), and several others.
                          </p>
                        </div>

                        <div>
                          <p>
                          Recalibration tells sensors where to look. It also shows sensors their position in relation to the vehicle. Most ADAS sensors require precise aiming. As AAA explains, “… a sensor on the car that is out of alignment by a fraction of an inch or even one degree will be aimed at an area significantly off axis 50 or more feet down the road.” Likewise, according to IIHS Advisory 43, a change as little as .6 degrees would cut the reaction time of AEB in half.
                          </p>
                        </div>

                        <div>
                          <p>
                          Unfortunately, ADAS sensors don't all have self-diagnostic capabilities to tell the driver when they are out of calibration. Automotive professionals need to know and follow OEM standards regarding ADAS calibration, so that a vehicle's ADAS systems properly function.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                    
                  <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"3rem"}}>
                    <div>
                      <h2>
                        Services we offer!
                      </h2>
                    </div>

                    <div style={{fontSize:"1.25rem", marginTop:"1rem"}} className={Styles.wrapper}>
                      <ul style={{display:"flex", flexDirection:"column", gap:"0.5rem"}}>
                        <li>  
                            <b>Blind Spot Monitor:</b> Sensors in the rear bumper and displays warning icons in both side mirrors.
                        </li>

                        <li>  
                          <b>Automatic Emergency Braking:</b> Forward facing ADAS camera or radar detects crash risks and automatically applies the vehicle's brakes.
                        </li>

                        <li>  
                          <b>Pedestrian Detector:</b> Detects an imminent colission with a pedestrian and autonomously applies the brakes or alert the driver.
                        </li>

                        <li>  
                          <b>Adaptive Cruise Control:</b> Cruise control setting that will slow down and pace a vehicle with the one in front of it.
                        </li>
                      </ul>

                      <Image className={Styles.image} src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1697852275/HighPerformance/adas-title-jpeg_1_nvtusx.png" rounded />
                    </div>
                    
                    <div style={{fontSize:"1.25rem", marginTop:"1rem"}} className={Styles.wrapper}>
                      
                      <Image className={Styles.image} src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1698020121/HighPerformance/ADAS_1_tmnly6.png" rounded />

                      <ul style={{display:"flex", flexDirection:"column", gap:"0.5rem"}}>

                        <li>  
                          <b>Traffic Sign Recognition:</b> Video cameras detect some types of road signs and diaplay them on the dashboard.
                        </li>

                        <li>  
                          <b>Lane Departure Warning:</b> Provides drivers with an alert when they drift out of their lane unintentionally.
                        </li>

                        <li>  
                          <b>Lane Keeping Assist:</b> Provides steering assistance to keep drivers in their lane.
                        </li>
                      </ul>

                    </div>

                  </div>

                </div>

              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ServicesContainer