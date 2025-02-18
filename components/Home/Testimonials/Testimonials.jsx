import Carousel from "./Carousel";
import Image from "next/image";
import Quotation from "@components/Common/Quotation";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="sections-set min-h-screen relative w-screen text-secondary"
    >
      <div className="absolute inset-0 bg-[url('/assets/webdev-seo-digital-api-grid.svg')] opacity-40 invert z-[5]"></div>

      {/* Top Cloud Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-32 pointer-events-none z-[6] blur-md
                  bg-gradient-to-b from-white/80 via-white/50 to-transparent"
      ></div>

      {/* Bottom Cloud Overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-[6] blur-sm
                  bg-gradient-to-t from-white/80 via-white/50 to-transparent"
      ></div>

      <div className="container relative z-[10]  ">
        <h2 className="sub-headers ">Grow online</h2>
        <div className="mt-5 lg:mt-12 xl:mt-5 w-full flex flex-wrap justify-center items-center gap-12 lg:gap-6">
          <Image
            src="/make-more-money-with-our-web-dev-seo-digital-marketing-api-integration-and-web-design.svg"
            alt="make-more-money-with-our-web-dev-seo-digital-marketing-api-integration-and-web-design"
            width={400}
            height={300}
            sizes="(max-width: 600px) 100%, (max-width: 1200px) 500px, 33vw"
            className="service-image lg:flex-1"
            // className="service-image mt-6 lg:mt-12"
          />
          <div className="lg:flex-1 flex flex-col justify-center items-center gap-8 mx-auto w-full lg:max-w-[600px]">
            <div className="overflow-hidden relative p-6 xl:p-12 flex flex-col justify-center items-center rounded-lg shadow-lg  bg-tertiary ">
              <h2 className="font-semibold text-lg xl:text-2xl mb-6 green-border-l">
                More money
              </h2>
              <h3 className="z-[10] text-justify text-base xl:text-lg">
                Imagine a scenario where you are not restricted by space,
                employees or location. You can seemlessly serve hundreds,
                thousands, perhaps even millions of your potential clients, all
                at the same time, whether they are from a different country or
                otherwise, and your business runs even when you are asleep. That
                is{" "}
                <span className="text-primary">what growing online means</span>{" "}
                for you. Simply put,{" "}
                <span className="text-primary">more money!</span>
              </h3>
            </div>
            <p className="text-center opacity-90 w-full lg:max-w-3xl">
              Choose among our{" "}
              <span className="text-primary">
                {" "}
                Web development, SEO, Digital marketing, API integration, UI/UX
              </span>{" "}
              or{" "}
              <span className="text-primary">Custom software solutions </span>
              to help you get set on the path of proper digital growth, hence
              more money overtime. Get a quotation now to get started:
            </p>
            <Quotation large={true} />
          </div>
        </div>

        <div className="w-full relative mt-16 pb-12 ">
          <h2 className="sub-headers mb-6">Trusted by</h2>

          <div className="w-full h-[190px] pb-12">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
