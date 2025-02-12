import CoreValuesGrid from "./Values";
import Action from "./Action";
import Link from "next/link";

const Why = () => {
  return (
    <section className="min-h-screen w-screen flex ">
      <div className="container text-secondary pb-8 flex flex-col items-center">
        <h2 className="sm:text-center font-semibold text-2xl text-secondary mb-3">
          Why we do what we do.
        </h2>
        <p className="text-center text-secondary text-base opacity-90">
          Empowering businesses with digital solutions: Our{" "}
          <span className="text-primary">Mission</span> and{" "}
          <span className="text-primary">Vision.</span>
        </p>
        <div className="w-full flex flex-col sm:flex-row justify-center items-stretch xl:justify-between gap-3 lg:gap-6 my-16 md:my-20">
          <div className="about-card flex-1 ">
            <h3 className="about-card-title border-l-2 border-primary  pl-2">
              Our Mission
            </h3>
            <p className="opacity-85">
              To empower businesses with innovative digital solutions; ranging
              from web development and SEO to digital marketing, UI/UX, and
              custom software, that drive growth, streamline operations, and
              enhance customer engagement.
            </p>
          </div>
          <div className="about-card flex-1 ">
            <h3 className="about-card-title border-l-2 border-primary  pl-2">
              Our Vision
            </h3>
            <p className="opacity-85">
              To become the leading digital partner that transforms industries
              by delivering exceptional, technology-driven experiences that
              redefine what’s possible in the digital world.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center font-semibold text-2xl text-secondary mb-3">
            Our core values.
          </h2>
          <p className="opacity-90 text-center text-secondary text-base max-w-4xl mx-auto">
            Discover the guiding principles behind our digital excellence—values
            that drive innovation, foster collaboration, and empower your
            business to{" "}
            <span className="text-primary">thrive in a connected world.</span>
          </p>
          <CoreValuesGrid />
          <Action />
          <div className="w-full flex justify-end items-center">
            <Link
              href={"https://storyset.com/business"}
              className="font-thin text-xs  opacity-50"
            >
              Illustrations by Storyset
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
