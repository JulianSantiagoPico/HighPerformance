import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServicesList from "../ServicesList/ServicesList";
import { services } from "../../ServicesMock";
import { services2 } from "../../ServicesMock2";
import { useState, useEffect } from "react";
import ServicesList2 from "../ServicesList/ServicesList2";

const ServicesContainer3 = () => {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    const serviceList = new Promise((resolve) => {
      resolve(services);
    });

    serviceList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const serviceList2 = new Promise((resolve) => {
      resolve(services2);
    });

    serviceList2
      .then((res) => {
        setItems2(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                      marginBottom: "1rem",
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
                    justifyContent: "space-evenly",
                  }}
                >
                  <Col
                    lg={6}
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      marginTop: "1rem",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                    }}
                  >
                    <ServicesList items={items} />
                  </Col>
                  <Col
                    lg={6}
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      marginTop: "1rem",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                    }}
                  >
                    <ServicesList2 items2={items2} />
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "2rem",
                      justifyContent: "space-evenly",
                      marginTop: "2rem",
                    }}
                  >
                    <Card className="md:w-5/12 sm:w-10/12">
                      <Card.Img
                        variant="top"
                        src="https://res.cloudinary.com/duqtm5tnb/image/upload/v1699409665/HighPerformance/Services/CR-Magazine-InlineHERO-safety-technology-0817-_kt0nje.jpg"
                      />
                      <Card.Body
                        style={{ backgroundColor: "#fd3131", color: "#ffffff" }}
                      >
                        <Card.Title className="px-3 pt-3">
                          Lane Keeping Assist
                        </Card.Title>
                        <Card.Text className="p-3">
                          Lane keeping assistance (LKA) gives steering support
                          to assist the driver in preventing the vehicle from
                          departing the lane.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ServicesContainer3;
