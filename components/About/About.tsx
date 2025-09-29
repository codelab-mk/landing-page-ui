"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

export const About1 = () => {
  const { t } = useTranslation();
  const features: string[] = t("about1.features", { returnObjects: true }) as string[];

  return (
    <section className={`${styles["ed-about"]} section-gap position-relative`}>
      <div className="container ed-container">
        <div className="row align-items-center">
          {/* Left Column - Images */}
          <div className="col-lg-6 col-12">
            <div className={styles["ed-about__images"]}>
              <div className={styles["ed-about__main-img"]}>
                <Image width={482} height={486} sizes="100vw" style={{ width: "482px", height: "486px" }} src="/assets/codelab/images/creativity1.svg" alt="about-img" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6 col-12 order-class">
            <div className={styles["ed-about__content"]}>
              <div className="ed-section-head">
                <h3 className="ed-section-head__title ed-split-text left">{t("about1.title")}</h3>
                <p className="ed-section-head__text">{t("about1.subtitle")}</p>
              </div>

              <div className={styles["ed-about__feature"]}>
                <ul className={styles["ed-about__features-list"]}>
                  {features.map((feature, index) => (
                    <li key={index}>
                      <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
