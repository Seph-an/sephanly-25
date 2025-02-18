"use client";

import Link from "next/link";
import BlogCards from "./BlogCards";
import { ArrowRight } from "lucide-react";

const FeaturedBlogs = () => {
  return (
    <section
      id="blog"
      className="w-screen min-h-screen bg-green-100 flex flex-col items-center "
    >
      <div className="container text-secondary py-16 flex flex-col items-center">
        <h2 className="sub-headers">🚀 Stay ahead in the digital space! 🚀</h2>
        <p className="mt-8 text-center text-base lg:text-lg  opacity-90 max-w-5xl">
          Discover the latest insights, trends, and expert tips on web
          development, SEO, digital marketing, and more. We bring you valuable
          knowledge to help you{" "}
          <span className="text-primary">build, optimize, and grow </span>your
          online presence effectively.
        </p>
        <BlogCards />
        <p className="text-center text-base lg:text-lg   opacity-90">
          <span className="text-primary ">💡 Want more? </span>
          Discover more expert insights - click{" "}
          <span className="text-green font-semibold">"Visit Blog"</span> to stay
          ahead.
        </p>
        <Link href="/blog" className="large-btn mt-8">
          <span> Visit Blog</span>
          <ArrowRight color="#fff" size={20} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
