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
      <div className="z-5 relative flex flex-col items-center h-full">
        <h2 className="sub-headers ">Understanding the digital space</h2>
        {/* <h3 className="max-w-6xl text-center text-lg mt-8">
          Imagine a scenario where you are not restricted by space, employees or
          location. You can seemlessly serve hundreds, thousands, perhaps even
          millions of your potential clients, all at the same time.That is{" "}
          <span className="text-primary">what going online means</span> for your
          bussiness.
        </h3> */}
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
