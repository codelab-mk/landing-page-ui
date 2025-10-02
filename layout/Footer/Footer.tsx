import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Footer = () => {
  return <Footer1 />;
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="ed-footer section-bg-color-1 position-relative">
      <FooterContent />
    </footer>
  );
};

const FooterContent = () => {
  const contact = [
    {
      icon: "/assets/images/icons/icon-phone-blue.svg",
      title: "Телефон",
      phone: ["+389 ‭72 278 786‬", "+389 ‭78 298 116‬"],
      link: "tel:+389721278786",
    },
    {
      icon: "/assets/images/icons/icon-envelope-blue.svg",
      title: "Испрати Порака",
      email: "contact@codelab.com.mk",
      link: "mailto:contact@codelab.com.mk",
    },
    {
      icon: "/assets/images/icons/icon-location-blue.svg",
      title: "Локација",
      address: "16-та Македонска Бригада 2/2, Скопје",
      link: "https://maps.app.goo.gl/5mmaySuGb6DB12Z79",
    },
  ];

  return (
    <Fragment>
      {/* Footer Top */}
      <div className="ed-footer__top position-relative">
        <div className="ed-footer__shapes">
          <Image width={95} height={154} className="ed-footer__shape-1" src="/assets/images/footer/footer-1/shape-1.svg" alt="shape-1" />
          <Image width={119} height={121} className="ed-footer__shape-3" src="/assets/images/footer/footer-1/shape-3.svg" alt="shape-3" />
        </div>
        <div className="container ed-container">
          <div className="row g-0">
            {/* About Section */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="ed-footer__widget ed-footer__about">
                <Link href="/" className="ed-footer__logo">
                  <Image width={250} height={100} src="/assets/codelab/logo/zolto.svg" alt="footer-logo" />
                </Link>
                <p className="ed-footer__about-text">CodeLab ги подготвува младите со дигитални вештини за иднината.</p>
                <ul className="ed-footer__about-social">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61555618741877" target="_blank">
                      <Image width={25} height={25} src="/assets/images/icons/icon-dark-facebook.svg" alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/codelab_mk/" target="_blank">
                      <Image width={25} height={25} src="/assets/images/icons/icon-dark-instagram.svg" alt="instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6 col-12">
              <div className="ed-footer__widget">
                <h4 className="ed-footer__widget-title">Линкови</h4>
                <ul className="ed-footer__widget-links">
                  <li>
                    <Link href="/about">За Нас</Link>
                  </li>
                  <li>
                    <Link href="/courses">Курсеви</Link>
                  </li>
                  <li>
                    <Link href="/contact">Контакт</Link>
                  </li>
                  <li>
                    <Link href="/faq">Прашања</Link>
                  </li>
                  <li>
                    <Link href="/policy">Политика на приватност</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="ed-footer__widget contact-widget">
                <h4 className="ed-footer__widget-title">Контакт</h4>
                {contact.map((item, index) => (
                  <div className="ed-footer__contact" key={index}>
                    <div className="ed-footer__contact-icon">
                      <Image width={25} height={25} src={item.icon} alt={item.title} />
                    </div>
                    <div className="ed-footer__contact-info">
                      <span>{item.title}</span>
                      {item?.phone?.length && item?.phone?.length > 0 ? (
                        item?.phone?.map((phone, index) => (
                          <a key={index} href={`tel:${phone}`} style={{ display: "block", paddingBottom: 5 }}>
                            {phone}
                          </a>
                        ))
                      ) : item.email ? (
                        <a href={`mailto:${item.email}`}>{item.email}</a>
                      ) : item.address ? (
                        <a href={item.link}>{item.address}</a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
