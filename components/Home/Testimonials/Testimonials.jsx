import Carousel from "./Carousel";
import { ArrowRight } from "lucide-react";

const Testimonials = () => {
  const heroBtnStyle =
    "bg-green-600 rounded-md text-white shadow-lg py-5 px-5 text-xl w-[300px] font-medium flex justify-center items-center gap-3";
  return (
    <section
      id="testimonials"
      className="sections-set min-h-screen relative w-screen text-secondary"
    >
      <div className="absolute inset-0 bg-[url('/assets/webdev-seo-digital-api-grid.svg')] opacity-40 invert z-10"></div>

      <div className="container z-20 ">
        <h2 className="sub-headers ">Grow online</h2>
        <div className="mt-8 flex-1 overflow-hidden relative  p-12 flex justify-center items-center rounded-lg shadow-lg mx-auto max-w-7xl bg-tertiary ">
          <h3 className="z-[5] text-center text-lg">
            Imagine a scenario where you are not restricted by space, employees
            or location. You can seemlessly serve hundreds, thousands, perhaps
            even millions of your potential clients, all at the same time,
            whether they are from a different country or otherwise, and your
            business runs even when you are asleep. That is{" "}
            <span className="text-primary">what growing online means</span> for
            you. Simply put,{" "}
            <span className="text-primary">more business!</span>
          </h3>
          <div className="z-[1] -top-40  absolute rounded-full bg-elementary w-[15%] aspect-square"></div>
        </div>
        <div className="w-full relative py-16  ">
          <h2 className="sub-headers ">Trusted by</h2>

          <div className="  w-full h-full">
            <Carousel />
            <p className="text-center text-lg my-8">
              We offer a wide range of expert services that{" "}
              <span className="text-primary">
                you or your business stands to benefit
              </span>{" "}
              from.{" "}
            </p>
            <button className={`${heroBtnStyle} mx-auto`}>
              <span>Get quotation now</span>
              <ArrowRight color="#fff" size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
