import { Telescope, ArrowRight, Link2 } from "lucide-react";
import Link from "next/link";

const HeroBtns = () => {
  return (
    <div className="gap-6 w-full flex flex-wrap justify-center sm:justify-between sm:flex-nowrap  text-white">
      <Link href="#solutions" className="hero-btn">
        <span>Explore our solutions</span>{" "}
        <Telescope color="#fff" size={20} strokeWidth={2} />
      </Link>
      <Link href="#testimonails" className="hero-btn">
        <span>Why go or grow online ?</span>
        <ArrowRight color="#fff" size={20} strokeWidth={2} />
      </Link>
    </div>
  );
};
export default HeroBtns;
