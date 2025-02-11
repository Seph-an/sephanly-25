"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-screen pt-32 sm:pt-28 pb-16 bg-tertiary">
      <div className="container text-secondary flex lg:justify-between  flex-wrap justify-center items-center">
        <div className="flex flex-col gap-8 sm:gap-12 justify-center">
          <h1 className=" text-center lg:text-start font-bold text-4xl">
            Frequently Asked Questions
          </h1>
          <h3 className="mb-12 lg:mb-0 text-center lg:text-start opacity-90 lg:text-lg max-w-xl">
            Find answers to your pressing questions about our digital solutions,
            all in one place.
          </h3>
        </div>
        <Image
          src="/FAQs-about-web-development-software-engineering-search-engine-optimization-digital-marketing-api-integration.svg"
          alt="FAQs-about-web-development-software-engineering-search-engine-optimization-digital-marketing-api-integration"
          width={400}
          height={300}
          sizes="(max-width: 600px) 100%, (max-width: 1200px) 300px, 33vw"
          className="service-image"
        />
      </div>
    </section>
  );
};

export default Hero;
