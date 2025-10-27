import { AboutCodelab } from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import PageBanner from "@/components/PageBanner/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";

export const metadata = {
  title: "За Нас | CodeLab",
  description: "CodeLab учење на технологија и програмирање за деца преку практични проекти.",
  keywords: ["технологија за деца", "едукација програмирање", "каде да учи дете програмирање", "училиште технологии скопје"],
};

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
