import Link from "next/link";
import timeAgo from "@utils/time_ago";
import { ArrowRight } from "lucide-react";

function truncateToFirstSentence(text) {
  return text.length > 70 ? text.slice(0, 70) + "..." : text;
}

const BlogPost = ({ post, pagination, filter }) => {
  const { page } = pagination;

  const queryParams = new URLSearchParams();
  if (filter) queryParams.append("filter", filter);
  if (page) queryParams.append("page", page);
  // if (queryParams.toString()) articleUrl += `?${queryParams.toString()}`;
  const queryString = queryParams.toString();

  let articleUrl = `/blog/${post.slug}`;

  if (queryString) {
    articleUrl += `?${queryString}`;
  }

  const categories = post?.categories;

  const truncatedContent = truncateToFirstSentence(post?.Description);
  return (
    <div className="blog_list relative text-cool-blue flex flex-col items-start gap-2">
      <div className="flex gap-2 items-center">
        {categories?.map((category, index) => (
          <span
            key={index}
            className="post_category py-0.5 px-2 bg-green-100 rounded text-sm font-regular text-cool-blue opacity-90"
          >
            {category.Title}
          </span>
        ))}
      </div>
      <Link href={articleUrl}>
        <h2 className="text-primary text-sm sm:text-base underline sm:max-w-[700px] leading-5 font-medium hover:text-green-800">
          {post.Title}
        </h2>
      </Link>
      <p className="post_summary text-base opacity-90">{truncatedContent}</p>
      <span className="post_time text-sm text-secondary  font-regular">
        {timeAgo(post?.createdAt)} - {post?.Read_Time} mins read
      </span>
      <Link
        href={articleUrl}
        className="more flex gap-2 items-center absolute right-2 bottom-11"
      >
        <span className="text-primary">Read more</span>
        <ArrowRight color="#16a34a" size={18} strokeWidth={2} />
      </Link>

      <hr className="border-t border-gray-300 w-full mt-3 mb-6 " />
    </div>
  );
};

export default BlogPost;
