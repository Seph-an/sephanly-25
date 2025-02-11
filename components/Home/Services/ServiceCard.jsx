import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <Link
      href={service.link}
      className="bg-tertiary rounded-md shadow-md flex flex-col p-5 gap-3 transition-shadow duration-300 ease-in-out hover:shadow-[0_4px_6px_-1px_#92e3a9]"
    >
      <div className="flex items-center gap-3">
        <div className="text-secondary bg-elementary rounded-full p-2">
          {service.Icon}
        </div>
        <h3 className="card-title">{service.title}</h3>
      </div>
      <p className="text-base opacity-90">{service.description}</p>
      <div className="flex items-center gap-2">
        <span className="font-medium text-primary">Explore</span>
        <ArrowRight color="#16a34a" size={18} />
      </div>
    </Link>
  );
};

export default ServiceCard;
