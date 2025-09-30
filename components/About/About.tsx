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

export const AboutCodelab = () => {
  const features: string[] = ["Практични проекти и работа преку примери", "Интерактивни методи кои поттикнуваат креативност", "Наставници инженери и педагози со искуство", "Развој на логичко размислување, тимска работа и вештини"];

  return (
    <section className={`${styles["ed-about"]} section-gap position-relative`}>
      <div className="container ed-container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12">
            <div className={styles["ed-about__content"]}>
              {/* Наслов и воведен текст */}
              <div className="ed-section-head text-center mb-4">
                <h3 className="ed-section-head__title ed-split-text">За CodeLab</h3>
                <p className="ed-section-head__text">CodeLab е основано во 2024 година со јасна визија - Да ја приближи информатиката на децата преку учење кое инспирира. Нашата цел е секое дете да ја развие љубовта кон технологијата, да размислува креативно и да стане ресурс за иднината.</p>
              </div>

              {/* Поделба на секции со наслови */}
              <div className={`${styles["about-section"]} mb-4`}>
                <h4 className={styles["about-subtitle"]}>Кои сме ние</h4>
                <p>Тим од инженери, педагози и креативци, посветени да создадеме образовна средина каде што секое дете може да експериментира, учи преку игра и практични задачи, и расте на свој начин.</p>
              </div>

              <div className={`mb-4`}>
                <h4>Нашиот пристап</h4>
                <ul className={styles["ed-about__features-list"]}>
                  {features.map((feature, index) => (
                    <li key={index}>
                      {/* можеш да ставиш икона тука ако сакаш */}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4>Визија и мисија</h4>
                <p>
                  Нашата мисија е да ги поттикнеме младите да создаваат, не само да користат технологии да станат решавачи на проблеми, тимски играчи и автори на идеи. Визијата ни е CodeLab да биде препознатливо место каде креативноста и технологијата се спојуваат, и каде секое дете ја врши својата
                  дигитална приказна.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
