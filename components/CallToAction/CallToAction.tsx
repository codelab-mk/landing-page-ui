"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./CallToAction.module.css";

export const CallToAction1 = () => {
  const { t } = useTranslation();

  return (
    <section className={`ed-call-action position-relative ${styles.wrapper}`}>
      <div className="container ed-container">
        <div className={`ed-call-action__inner position-relative ${styles.inner}`}>
          <div className="ed-call-action__shapes">
            <Image width={44} height={37} className={`ed-call-action__shape-2 ${styles.shape2}`} src="/assets/images/call-action/call-action-1/shape-2.svg" alt="shape-2" />
            <Image width={108} height={67} className={`ed-call-action__shape-3 updown-ani ${styles.shape3}`} src="/assets/images/call-action/call-action-1/shape-3.svg" alt="shape-3" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className={`ed-call-action__img ${styles.imgWrapper}`}>
                <Image width={332} height={448} src="/assets/images/call-action/call-action-1/call-action-img.png" alt="call-action-img" />
              </div>
            </div>
            <div className="col-lg-6 col-12 order-class">
              <div className={`ed-call-action__content ${styles.content}`}>
                <div className="ed-section-head">
                  <span className="ed-section-head__sm-title">{t("callToAction.smTitle")}</span>
                  <h3 className="ed-section-head__title">{t("callToAction.title")}</h3>
                  <p className="ed-section-head__text">{t("callToAction.text")}</p>
                </div>
                <div className="ed-call-action__content-btn">
                  <Link href="/course-1" className="ed-btn">
                    {t("callToAction.button")}
                    <i className="fi fi-rr-arrow-small-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
