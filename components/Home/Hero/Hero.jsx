import { Telescope, ArrowRight } from "lucide-react";

const Hero = () => {
  const heroBtnStyle =
    "bg-green-600 rounded-md shadow-lg py-5 px-5 text-xl w-[300px] font-medium flex justify-center items-center gap-3";
  return (
    <div className="h-screen w-screen   text-secondary">
      <div className="h-full mx-auto max-w-7xl flex flex-col items-center justify-center text-center gap-16">
        <h1 className="text-6xl  font-bold mt-20">
          Empowering <span className="text-green-600">Your Online Success</span>{" "}
          with Cutting-Edge Solutions
        </h1>
        <h2 className="text-3xl max-w-6xl">
          Your one-stop solution for{" "}
          <span className="text-green-600">
            Web Development, SEO, Digital Marketing, API Integration, UI/UX, and
            Custom Software.
          </span>{" "}
          Let us build your digital future today!
        </h2>
        <div className="flex gap-24 text-white">
          <button className={`${heroBtnStyle}`}>
            <span>Explore our solutions</span>{" "}
            <Telescope color="#fff" size={20} strokeWidth={2} />
          </button>
          <button className={`${heroBtnStyle}`}>
            <span>Why go or grow online ?</span>
            <ArrowRight color="#fff" size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /**
   * <style>svg#freepik_stories-public-talk:not(.animated) .animable {opacity: 0;}svg#freepik_stories-public-talk.animated #freepik--background-simple--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideRight;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Plant--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideRight;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Stage--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) fadeIn;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Bricks--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) zoomOut;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Speech_Bubble--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) lightSpeedRight;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Board--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) lightSpeedLeft;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Podium--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideUp;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Character_6--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideUp;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Character_5--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideRight;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Character_4--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) lightSpeedLeft;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Character_3--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideDown;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Character_2--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) zoomIn;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Character_1--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideLeft;animation-delay: 0s;}svg#freepik_stories-public-talk.animated #freepik--Line--inject-24 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) zoomOut;animation-delay: 0s;}            @keyframes slideRight {                0% {                    opacity: 0;                    transform: translateX(30px);                }                100% {                    opacity: 1;                    transform: translateX(0);                }            }                    @keyframes fadeIn {                0% {                    opacity: 0;                }                100% {                    opacity: 1;                }            }                    @keyframes zoomOut {                0% {                    opacity: 0;                    transform: scale(1.5);                }                100% {                    opacity: 1;                    transform: scale(1);                }            }                    @keyframes lightSpeedRight {              from {                transform: translate3d(50%, 0, 0) skewX(-20deg);                opacity: 0;              }              60% {                transform: skewX(10deg);                opacity: 1;              }              80% {                transform: skewX(-2deg);              }              to {                opacity: 1;                transform: translate3d(0, 0, 0);              }            }                    @keyframes lightSpeedLeft {              from {                transform: translate3d(-50%, 0, 0) skewX(20deg);                opacity: 0;              }              60% {                transform: skewX(-10deg);                opacity: 1;              }              80% {                transform: skewX(2deg);              }              to {                opacity: 1;                transform: translate3d(0, 0, 0);              }            }                    @keyframes slideUp {                0% {                    opacity: 0;                    transform: translateY(30px);                }                100% {                    opacity: 1;                    transform: inherit;                }            }                    @keyframes slideDown {                0% {                    opacity: 0;                    transform: translateY(-30px);                }                100% {                    opacity: 1;                    transform: translateY(0);                }            }                    @keyframes zoomIn {                0% {                    opacity: 0;                    transform: scale(0.5);                }                100% {                    opacity: 1;                    transform: scale(1);                }            }                    @keyframes slideLeft {                0% {                    opacity: 0;                    transform: translateX(-30px);                }                100% {                    opacity: 1;                    transform: translateX(0);                }            }        </style>
   *Attribution - <a href="https://storyset.com/people">People illustrations by Storyset</a>
   */
}
