import Hero from "@components/Services/Hero";
import Web from "@components/Services/Web";
import Seo from "@components/Services/Seo";
import Api from "@components/Services/Api";
import Digital from "@components/Services/Digital";
import Uix from "@components/Services/Uix";
import Custom from "@components/Services/Custom";
export default function Services() {
  const heroBtnStyle = true;
  return (
    <div className="">
      <Hero large={heroBtnStyle} />
      <Web large={heroBtnStyle} />
      <Seo large={heroBtnStyle} />
      <Api large={heroBtnStyle} />
      <Digital large={heroBtnStyle} />
      <Uix large={heroBtnStyle} />
      <Custom large={heroBtnStyle} />
    </div>
  );
}
