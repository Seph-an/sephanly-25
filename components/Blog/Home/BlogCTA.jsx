import Link from "next/link";

const BlogCTA = ({ pagination }) => {
  const { pageCount } = pagination;
  return (
    <section className="w-screen">
      <div
        className={`${
          pageCount < 2 && "mt-16 lg:mt-20"
        } pt-5 pb-8 w-screen text-secondary bg-gradient-to-b from-transparent via-green-100 to-green-100`}
      >
        <div className="container flex flex-col items-center gap-6 pb-8">
          <h2 className="font-bold text-base text-primary">Start now</h2>
          <h1 className=" max-w-[600px] text-center text-xl font-semibold md:text-3xl xl:text-4xl">
            Advance your career with{" "}
            <span className="text-primary-blue">expertise</span>
          </h1>
          <span className="opacity-85 px-[16px] max-w-[600px] text-center text-base">
            Find out why CV It Up's services are trusted and impactful to
            various professionals from every corner.
          </span>
          <Link href="/faqs" className="large-btn">
            Discover why
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
