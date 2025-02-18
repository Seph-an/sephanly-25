import HeroHeader from "./HeroHeader";
import HeroSub from "./HeroSub";
import HeroImg from "./HeroImg";
import HeroBtns from "./HeroBtns";

const MaxLgHero = () => {
  return (
    <div className=" flex lg:hidden w-full  justify-between items-center flex-col lg:flex-row gap-6">
      <div className="flex flex-col items-center gap-3 pt-0 sm:pt-20 pb-8">
        <HeroHeader />
        <HeroImg />
        <HeroSub />
        <HeroBtns />
      </div>
    </div>
  );
};
export default MaxLgHero;
