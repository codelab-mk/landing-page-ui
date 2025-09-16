import { CallToAction1 } from "@/components/CallToAction";
import { Course3 } from "@/components/Course";
import PageBanner from "@/components/PageBanner";
import EdunaLayout from "@/layout/EdunaLayout";
const page = () => {
  return (
    <EdunaLayout>
      <PageBanner />
      <Course3 />
      <CallToAction1 />
    </EdunaLayout>
  );
};
export default page;
