import Image from "next/image";
import Subscribe from "./Subscribe";
import CopyText from "@components/Common/Copy";
const Careers = () => {
  return (
    <section className="w-screen pt-28 pb-16">
      <div className="container text-secondary flex flex-col lg:flex-row justify-between items-center gap-6 mt-6">
        <div className="lg:flex-1 flex flex-col gap-3 justify-center">
          <h1 className=" font-bold text-center md:text-start text-4xl">
            Careers
          </h1>
          <h3 className="text-base lg:text-lg max-w-2xl my-6">
            We are currently <span className="text-red-500 ">not hiring,</span>{" "}
            but you can still{" "}
            <span className="text-primary font-medium">
              be the first to know
            </span>{" "}
            when an opportunity arises. Drop your email for updates.
          </h3>
          <Subscribe />
          <h3 className="text-base lg:text-lg max-w-2xl text-center md:text-start">
            You can also <span className="text-primary">follow us</span> on our
            socials to keep abreast with such new developments:
          </h3>
          <div className="flex flex-wrap sm:flex-nowrap gap-6 my-5">
            <div className="flex items-center gap-1">
              <Image
                src="/socials/x-bg.svg"
                alt="twitter-icon"
                width={48}
                height={48}
                sizes="(max-width: 600px) 48px, (max-width: 1200px) 48px, 48px"
                className="service-image"
              />
              <h2 className="text-2xl font-semibold">:</h2>
              <CopyText text="@Sephanly" />
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/socials/meta.svg"
                alt="facebook-icon"
                width={48}
                height={48}
                sizes="(max-width: 600px) 50px, (max-width: 1200px) 50px, 50px"
                className="service-image"
              />
              <h2 className="text-2xl font-semibold">:</h2>
              <CopyText text="Sephanly" />
            </div>
          </div>
        </div>
        <Image
          src="/currently-not-hiring-for-web-development-web-design-seo-or-digital-marketing.svg"
          alt="currently-not-hiring-for-web-development-web-design-seo-or-digital-marketing"
          width={400}
          height={300}
          sizes="(max-width: 600px) 100%, (max-width: 1200px) 300px, 33vw"
          className="service-image lg:flex-1"
        />
      </div>
    </section>
  );
};
export default Careers;
