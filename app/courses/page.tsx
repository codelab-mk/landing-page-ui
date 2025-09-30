import { Course3 } from "@/components/Course";
import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageName="Курсеви" pageTitle="Курсеви" />
      <Course3 />
    </CodeLabLayout>
  );
};
export default page;
