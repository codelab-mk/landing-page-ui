import { About1 } from "@/components/About";
import { Blog1 } from "@/components/Blog";
import { CallToAction1 } from "@/components/CallToAction";
import { Category1 } from "@/components/Category";
import Course1 from "@/components/Course";
import { Features1 } from "@/components/Features";
import { Funfact1 } from "@/components/Funfact";
import { Hero1 } from "@/components/Hero";
import { Partner1 } from "@/components/Partner";
import { Testimonial1 } from "@/components/Testimonial";
import { WhyChooseArea1 } from "@/components/WhyChooseArea";
import EdunaLayout from "@/layout/EdunaLayout";
const page = () => {
  return (
    <EdunaLayout>
      <Hero1 />
      <div className="section-bg background-image section-bg-1">
        <About1 />
        <Category1 />
      </div>
      <Features1 />
      <Course1 />
      <WhyChooseArea1 />
      <Funfact1 />
      <Partner1 />
      <Testimonial1 />
      <div className="section-bg background-image section-bg-3">
        <Blog1 />
        <CallToAction1 />
      </div>
    </EdunaLayout>
  );
};
export default page;
