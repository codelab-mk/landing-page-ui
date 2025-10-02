import { AboutCodelab } from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import PageBanner from "@/components/PageBanner/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";

const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageName="За Нас" />
      <AboutCodelab />
      <Contact />
    </CodeLabLayout>
  );
};
export default page;
