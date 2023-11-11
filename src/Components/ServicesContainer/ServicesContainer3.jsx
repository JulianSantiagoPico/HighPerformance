import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServicesList from "../ServicesList/ServicesList";
import { services } from "../../ServicesMock";
import { services2 } from "../../ServicesMock2";
import { services3 } from "../../ServicesMock3";
import { useState, useEffect } from "react";
import ServicesList2 from "../ServicesList/ServicesList2";
import ServicesList3 from "../ServicesList/ServicesList3";

const ServicesContainer3 = () => {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);

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

  useEffect(() => {
    const serviceList3 = new Promise((resolve) => {
      resolve(services3);
    });

    serviceList3
      .then((res) => {
        setItems3(res);
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
                  }}
                >
                  <Col
                    lg={4}
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "1rem",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                    }}
                  >
                    <ServicesList items={items} />
                  </Col>
                  <Col
                    lg={4}
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "2rem",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                    }}
                  >
                    <ServicesList2 items2={items2} />
                  </Col>
                  <Col
                    lg={4}
                    sm={12}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "2rem",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                    }}
                  >
                    <ServicesList3 items3={items3} />
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
