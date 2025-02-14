import Link from "next/link";
import Image from "next/image";
import Button from "@components/Common/Button";

const GapAd = ({ pagination }) => {
  const { pageCount } = pagination;
  return (
    <div
      className={`${
        pageCount < 2 && "mt-12 md:mt-0"
      } sticky top-0 grow flex flex-col gap-16 md:gap-12 text-cool-blue  min-w-[300px] pt-5 pb-20 bg-red-100 `}
    >
      <Image
        priority
        src="/web-dev-web-design-e-commerce-seo-digital-marketing-and-api-blog.svg"
        alt="web-dev-web-design-e-commerce-seo-digital-marketing-and-api-blog"
        width={300}
        height={200}
        className="w-full h-auto order-2 md:order-1 "
      />
      <div className=" order-1 md:order-2 bg-green-100 rounded-lg shadow-sm flex flex-col gap-5 items-center justify-center px-5 py-6">
        <h3 className="font-semibold text-lg green-border-l ">
          Elevate your business
        </h3>
        <h2 className="font-regular text-center text-base mt-2 mb-3 opacity-90">
          Explore assorted{" "}
          <span className="text-primary opacity-100 font-bold">
            digital solutions
          </span>{" "}
          that help you{" "}
          <span className="text-primary opacity-100 font-bold">
            make more money
          </span>{" "}
          in today's digital space!
        </h2>
        <Button link={"digital-solutions"} content={"Make more money"} />
      </div>
    </div>
  );
};

export default GapAd;
