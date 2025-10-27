import { CallToAction1 } from "@/components/CallToAction/CallToAction";
import PageBanner from "@/components/PageBanner/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
import Image from "next/image";

export const metadata = {
  title: "Контакт | CodeLab",
  description: "Контактирајте не за информации околу курсевите за програмирање за деца во Скопје. Тел: +389 72 278 786",
  keywords: ["курсеви за деца контакт", "програмирање скопје", "codelab контакт"],
};

const page = () => {
  const contact = [
    {
      id: 1,
      icon: "icon-white-phone.svg",
      title: "Phone",
      type: "tel",
      info: ["(+389) 72/278-786", "(+389) 78/298-116"],
      extraLink: "",
    },
    {
      id: 2,
      icon: "icon-white-message.svg",
      title: "Email",
      type: "email",
      info: ["contact@codelab.com.mk"],
      extraLink: "",
    },
    {
      id: 3,
      icon: "icon-white-map.svg",
      title: "Address",
      type: "address",
      info: ["16-та Македонска Бригада 2/2, Скопје"],
      extraLink: "https://maps.app.goo.gl/5mmaySuGb6DB12Z79",
    },
  ];
  return (
    <CodeLabLayout>
      <PageBanner pageName="Контакт" />
      <div className="ed-contact__card section-gap">
        <div className="container ed-container">
          <div className="row">
            {/* Single Card  */}
            {contact.map((item) => (
              <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                <div className="ed-contact__card-item">
                  <div className="ed-contact__card-icon">
                    <Image width={43} height={43} sizes="100vw" style={{ width: "43px", height: "43px" }} src={`/assets/images/icons/${item.icon}`} alt={item.title} />
                  </div>
                  <div className="ed-contact__card-info">
                    {item.info.map((info) => (
                      <a href={item.type === "tel" ? `tel:${info}` : item.type === "email" ? `mailto:${info}` : item.extraLink} key={info}>
                        {info}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CallToAction1 />
    </CodeLabLayout>
  );
};
export default page;
