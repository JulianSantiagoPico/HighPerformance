import ServiceItem from "../ServiceItem/ServiceItem";

const ServicesList3 = ({ items3 }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "space-evenly",
      }}
    >
      {items3.map((element) => {
        return <ServiceItem key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ServicesList3;
