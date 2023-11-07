import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhyContainer = () => {
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
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default WhyContainer;
