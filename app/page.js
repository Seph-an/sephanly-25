import Hero from "@components/Home/Hero/Hero";
import Why from "@components/Home/Why/Why";
import Services from "@components/Home/Services/Services";
import Testimonials from "@components/Home/Testimonials/Testimonials";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Why />
      <Services />
      <Testimonials />
    </div>
  );
}
