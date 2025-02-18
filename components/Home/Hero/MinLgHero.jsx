import HeroHeader from "./HeroHeader";
import HeroSub from "./HeroSub";
import HeroImg from "./HeroImg";
import HeroBtns from "./HeroBtns";

const MinLgHero = () => {
  return (
    <div className="hidden lg:flex w-full justify-between items-center flex-col lg:flex-row gap-6">
      <div className="flex-1 flex flex-col gap-8 lg:gap-16 ">
        <HeroHeader />
        <HeroSub />
        <HeroBtns />
      </div>
      <HeroImg />
    </div>
  );
};
export default MinLgHero;
