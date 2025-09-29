"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css"; // import module CSS

export const Hero1 = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`${styles["section-bg"]} ${styles["hero-bg"]} ${styles["background-image"]}`} style={{ backgroundImage: 'url("/assets/images/hero/home-1/hero-bg.png")' }}>
      <section className={styles["ed-hero"]}>
        <div className={`container ${styles["ed-container-expand"]}`}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className={styles["ed-hero__content"]}>
                <h1 className={`${styles["ed-hero__content-title"]} ed-split-text left`} dangerouslySetInnerHTML={{ __html: t("hero.title") }} />
                <p className={styles["ed-hero__content-text"]}>{t("hero.subtitle")}</p>
                <div className={styles["ed-hero__btn"]}>
                  <Link href="/course-1" className="ed-btn">
                    {t("hero.btnText")}
                    <i className="fi fi-rr-arrow-small-right" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className={styles["ed-hero__image"]}>
                <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto", objectFit: "cover" }} src="/assets/codelab/images/home1.svg" alt="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
