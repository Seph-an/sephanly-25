import Layman from "./Layman";
import { ArrowRight } from "lucide-react";
import Quotation from "@components/Common/Quotation";

const Why = () => {
  return (
    <section
      id="layman"
      className="sections-set relative w-screen pb-12 overflow-hidden text-secondary bg-tertiary"
    >
      <div className="container z-5 relative flex flex-col items-center h-full">
        <h2 className="sub-headers ">Understanding the digital space</h2>
        <p className="text-lg opacity-90 text-center my-5">
          Demystifying the digital world using simple analogies and everyday
          language.
        </p>
        <Layman />
        <p className="text-lg text-center opacity-90 mb-8">
          Get started building your digital footprint today and{" "}
          <span className="text-primary">grow your success online:</span>
        </p>

        <Quotation large={true} />
      </div>
    </section>
  );
};
export default Why;
