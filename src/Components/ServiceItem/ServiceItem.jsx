import Card from "react-bootstrap/Card";

const ServiceItem = ({ element }) => {
  return (
    <Card>
      <Card.Img variant="top" src={element.img} />
      <Card.Body style={{ backgroundColor: "#fd3131", color: "#ffffff" }}>
        <Card.Title className="px-3 pt-3">{element.title}</Card.Title>
        <Card.Text className="p-3">{element.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceItem;
