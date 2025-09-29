"use client";

import { sliderProps } from "@/utilities/sliderProps";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Category.module.css";

export const Category1 = ({ pt = "pt-0", titleCenter = false, findCourses = true }: { pt?: string; titleCenter?: boolean; findCourses?: boolean }) => {
  const { t } = useTranslation();

  const categories = t("category1.categories", { returnObjects: true }) as {
    name: string;
    courses: string;
    bg: string;
  }[];

  const getBgClass = (bg: string) => {
    switch (bg) {
      case "bg-1":
        return styles.iconBg1;
      case "bg-2":
        return styles.iconBg2;
      case "bg-3":
        return styles.iconBg3;
      case "bg-4":
        return styles.iconBg4;
      case "bg-5":
        return styles.iconBg5;
      case "bg-6":
        return styles.iconBg6;
      case "bg-7":
        return styles.iconBg7;
      case "bg-8":
        return styles.iconBg8;
      default:
        return "";
    }
  };

  return (
    <section className={`ed-category section-gap ${pt}`} style={{ marginTop: 50 }}>
      <div className="container ed-container">
        <div className="row">
          <div className="col-12">
            <div className={`ed-section-head ${titleCenter ? "text-center" : "text-left"} ${findCourses ? "d-flex-between" : ""}`}>
              <div className="ed-section-head__info">
                <span className="ed-section-head__sm-title">{t("category1.smallTitle")}</span>
                <h3 className="ed-section-head__title m-0 ed-split-text">{t("category1.title")}</h3>
              </div>
              {findCourses && (
                <div className="ed-section-head__btn">
                  <Link href="/courses" className="ed-btn">
                    {t("category1.button")}
                    <i className="fi fi-rr-arrow-small-right" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className={styles.wrapperGrid}>
              {categories.map((category, index) => (
                <Link href="/courses" key={index} className={`${styles.card} wow fadeInUp`} data-wow-duration="1s">
                  <div className={`${styles.icon} ${getBgClass(category.bg)}`}>
                    <Image width={30} height={30} sizes="100vw" className={styles.iconImg} style={{ width: "30px", height: "30px" }} src={`/assets/images/category/category-1/${index + 1}.svg`} alt={category.name} />
                  </div>
                  <div className={styles.info}>
                    <h4>{category.name}</h4>
                    <p>{category.courses}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
