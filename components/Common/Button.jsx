import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Button = ({ link, content }) => {
  const iconColor = "#fff";
  const iconSize = 20;
  const iconWidth = 2;
  return (
    <Link href={`/${link}`}>
      <button className="large-btn">
        <span className="">{content}</span>
        <ArrowRight color={iconColor} size={iconSize} strokeWidth={iconWidth} />
      </button>
    </Link>
  );
};
export default Button;
