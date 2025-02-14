import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@utils/fetchBlogs";

const BlogCards = () => {
  const { data, isLoading, error } = useQuery(["blogs"], fetchBlogs, {
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading)
    return (
      <div className="text-cool-blue mt-16 mb-16 text-center">
        Loading featured blogs...
      </div>
    );
  if (error) return <div>Error loading featured blogs.</div>;

  const featured = data.filter((blog) => blog.isFeatured);

  return (
    <div
      className="mt-12 mb-8 lg:mt-16 pb-4 w-full flex lg:justify-center gap-2 xs:gap-4  overflow-x-scroll"
      // className="featured_blog w-full gap-4 flex overflow-scroll lg:gap-6 lg-custom:flex-1  lg-custom:items-start lg-custom:justify-between mt-8 lg-custom:mt-16 mb-8"
    >
      {featured.length ? (
        featured.map((blog) => <BlogCard key={blog.id} post={blog} />)
      ) : (
        <p>No featured blogs available.</p>
      )}
    </div>
  );
};

export default BlogCards;
