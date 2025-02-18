import Image from "next/image";

const HeroImg = () => {
  return (
    <Image
      src="/web-design-search-engine-optimization-seo-web-development-wordpress-sites-mpesa-integration-online-payment.svg"
      alt="web-design-search-engine-optimization-seo-web-development-wordpress-sites-mpesa-integration-online-payment"
      width={400}
      height={300}
      priority
      sizes="(max-width: 600px) 100%, (max-width: 1200px) 500px, 33vw"
      className="flex-1 w-full md:w-[70%] lg:w-1/3"
      // className="service-image mt-6 lg:mt-12"
    />
  );
};
export default HeroImg;
