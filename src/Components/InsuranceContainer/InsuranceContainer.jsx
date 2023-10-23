import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Styles from "./InsuranceContainer.module.css";

const InsuranceContainer = () => {
  return (
    <div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"1rem"}}>
        <Card style={{width:"98%", display:"flex", alignItems:"center", padding:"1rem"}}>
          <Card.Img variant="bottom" src="" />
          <Card.Body>
            <Card.Text>
              <div className={Styles.wrapper}>
                <div>
                  <h1>
                    Going through insurance?
                  </h1>
                  <h4>
                    We work with a variety of insurances that cover anything you need related to calibrations!
                  </h4>
                  <Button variant="danger" href='/contact' size="lg" style={{marginTop:"1rem"}}>Contact us!</Button>
                </div>

                <div>
                  <Image className={Styles.image} src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1698021884/HighPerformance/image-asset_1_o4vrwt.jpg" rounded />
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default InsuranceContainer