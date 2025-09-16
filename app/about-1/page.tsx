import { About1 } from "@/components/About";
import { Blog1 } from "@/components/Blog";
import { CallToAction1 } from "@/components/CallToAction";
import { Category2 } from "@/components/Category";
import Contact from "@/components/Contact";
import { Course4 } from "@/components/Course";
import { Features1 } from "@/components/Features";
import PageBanner from "@/components/PageBanner";
import { Partner2 } from "@/components/Partner";
import EdunaLayout from "@/layout/EdunaLayout";
const page = () => {
  return (
    <EdunaLayout>
      <PageBanner pageName="About Us" />
      <About1 />
      <Features1 />
      <Category2 />
      <Partner2 />
      <Course4 />
      <Contact />
      <Blog1 />
      <CallToAction1 />
    </EdunaLayout>
  );
};
export default page;
