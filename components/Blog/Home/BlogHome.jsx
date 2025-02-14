"use client";

import BlogCTA from "./BlogCTA";
import Ad from "./Ad";
import Filter from "./Filter";

import BlogPost from "./BlogPost";
import Pagination from "./Pagination";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@utils/fetchBlogs";
import { useSearchParams } from "next/navigation";
import { Loader } from "lucide-react";

const BlogHome = () => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const page = searchParams.get("page");

  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", { filter, page }],
    queryFn: () => fetchBlogs({ filter, page }),
    staleTime: 5 * 60 * 1000,
  });

  const blogPosts = data?.data?.data;
  const pagination = data?.data?.meta?.pagination;

  // const meta = data?.data?.meta;
  // console.log("meta is:", meta);
  if (isLoading)
    return (
      <div className="text-secondary text-xl min-h-screen max-w-[700px] grid place-content-center">
        <div className="flex items-col gap-5 items-center">
          <Loader color="#16a34a" size={40} className="animate-spin" />
          <span>Fetching blog posts...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="text-red-500 min-h-screen max-w-[700px] grid place-content-center">
        Error loading blog posts: {error}
      </div>
    );
  // propably an image to manage not found
  if (blogPosts.length < 1)
    return (
      <div className="text-red-500 min-h-screen max-w-[700px] grid place-content-center">
        Oops! No matching posts available
      </div>
    );

  return (
    <section className="w-screen min-h-screen mt-8  ">
      <div className="w-full text-secondary py-0 md:py-8 ">
        <div className=" w-full pt-12 pb-12 bg-gradient-to-b from-transparent via-green-100 to-green-100">
          <div className="container flex flex-col items-center gap-2 md:gap-3">
            <h2 className="font-bold text-lg ">Blog</h2>
            <h1 className=" max-w-[600px] text-center text-xl font-semibold md:text-3xl xl:text-4xl">
              Stay <span className="text-primary">in the loop</span> with <br />{" "}
              the latest about digital solutions.
            </h1>
          </div>
        </div>
      </div>
      <div className="container text-secondary">
        <div className="w-full lg-custom:flex lg-custom:justify-between lg-custom:items-center my-8 lg-custom:my-5">
          <h2 className="font-bold text-xl text-cool-blue lg-custom:mb-0">
            Articles
          </h2>
          <Filter filter={filter} />
        </div>
        <div className="overflow-y-scroll w-full flex flex-col gap-5 md:flex-row md:gap-10">
          <div className="w-full max-w-[700px]">
            <div className="blog-lists  flex flex-col">
              {blogPosts?.map((post, index) => (
                <BlogPost
                  key={index}
                  post={post}
                  pagination={pagination}
                  filter={filter}
                />
              ))}
            </div>
            <Pagination pagination={pagination} filter={filter} />
          </div>
          <Ad pagination={pagination} />
        </div>
      </div>
      <BlogCTA pagination={pagination} />
    </section>
  );
};

export default BlogHome;
