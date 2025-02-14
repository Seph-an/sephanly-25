import Link from "next/link";
import timeAgo from "@utils/time_ago";

function truncateToFirstSentence(text) {
  return text.length > 70 ? text.slice(0, 100) + "..." : text;
}

const BlogCard = ({ post }) => {
  const truncatedContent = truncateToFirstSentence(post.Summary);
  return (
    <div className="w-[300px] xs:w-80 lg:flex-1 flex-shrink-0 relative flex flex-col items-start gap-4 border border-primary p-2 rounded-[0.625rem]">
      <span className="post_category py-0.5 px-3 bg-sky-100 rounded text-sm font-regular  opacity-90">
        {post.Category}
      </span>
      <Link href={`/blog/${post.documentId}`}>
        <h2 className=" text-sm sm:text-base underline sm:max-w-[700px] leading-5 font-semibold hover:text-primary-blue">
          {post.Title}
        </h2>
      </Link>
      <p className=" text-base opacity-90">{truncatedContent}</p>
      <div className=" w-full flex  justify-between  ">
        <span className=" text-sm text-gray-700 opacity-90 font-regular">
          {timeAgo(post.createdAt)} - {post.Read_Time} mins read
        </span>
        <Link href={`/blog/${post.documentId}`}>
          <p className="more  flex items-center text-sm text-primary-blue font-medium">
            Read more{" "}
            <span className="text-[24px] ml-1 leading-none inline-block transform -translate-y-[1px]">
              &#x203A;
            </span>
          </p>
        </Link>
        {/* <hr className="border-t border-gray-300 w-full mt-3 mb-6 " /> */}
      </div>
    </div>
  );
};

export default BlogCard;
