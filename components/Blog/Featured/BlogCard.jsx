import Link from "next/link";
import timeAgo from "@utils/time_ago";
import { ArrowRight } from "lucide-react";

function truncateToFirstSentence(text) {
  return text.length > 70 ? text.slice(0, 100) + "..." : text;
}

const BlogCard = ({ post }) => {
  const categories = post?.categories;
  const articleUrl = `/blog/${post?.slug}`;

  const truncatedContent = truncateToFirstSentence(post?.Description);
  return (
    <div className="bg-tertiary shadow-md lg:flex-1 flex-shrink-0 relative flex flex-col items-start gap-4  p-5 rounded-md">
      <div className="flex gap-2 items-center">
        {categories?.map((category, index) => (
          <span
            key={index}
            className="post_category py-0.5 px-2 bg-green-100 rounded text-sm font-regular text-cool-blue opacity-90"
          >
            {category?.Title}
          </span>
        ))}
      </div>
      <Link href={articleUrl}>
        <h2 className="text-primary text-sm sm:text-base underline sm:max-w-[700px] leading-5 font-medium hover:text-green-800">
          {post?.Title}
        </h2>
      </Link>
      <p className=" text-base opacity-90">{truncatedContent}</p>
      <div className=" self-end w-full flex flex-col xl:flex-row justify-between gap-2">
        <span className=" text-sm text-gray-700 opacity-90 font-regular">
          {timeAgo(post?.createdAt)} - {post?.Read_Time} mins read
        </span>
        <Link href={articleUrl} className="more flex gap-2 items-center ">
          <span className="text-primary">Read more</span>
          <ArrowRight color="#16a34a" size={18} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
