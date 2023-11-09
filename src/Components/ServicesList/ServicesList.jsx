import ServiceItem from "../ServiceItem/ServiceItem";

const ServicesList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "40%",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "space-evenly",
        columns: "2",
      }}
    >
      {items.map((element) => {
        return <ServiceItem key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ServicesList;
