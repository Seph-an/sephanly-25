import Layman from "./Layman";
import { ArrowRight } from "lucide-react";

const Why = () => {
  const heroBtnStyle =
    "bg-green-600 rounded-md text-white shadow-lg py-5 px-5 text-xl w-[300px] font-medium flex justify-center items-center gap-3";
  return (
    <section
      id="layman"
      className="sections-set relative w-screen pb-12  text-secondary bg-tertiary"
    >
      <div className="container z-5 relative flex flex-col items-center h-full">
        <h2 className="sub-headers ">Understanding the digital space</h2>
        <Layman />
        <p className="text-lg text-center mb-8">
          Get started building your digital footprint today and{" "}
          <span className="text-primary">grow your success online:</span>
        </p>
        <button className={`${heroBtnStyle}`}>
          <span>Get quotation now</span>
          <ArrowRight color="#fff" size={20} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
};
export default Why;
