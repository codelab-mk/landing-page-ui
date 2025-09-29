import { Blog2 } from "@/components/Blog/Blog";
import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageTitle="Latest Blog & News" pageName="Latest Blog" />
      <Blog2 />
    </CodeLabLayout>
  );
};
export default page;
