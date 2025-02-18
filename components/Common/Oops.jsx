import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Oops = () => {
  return (
    <section className="min-h-screen w-screen  text-secondary flex items-center justify-center pb-8">
      <div className="container flex flex-col items-center justify-center text-center mt-28 sm:mt-16 md:mt-32 lg:mt-24  ">
        <div className="flex w-full justify-between items-center flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-4 text-red-400">
              Oops! The page you're looking for doesn't exist.
            </p>
            <Link
              href="/"
              className="mt-6 max-w-[200px] p-5 bg-primary text-white text-lg rounded-lg flex items-center justify-center gap-3"
            >
              <ArrowLeft color="#fff" size={24} strokeWidth={2} />
              <span>Go Back Home</span>
            </Link>
          </div>
          <Image
            src="/404-error-no-web-dev-seo-or-digital-marketing-services.svg"
            alt="404-error-no-web-dev-seo-or-digital-marketing-services"
            width={400}
            height={300}
            priority
            sizes="(max-width: 600px) 100%, (max-width: 1200px) 500px, 33vw"
            className="flex-1 w-full md:w-[70%] lg:w-1/3"
          />
        </div>
      </div>
    </section>
  );
};

export default Oops;
