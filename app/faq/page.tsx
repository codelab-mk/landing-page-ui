import { CallToAction1 } from "@/components/CallToAction/CallToAction";
import { Contact2 } from "@/components/Contact/Contact";
import { Faq2 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";

const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageName="ЧПП" pageTitle="Често Поставувани Прашања" />
      <Faq2 />
      <Contact2 />
      <CallToAction1 />
    </CodeLabLayout>
  );
};
export default page;
