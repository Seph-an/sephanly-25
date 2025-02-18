import MaxLgHero from "./MaxLgHero";
import MinLgHero from "./MinLgHero";

const Hero = () => {
  return (
    <section className="min-h-screen w-screen  text-secondary flex items-center justify-center pb-8">
      <div className="container flex flex-col items-center justify-center text-center gap-5 md:gap-8 lg:gap-8  mt-28 sm:mt-16 md:mt-14 lg:mt-24  ">
        <MinLgHero />
        <MaxLgHero />
        {/* <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-8 lg:gap-16 ">
            <h2 className="text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold xl:font-bold">
              Empowering{" "}
              <span className="text-primary">Your Online Success</span> with
              Cutting-Edge Solutions
            </h2>
            <h1 className="text-start text-base md:text-lg xl:text-xl max-w-6xl">
              Your one-stop solution for{" "}
              <span className="font-semibold xl:font-bold">
                Web Development, SEO, Digital Marketing, API Integration, UI/UX,
                and Custom Software.
              </span>{" "}
              Let us build your digital success today!
            </h1>
            <div className="w-full flex flex-wrap justify-between sm:flex-nowrap  text-white">
              <button className="hero-btn">
                <span>Explore our solutions</span>{" "}
                <Telescope color="#fff" size={20} strokeWidth={2} />
              </button>
              <button className="hero-btn">
                <span>Why go or grow online ?</span>
                <ArrowRight color="#fff" size={20} strokeWidth={2} />
              </button>
            </div>
          </div>
          <Image
            src="/web-design-search-engine-optimization-seo-web-development-wordpress-sites-mpesa-integration-online-payment.svg"
            alt="web-design-search-engine-optimization-seo-web-development-wordpress-sites-mpesa-integration-online-payment"
            width={400}
            height={300}
            priority
            sizes="(max-width: 600px) 100%, (max-width: 1200px) 500px, 33vw"
            className="service-image flex-1"
            // className="service-image mt-6 lg:mt-12"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
