import { Telescope, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen w-screen  text-secondary flex items-center justify-center pb-8">
      <div className="container flex flex-col items-center justify-center text-center gap-4 md:gap-8 lg:gap-12  mt-20 sm:mt-16 md:mt-14  lg:mt-12 xl:mt-20 ">
        <h1 className="text-3xl md:text-4xl xl:text-6xl font-semibold ">
          Empowering <span className="text-primary">Your Online Success</span>{" "}
          with Cutting-Edge Solutions
        </h1>
        <h2 className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-6xl">
          Your one-stop solution for{" "}
          <span className="text-green-600">
            Web Development, SEO, Digital Marketing, API Integration, UI/UX, and
            Custom Software.
          </span>{" "}
          Let us build your digital future today!
        </h2>
        <div className="flex flex-wrap justify-center sm:flex-nowrap md:gap-20 lg:gap-24 text-white">
          <button className="large-btn">
            <span>Explore our solutions</span>{" "}
            <Telescope color="#fff" size={20} strokeWidth={2} />
          </button>
          <button className="large-btn">
            <span>Why go or grow online ?</span>
            <ArrowRight color="#fff" size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
