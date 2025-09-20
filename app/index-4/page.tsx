import { Blog1 } from "@/components/Blog";
import { Category2 } from "@/components/Category";
import { Course4, Course6 } from "@/components/Course";
import { Faq1 } from "@/components/Faq";
import { Features1 } from "@/components/Features";
import { Partner2 } from "@/components/Partner";
import { Testimonial1 } from "@/components/Testimonial";
import { VideoSection2 } from "@/components/VideoSection";
import { WhyChooseArea3 } from "@/components/WhyChooseArea";
import CodeLabLayout from "@/layout/CodeLabLayout";
import Link from "next/link";

const page = () => {
  return (
    <CodeLabLayout header={4} footer={2}>
      <section className="ed-hero ed-hero--style4 mt-0">
        {/* Hero Image One  */}
        <div className="ed-hero__image--style-4 left-img">
          <img src="assets/images/hero/home-4/hero-img-1.png" alt="hero-img-1" />
        </div>
        {/* Hero Elements Move  */}
        <div className="ed-hero__elements--style-2">
          <img className="shape-1 element-move" src="assets/images/hero/home-4/elements-move/shape-1.svg" alt="shape-1" />
          <img className="shape-2 element-move" src="assets/images/hero/home-4/elements-move/shape-2.svg" alt="shape-2" />
          <img className="shape-3 element-move" src="assets/images/hero/home-4/elements-move/shape-3.svg" alt="shape-3" />
          <img className="shape-4 element-move" src="assets/images/hero/home-4/elements-move/shape-4.svg" alt="shape-4" />
        </div>
        <div className="ed-hero__fixed-shape">
          <img className="shape-1" src="assets/images/hero/home-4/shape-1.svg" alt="shape-1" />
          <img className="shape-2" src="assets/images/hero/home-4/vector-1.svg" alt="vector-1" />
          <img className="shape-3" src="assets/images/hero/home-4/shape-3.svg" alt="shape-3" />
        </div>
        <div className="container ed-container-expand">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              {/* Hero Content */}
              <div className="ed-hero__content text-center">
                <span className="ed-hero__content-sm-title">WELCOME TO CodeLab</span>
                <h1 className="ed-hero__content-title ed-split-text left">
                  Best Online <br />
                  Courses Platform
                </h1>
                <p className="ed-hero__content-text p-0">We Have 12K+ Online Courses &amp; 450K+ Online Registered Student.</p>
                <div className="ed-hero__btn">
                  <Link href="/course-1" className="ed-btn">
                    Find Courses
                    <i className="fi fi-rr-arrow-small-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Image Two  */}
        <div className="ed-hero__image--style-4 right-img">
          <div className="ed-hero__image-shape">
            <img className="rotate-ani" src="assets/images/hero/home-4/shape-2.svg" alt="shape-2" />
          </div>
          <div className="ed-hero__image-main">
            <img src="assets/images/hero/home-4/hero-img-2.png" alt="hero-img-2" />
          </div>
        </div>
      </section>
      <Category2 titleCenter={false} />
      <WhyChooseArea3 />
      <Features1 />
      <div className="section-bg background-image" style={{ backgroundImage: 'url("/assets/images/section-bg-10.png")' }}>
        <Course6 />
      </div>
      <VideoSection2 />
      <Partner2 containerClass="ed-partner ed-partner--style2 section-gap" />
      <Course4 />
      <Testimonial1 />
      <Faq1 />
      <Blog1 />
    </CodeLabLayout>
  );
};
export default page;
