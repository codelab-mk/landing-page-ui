import { Course7 } from "@/components/Course";
import PageBanner from "@/components/PageBanner";
import EdunaLayout from "@/layout/EdunaLayout";
const page = () => {
  return (
    <EdunaLayout footer={2}>
      <PageBanner pageTitle="Our Courses 02" pageName="Our Courses 02" />
      <Course7 />
    </EdunaLayout>
  );
};
export default page;
