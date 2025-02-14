import Link from "next/link";
import { ArrowLeft } from "lucide-react";
const BackButton = ({ backUrl }) => {
  return (
    <Link
      href={backUrl}
      className="text-tertiary w-fit px-3 py-2 rounded-sm shadow-sm mr-auto flex items-center gap-2 bg-primary hover:bg-green-800"
    >
      <ArrowLeft color="#fff" size={24} strokeWidth={2} />
      <span className="">Back</span>
    </Link>
  );
};
export default BackButton;
