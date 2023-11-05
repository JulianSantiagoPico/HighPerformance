import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Styles from "./ServicesContainer2.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServicesContainer2 = () => {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-4"
      >
        <Card
          style={{
            width: "98%",
            display: "flex",
            alignItems: "center",
          }}
          className="p-4"
        >
          <Card.Img variant="bottom" src="" />
          <Card.Body>
            <Container fluid>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    flexDirection: "column",
                  }}
                  className="mx-20"
                >
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Col sm={12} lg={6}>
                      <Image
                        src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699147686/HighPerformance/122587_2397_63886e83-9e66-493c-ab85-2c1e9725d2c4_1_ktouvz.jpg"
                        rounded
                        className="mb:shadow-none lg:shadow-md"
                      />
                    </Col>
                    <Col sm={12} lg={6}>
                      <div className="text-center">
                        <h1>ADAS Calibration</h1>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="text-xl"
                      >
                        <div>
                          <p>
                            ADAS calibration (and recalibration) is the precise
                            physical alignment, testing, and electronic aiming
                            of sensors that collect data to inform your
                            vehicle's advanced driver assistance systems (ADAS),
                            like forward collision warning (FCW), lane departure
                            warning (LDW), automatic emergency braking (AEB),
                            and several others.
                          </p>
                        </div>

                        <div>
                          <p>
                            Recalibration tells sensors where to look. It also
                            shows sensors their position in relation to the
                            vehicle. Most ADAS sensors require precise aiming.
                            As AAA explains, “… a sensor on the car that is out
                            of alignment by a fraction of an inch or even one
                            degree will be aimed at an area significantly off
                            axis 50 or more feet down the road.” Likewise,
                            according to IIHS Advisory 43, a change as little as
                            .6 degrees would cut the reaction time of AEB in
                            half.
                          </p>
                        </div>

                        <div>
                          <p>
                            Unfortunately, ADAS sensors don't all have
                            self-diagnostic capabilities to tell the driver when
                            they are out of calibration. Automotive
                            professionals need to know and follow OEM standards
                            regarding ADAS calibration, so that a vehicle's ADAS
                            systems properly function.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyItems: "center",
                    }}
                    className="mt-16"
                  >
                    <Col>
                      <Row>
                        <Col>
                          <div>
                            <h2>Services we offer!</h2>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "3rem",
                            marginTop: "1rem",
                            fontSize: "1.125rem",
                            lineHeight: "1.75rem",
                          }}
                        >
                          <ul
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.5rem",
                            }}
                            className="px-24"
                          >
                            <li>
                              <b>Blind Spot Monitor:</b> Sensors in the rear
                              bumper and displays warning icons in both side
                              mirrors.
                            </li>

                            <li>
                              <b>Automatic Emergency Braking:</b> Forward facing
                              ADAS camera or radar detects crash risks and
                              automatically applies the vehicle's brakes.
                            </li>

                            <li>
                              <b>Pedestrian Detector:</b> Detects an imminent
                              colission with a pedestrian and autonomously
                              applies the brakes or alert the driver.
                            </li>

                            <li>
                              <b>Adaptive Cruise Control:</b> Cruise control
                              setting that will slow down and pace a vehicle
                              with the one in front of it.
                            </li>

                            <li>
                              <b>Traffic Sign Recognition:</b> Video cameras
                              detect some types of road signs and diaplay them
                              on the dashboard.
                            </li>

                            <li>
                              <b>Lane Departure Warning:</b> Provides drivers
                              with an alert when they drift out of their lane
                              unintentionally.
                            </li>

                            <li>
                              <b>Lane Keeping Assist:</b> Provides steering
                              assistance to keep drivers in their lane.
                            </li>
                          </ul>
                        </Col>
                        <Col>
                          <Image
                            src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699147940/HighPerformance/advanced_driver-assistance_systems_im02_1_ckul2x.png"
                            rounded
                            className="shadow-md"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Card.Text>
              <div className="px-20">
                <div>
                  <div>
                    <div>
                      <h2>Services we offer!</h2>
                    </div>

                    <div className={Styles.animation}>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                        className="px-24"
                      >
                        <li>
                          <b>Blind Spot Monitor:</b> Sensors in the rear bumper
                          and displays warning icons in both side mirrors.
                        </li>

                        <li>
                          <b>Automatic Emergency Braking:</b> Forward facing
                          ADAS camera or radar detects crash risks and
                          automatically applies the vehicle's brakes.
                        </li>

                        <li>
                          <b>Pedestrian Detector:</b> Detects an imminent
                          colission with a pedestrian and autonomously applies
                          the brakes or alert the driver.
                        </li>

                        <li>
                          <b>Adaptive Cruise Control:</b> Cruise control setting
                          that will slow down and pace a vehicle with the one in
                          front of it.
                        </li>

                        <li>
                          <b>Traffic Sign Recognition:</b> Video cameras detect
                          some types of road signs and diaplay them on the
                          dashboard.
                        </li>

                        <li>
                          <b>Lane Departure Warning:</b> Provides drivers with
                          an alert when they drift out of their lane
                          unintentionally.
                        </li>

                        <li>
                          <b>Lane Keeping Assist:</b> Provides steering
                          assistance to keep drivers in their lane.
                        </li>
                      </ul>

                      <Image
                        src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699147940/HighPerformance/advanced_driver-assistance_systems_im02_1_ckul2x.png"
                        rounded
                        className="shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ServicesContainer2;
