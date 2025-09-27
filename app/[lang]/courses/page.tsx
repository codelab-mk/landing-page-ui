import { CallToAction1 } from "@/components/CallToAction";
import { Course3 } from "@/components/Course";
import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner />
      <Course3 />
      {/* <CallToAction1 /> */}
    </CodeLabLayout>
  );
};
export default page;
