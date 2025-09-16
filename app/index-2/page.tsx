import { About2 } from "@/components/About";
import { Blog1 } from "@/components/Blog";
import { Category1 } from "@/components/Category";
import { Course2 } from "@/components/Course";
import { Faq1 } from "@/components/Faq";
import { Funfact2 } from "@/components/Funfact";
import { Hero2 } from "@/components/Hero";
import { Partner1 } from "@/components/Partner";
import { Team1 } from "@/components/Team";
import { Testimonial2 } from "@/components/Testimonial";
import VideoSection1 from "@/components/VideoSection";
import { WhyChooseArea2 } from "@/components/WhyChooseArea";
import EdunaLayout from "@/layout/EdunaLayout";
import Image from "next/image";
const page = () => {
  return (
    <EdunaLayout header={2} footer={2}>
      <Hero2 />
      <Partner1 />
      <div className="section-bg background-image section-bg-5">
        {/* Start Category Area */}
        <Category1 pt="" titleCenter={true} findCourses={false} />
        {/* End Category Area */}
        {/* Start About Area */}
        <About2 />
        {/* End About Area */}
      </div>
      <Course2 />
      <div className="section-bg position-relative">
        <div className="section-bg__img">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/images/section-bg-6.png"
            alt="bg-img"
          />
        </div>
        {/* Start Video Area */}
        <VideoSection1 />
        {/* End Video Area */}
        <WhyChooseArea2 />
        <Funfact2 />
      </div>
      <Team1 />
      <Testimonial2 />
      <div className="section-bg position-relative">
        <div className="section-bg__img style-2">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/images/section-bg-6.png"
            alt="bg-img"
          />
        </div>
        <Faq1 />
        <Blog1 pt="pt-0" />
      </div>
    </EdunaLayout>
  );
};
export default page;
