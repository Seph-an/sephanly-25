import ServiceDetails from "./ServiceDetails";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  return (
    <div className="w-full grid items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-8 lg:my-12">
      {ServiceDetails.map((service, index) => (
        <div key={index}>
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
};
export default ServiceCards;
