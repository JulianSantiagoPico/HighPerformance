import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
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
              <Col className="md:mx-36 sm:mx-0">
                <Row>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <Row>
                      <div>
                        <h1>Services we offer!</h1>
                      </div>
                    </Row>
                  </Col>
                </Row>
                <Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Col
                    lg={6}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      className="md:px-24 sm:px-8"
                    >
                      <li>
                        <b>Blind Spot Monitor:</b> Sensors in the rear bumper
                        and displays warning icons in both side mirrors.
                      </li>

                      <li>
                        <b>Automatic Emergency Braking:</b> Forward facing ADAS
                        camera or radar detects crash risks and automatically
                        applies the vehicle's brakes.
                      </li>

                      <li>
                        <b>Pedestrian Detector:</b> Detects an imminent
                        colission with a pedestrian and autonomously applies the
                        brakes or alert the driver.
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
                        <b>Lane Departure Warning:</b> Provides drivers with an
                        alert when they drift out of their lane unintentionally.
                      </li>

                      <li>
                        <b>Lane Keeping Assist:</b> Provides steering assistance
                        to keep drivers in their lane.
                      </li>
                    </ul>
                  </Col>

                  <Col
                    lg={5}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699147940/HighPerformance/advanced_driver-assistance_systems_im02_1_ckul2x.png"
                      rounded
                      className="mb:shadow-none lg:shadow-md md:block sm:hidden"
                    />
                  </Col>
                </Row>
              </Col>
              <Image
                src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1698020121/HighPerformance/ADAS_1_tmnly6.png"
                rounded
                className="mb:shadow-none lg:shadow-md md:hidden sm:block"
              />
            </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ServicesContainer2;
