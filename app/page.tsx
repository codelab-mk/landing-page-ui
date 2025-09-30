import { About1 } from "@/components/About/About";
import { CallToAction1 } from "@/components/CallToAction/CallToAction";
import { Category1 } from "@/components/Category/Category";
import { Features1 } from "@/components/Features/Features";
import { Hero1 } from "@/components/Hero/Hero";
import { WhyChooseArea1 } from "@/components/WhyChooseArea/WhyChooseArea";
import CodeLabLayout from "@/layout/CodeLabLayout";

export const metadata = {
  title: "Codelab - Home",
  description: "CodeLab App",
};

const page = () => {
  return (
    <CodeLabLayout>
      <Hero1 />
      <div className="section-bg background-image section-bg-1">
        <About1 />
        <Category1 />
      </div>
      <Features1 />
      <WhyChooseArea1 />
      <div className="section-bg background-image section-bg-3">
        <CallToAction1 />
      </div>
    </CodeLabLayout>
  );
};
export default page;
