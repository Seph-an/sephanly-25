"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-screen pt-28 pb-16">
      <div className="container text-secondary flex flex-wrap justify-center items-center gap-6">
        <div className="flex flex-col gap-12 justify-center ">
          <h1 className=" font-bold text-4xl text-center">About Us</h1>
          <h3 className="text-base opacity-90 text-center lg:text-lg max-w-2xl">
            We're a passionate team dedicated to turning ideas into engaging
            digital experiences—blending design, development, and strategy to
            <span className="text-primary"> help your business thrive.</span>
          </h3>
        </div>
        <Image
          src="/services/digital-marketing-more-likes-on-social-media-more-money.svg"
          alt="digital-marketing-more-likes-on-social-media-more-money"
          width={400}
          height={300}
          sizes="(max-width: 600px) 100%, (max-width: 1200px) 500px, 33vw"
          className="service-image mt-6 lg:mt-12"
        />
      </div>
    </section>
  );
};

export default Hero;
