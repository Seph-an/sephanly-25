"use client";

import Link from "next/link";
import BlogCards from "./BlogCards";
import { ArrowRight } from "lucide-react";

const FeaturedBlogs = () => {
  return (
    <section
      id="blog"
      className="w-screen min-h-screen bg-green-100 my-12 flex flex-col items-center"
    >
      <div className="container text-secondary">
        <h2 className="sub-headers">From the blog.</h2>
        <p className="text-center text-base  opacity-90">
          Keep abreast with{" "}
          <span className="text-primary opacity-95">career growth</span>{" "}
          opinions, new developments and{" "}
          <span className="text-primary opacity-95"> tips</span> from our
          experts.
        </p>
        <BlogCards />
        <Link href="/blog" className="large-btn">
          <span> Visit Blog</span>
          <ArrowRight color="#fff" size={20} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
