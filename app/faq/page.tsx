import { CallToAction1 } from "@/components/CallToAction";
import { Contact2 } from "@/components/Contact";
import { Faq2 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import EdunaLayout from "@/layout/EdunaLayout";
const page = () => {
  return (
    <EdunaLayout>
      <PageBanner pageName="FAQ Page" />
      <Faq2 />
      <Contact2 />
      <CallToAction1 />
    </EdunaLayout>
  );
};
export default page;
