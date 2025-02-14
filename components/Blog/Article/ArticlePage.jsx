"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@utils/fetchBlogs";
import timeAgo from "@utils/time_ago";
import BackButton from "./BackButton";
import { Loader } from "lucide-react";

const BlogPage = ({ slug }) => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const page = searchParams.get("page");

  const queryParams = new URLSearchParams();
  if (filter) queryParams.append("filter", filter);
  if (page) queryParams.append("page", page);

  const queryString = queryParams.toString();
  let backUrl = "/blog";

  if (queryString) {
    backUrl += `?${queryString}`;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", { filter, page }],
    queryFn: () => fetchBlogs({ filter, page }),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading)
    return (
      <div className="text-secondary text-xl min-h-screen max-w-7xl grid place-content-center">
        <div className="flex items-col gap-5 items-center">
          <Loader color="#16a34a" size={40} className="animate-spin" />
          <span>Loading blog post...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="text-red-500 min-h-screen max-w-7xl grid place-content-center">
        Error loading blog post: {error}
      </div>
    );

  const blogPosts = data?.data?.data;
  console.log("The posts in articles is:", blogPosts);

  const blogPost = blogPosts?.find((blog) => blog.slug === slug);
  console.log("slug from blog:", slug);
  console.log("specific post :", blogPost);

  return (
    <section className="w-screen min-h-screen flex justify-center items-center my-8 ">
      <div className="container text-secondary">
        <BackButton backUrl={backUrl} />

        <div className="w-full my-8 md:my-12 ">
          <span className=" text-gray-600 opacity-90 bg-green-100 rounded-sm py-2 px-3 text-sm">
            {timeAgo(blogPost?.createdAt)} - {blogPost?.Read_Time} mins read
          </span>
          <h1 className="mt-3 mb-5 font-bold text-lg md:text-2xl lg:text-4xl lg-custom:max-w-[80%]">
            {blogPost?.Title}
          </h1>
          <div className="text-justify">{blogPost?.Description}</div>
        </div>

        <BackButton backUrl={backUrl} />
      </div>
    </section>
  );
};

export default BlogPage;
