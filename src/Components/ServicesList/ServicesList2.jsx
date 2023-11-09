import ServiceItem from "../ServiceItem/ServiceItem";

const ServicesList2 = ({ items2 }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "space-evenly",
      }}
    >
      {items2.map((element) => {
        return <ServiceItem key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ServicesList2;
