"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-screen pt-28 pb-16 bg-tertiary">
      <div className="max-w-7xl mx-auto text-secondary flex justify-between">
        <div className="flex flex-col gap-12 justify-center">
          <h1 className=" font-bold text-4xl">Frequently Asked Questions</h1>
          <h3 className="lg:text-lg max-w-2xl">
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
