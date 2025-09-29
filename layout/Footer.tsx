"use client";

import { CallToAction1 } from "@/components/CallToAction/CallToAction";
import { LanguageSwitcher } from "@/components/LanguageSwithcer";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = ({ footer }: { footer: number }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;

    default:
      return <Footer1 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="ed-footer section-bg-color-1 position-relative">
      <FooterContent />
    </footer>
  );
};

const Footer2 = () => {
  return (
    <div className="footer-bg position-relative">
      <div className="footer-bg__img">
        <Image width={1905} height={1032} sizes="100vw" style={{ width: "100%", height: "100%", objectFit: "cover" }} src="/assets/images/footer/footer-2/footer-bg.png" alt="footer-bg-img" />
      </div>
      {/* Start Call Action Area */}
      <CallToAction1 />
      {/* End Call Action Area */}
      {/* Start Footer Area */}
      <footer className="ed-footer position-relative">
        <FooterContent />
      </footer>
      {/* End Footer Area  */}
    </div>
  );
};

const FooterContent = () => {
  const { t } = useTranslation();

  const contact = [
    {
      icon: "/assets/images/icons/icon-phone-blue.svg",
      title: t("footer.contact"),
      phone: "+389 ‭72 278 786‬",
      link: "tel:+389721278786",
    },
    {
      icon: "/assets/images/icons/icon-envelope-blue.svg",
      title: t("footer.sendMessage"),
      email: "contact@codelab.com.mk",
      link: "mailto:contact@codelab.com.mk",
    },
    {
      icon: "/assets/images/icons/icon-location-blue.svg",
      title: t("footer.ourLocation"),
      address: "16та Македонска Бригада 2, Скопје",
      link: "#",
    },
  ];

  return (
    <Fragment>
      {/* Footer Top */}
      <div className="ed-footer__top position-relative">
        <div className="ed-footer__shapes">
          <Image width={95} height={154} className="ed-footer__shape-1" src="/assets/images/footer/footer-1/shape-1.svg" alt="shape-1" />
          <Image width={101} height={92} className="ed-footer__shape-2 rotate-ani" src="/assets/images/footer/footer-1/shape-2.svg" alt="shape-2" />
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
                <p className="ed-footer__about-text">{t("footer.aboutText")}</p>
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
                  <li style={{ background: "transparent" }}>
                    <LanguageSwitcher />
                  </li>
                </ul>
              </div>
            </div>

            {/* Links */}
            <div className="col-lg-2 col-md-6 col-12">
              <div className="ed-footer__widget">
                <h4 className="ed-footer__widget-title">{t("footer.linksTitle")}</h4>
                <ul className="ed-footer__widget-links">
                  <li>
                    <Link href="/about-1">{t("footer.aboutUs")}</Link>
                  </li>
                  <li>
                    <Link href="/course-1">{t("footer.ourCourses")}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{t("footer.contactUs")}</Link>
                  </li>
                  <li>
                    <Link href="/blog">{t("footer.ourNews")}</Link>
                  </li>
                  <li>
                    <Link href="/faq">{t("footer.faq")}</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="ed-footer__widget contact-widget">
                <h4 className="ed-footer__widget-title">{t("footer.contactTitle")}</h4>
                {contact.map((item, index) => (
                  <div className="ed-footer__contact" key={index}>
                    <div className="ed-footer__contact-icon">
                      <Image width={25} height={25} src={item.icon} alt={item.title} />
                    </div>
                    <div className="ed-footer__contact-info">
                      <span>{item.title}</span>
                      <a href={item.link}>{item.phone || item.email || item.address}</a>
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
