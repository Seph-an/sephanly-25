import ServiceDetails from "./ServiceDetails";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  return (
    <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 sm:my-auto">
      {ServiceDetails.map((service, index) => (
        <div key={index}>
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
};
export default ServiceCards;
