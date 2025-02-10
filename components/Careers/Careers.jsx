const Careers = () => {
  const handleClick = () => {
    alert("You have successfully subscribed to our newsletter!");
  };
  return (
    <section className="w-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto text-secondary flex flex-wrap justify-center items-center gap-6">
        <div className="flex flex-col gap-6 justify-center">
          <h1 className=" font-bold text-4xl">Careers</h1>
          <h3 className="lg:text-lg max-w-2xl my-6">
            We are currently{" "}
            <span className="text-red-500 font-medium">not hiring,</span> but
            you can still{" "}
            <span className="text-primary font-medium">
              be the first to know
            </span>{" "}
            when an opportunity arises. Drop your email for updates.
          </h3>
          <div className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border-2 border-gray-300"
            />
            <button onClick={handleClick} className="btn-primary">
              Update me!
            </button>
          </div>
          <div>Or</div>
          <h3>
            Follow us on our socials to keep abreast with all new developments
          </h3>
        </div>
        <Image
          src="/currently-not-hiring-for-web-development-web-design-seo-or-digital-marketing.svg"
          alt="currently-not-hiring-for-web-development-web-design-seo-or-digital-marketing"
          width={400}
          height={300}
          sizes="(max-width: 600px) 100%, (max-width: 1200px) 300px, 33vw"
          className="service-image"
        />
      </div>
    </section>
  );
};
