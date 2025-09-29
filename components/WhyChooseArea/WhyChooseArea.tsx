"use client";

import Image from "next/image";
import Counter from "../Counter";
import { useTranslation } from "react-i18next";
import styles from "./WhyChooseArea.module.css";

export const WhyChooseArea1 = () => {
  const { t } = useTranslation();

  const whyChoose = t("whyChoose.items", { returnObjects: true }) as {
    id: number;
    name: string;
    icon: string;
    bg: string;
    description: string;
  }[];

  const counter = t("whyChoose.counter", { returnObjects: true }) as {
    number: string;
    text: string;
  };

  return (
    <section className={`${styles.edWhyChoose} section-gap background-image section-bg-2`}>
      <div className="container ed-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className={styles.edWChooseContent}>
              <div className="ed-section-head">
                <span className="ed-section-head__sm-title">{t("whyChoose.title")}</span>
                <h3 className="ed-section-head__title ed-split-text left">{t("whyChoose.subtitle")}</h3>
              </div>
              <div className={styles.edWChooseInfo}>
                {whyChoose.map((why) => (
                  <div className={styles.edWChooseInfoSingle} key={why.id}>
                    <div className={styles.edWChooseInfoHead}>
                      <div className={`${styles.edWChooseInfoIcon} ${styles[why.bg]}`}>
                        <Image width={25} height={25} src={why.icon} alt="icon" />
                      </div>
                      <h5 className={styles.edWChooseInfoHeadH5}>{why.name}</h5>
                    </div>
                    <div className={styles.edWChooseInfoBottom}>
                      <p>{why.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className={styles.edWChooseImagesStyle3}>
              <div className={styles.edWChooseMainImg}>
                <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/codelab/images/whyChooseUs1.svg" alt="why-choose-img" />
              </div>
              <div className={styles.counterCard}>
                <div className={styles.counterCardIcon}>
                  <i className="fi fi-rr-graduation-cap" />
                </div>
                <div className={styles.counterCardInfo}>
                  <h4>
                    <span>
                      <Counter end={50} />
                    </span>
                    +
                  </h4>
                  <p>{counter.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
