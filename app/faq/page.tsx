import { CallToAction1 } from "@/components/CallToAction/CallToAction";
import { Contact2 } from "@/components/Contact/Contact";
import { Faq2 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";

export const metadata = {
  title: "Најчести Прашања | CodeLab",
  description: "Се што треба да знаете за курсевите по програмирање за деца.",
  keywords: ["прашања за курсеви", "faq програмирање", "деца програмирање информација"],
};

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
