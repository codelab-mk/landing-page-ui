import { Course3 } from "@/components/Course";
import PageBanner from "@/components/PageBanner/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";

export const metadata = {
  title: "Курсеви за Програмирање за Деца | CodeLab",
  description: "Пријавете го вашето дете на курсеви за програмирање во Скопје. Scratch, Robotics, Web Development и повеќе! за деца од 6 до 14 години.",
  keywords: ["курсеви за деца", "програмирање за деца", "Scratch курс Скопје"],
};

const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageName="Курсеви" pageTitle="Курсеви" />
      <Course3 />
    </CodeLabLayout>
  );
};
export default page;
