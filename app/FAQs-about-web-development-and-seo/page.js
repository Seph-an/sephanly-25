import Hero from "@components/Faqs/Hero";
import FAQs from "@components/Faqs/Faq";
export default function Questions() {
  const heroBtnStyle =
    "mt-12 bg-primary text-tertiary rounded-md shadow-lg py-5 px-5 text-xl w-[300px] font-medium flex justify-center items-center gap-3";
  return (
    <div className="w-screen ">
      <Hero />
      <FAQs quotationBtnStyle={heroBtnStyle} />
    </div>
  );
}
