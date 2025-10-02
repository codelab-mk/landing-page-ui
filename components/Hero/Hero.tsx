"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export const Hero1 = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`${styles["section-bg"]} ${styles["hero-bg"]}`}>
      <section className={styles["ed-hero"]}>
        <div className={`container ${styles["ed-container-expand"]}`}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className={styles["ed-hero__content"]}>
                <h1
                  className={`${styles["ed-hero__content-title"]} ed-split-text left`}
                  dangerouslySetInnerHTML={{
                    __html: "Креирај го својот свет со најмоќниот јазик - <span>кодот</span> !",
                  }}
                />
                <p className={styles["ed-hero__content-text"]}>CodeLab ги воведува младите во светот на IT и кодирањето со креативни активности и инспиративен кадар.</p>
                <div className={styles["ed-hero__btn"]}>
                  <Link href="/courses" className="ed-btn">
                    Прегледај курсеви <i className="fi fi-rr-arrow-small-right" />
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
