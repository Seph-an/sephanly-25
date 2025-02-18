import ServiceCards from "./ServiceCards";
const Services = () => {
  return (
    <section
      id="solutions"
      className="sections-set w-screen min-h-screen flex flex-col items-center text-secondary"
    >
      <div className="container  flex flex-col items-center justify-center">
        <h2 className="sub-headers">Find a digital solution</h2>
        <h3 className="sub-paragraph opacity-90 ">
          Explore our comprehensive range of services designed to{" "}
          <span className="text-primary">elevate your business</span> in today’s
          competitive digital landscape.
        </h3>
        <ServiceCards />
      </div>

      {/* <p className="mt-8 mb-5 text-center">
        Find a solution for your digital future. Elevate your business today:
      </p> */}
    </section>
  );
};

export default Services;
