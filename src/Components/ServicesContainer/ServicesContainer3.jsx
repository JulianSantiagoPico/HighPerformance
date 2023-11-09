import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServicesList from "../ServicesList/ServicesList";
import { services } from "../../ServicesMock";
import { useState, useEffect } from "react";

const ServicesContainer3 = () => {
  const [items, setItems] = useState([]);

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

  console.log(services);

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
