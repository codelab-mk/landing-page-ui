import { AboutCodelab } from "@/components/About/About";
import { Blog1 } from "@/components/Blog/Blog";
import { CallToAction1 } from "@/components/CallToAction/CallToAction";
import { Category1 } from "@/components/Category/Category";
import Contact from "@/components/Contact/Contact";
import { Features1 } from "@/components/Features/Features";
import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageName="About Us" />
      <AboutCodelab />
      <Contact />
      {/* <CallToAction1 />
      <Features1 /> */}
    </CodeLabLayout>
  );
};
export default page;
