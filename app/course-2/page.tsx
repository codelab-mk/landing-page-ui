import { Course7 } from "@/components/Course";
import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
const page = () => {
  return (
    <CodeLabLayout footer={2}>
      <PageBanner pageTitle="Our Courses 02" pageName="Our Courses 02" />
      <Course7 />
    </CodeLabLayout>
  );
};
export default page;
