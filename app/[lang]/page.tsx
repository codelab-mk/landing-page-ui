import { About1 } from "@/components/About/About";
import { Blog1 } from "@/components/Blog/Blog";
import { CallToAction1 } from "@/components/CallToAction/CallToAction";
import { Category1 } from "@/components/Category/Category";
import { Features1 } from "@/components/Features/Features";
import { Hero1 } from "@/components/Hero/Hero";
import { WhyChooseArea1 } from "@/components/WhyChooseArea/WhyChooseArea";
import CodeLabLayout from "@/layout/CodeLabLayout";

const page = () => {
  return (
    <CodeLabLayout>
      <Hero1 />
      <About1 />
      <Category1 />
      <WhyChooseArea1 />
      <CallToAction1 />
      <Features1 />
    </CodeLabLayout>
  );
};
export default page;
