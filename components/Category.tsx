"use client";
import { sliderProps } from "@/utilities/sliderProps";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

export const Category1 = ({ pt = "pt-0", titleCenter = false, findCourses = true }: { pt?: string; titleCenter?: boolean; findCourses?: boolean }) => {
  const { t } = useTranslation();

  const categories = t("category1.categories", { returnObjects: true }) as {
    name: string;
    courses: string;
    bg: string;
  }[];

  return (
    <section className={`ed-category section-gap ${pt}`}>
      <div className="container ed-container">
        <div className="row">
          <div className="col-12">
            <div className={`ed-section-head ${titleCenter ? "text-center" : "text-left"} ${findCourses ? "d-flex-between" : ""}`}>
              <div className="ed-section-head__info">
                <span className="ed-section-head__sm-title">{t("category1.smallTitle")}</span>
                <h3 className={`ed-section-head__title m-0 ed-split-text`}>{t("category1.title")}</h3>
              </div>
              {findCourses && (
                <div className="ed-section-head__btn">
                  <Link href="/course-1" className="ed-btn">
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
            <div className="ed-category__wrapper">
              {categories.map((category, index) => (
                <Link href="/course-1" className="ed-category__card wow fadeInUp" data-wow-duration="1s" key={index}>
                  <div className={`ed-category__icon ${category.bg}`}>
                    <Image width={30} height={30} sizes="100vw" style={{ width: "30px", height: "30px" }} src={`/assets/images/category/category-1/${index + 1}.svg`} alt={category.name} />
                  </div>
                  <div className="ed-category__info">
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
export const Category2 = ({ titleCenter = true }: { titleCenter?: boolean }) => {
  const categories: {
    id: number;
    name: string;
    courses: number;
    img: string;
    icon: string;
  }[] = [
    {
      id: 1,
      name: "Business",
      courses: 4,
      img: "/assets/images/category/category-2/img-1.png",
      icon: "/assets/images/category/category-1/1.svg",
    },
    {
      id: 2,
      name: "Marketing",
      courses: 88,
      img: "/assets/images/category/category-2/img-2.png",
      icon: "/assets/images/category/category-1/2.svg",
    },
    {
      id: 3,
      name: "Design",
      courses: 23,
      img: "/assets/images/category/category-2/img-3.png",
      icon: "/assets/images/category/category-1/3.svg",
    },
    {
      id: 4,
      name: "Finance",
      courses: 2,
      img: "/assets/images/category/category-2/img-4.png",
      icon: "/assets/images/category/category-1/4.svg",
    },
    {
      id: 5,
      name: "Lifestyle",
      courses: 29,
      img: "/assets/images/category/category-2/img-5.png",
      icon: "/assets/images/category/category-1/5.svg",
    },
    {
      id: 6,
      name: "Cyber",
      courses: 45,
      img: "/assets/images/category/category-2/img-6.jpg",
      icon: "/assets/images/category/category-1/6.svg",
    },
    {
      id: 7,
      name: "Development",
      courses: 28,
      img: "/assets/images/category/category-2/img-5.png",
      icon: "/assets/images/category/category-1/7.svg",
    },
    {
      id: 8,
      name: "Photography",
      courses: 3,
      img: "/assets/images/category/category-2/img-8.png",
      icon: "/assets/images/category/category-1/8.svg",
    },
    {
      id: 9,
      name: "Finance",
      courses: 2,
      img: "/assets/images/category/category-2/img-4.png",
      icon: "/assets/images/category/category-1/4.svg",
    },
    {
      id: 10,
      name: "Lifestyle",
      courses: 29,
      img: "/assets/images/category/category-2/img-5.png",
      icon: "/assets/images/category/category-1/5.svg",
    },
  ];
  return (
    <section className="ed-category ed-category--style2 section-gap overflow-hidden">
      <div className="container ed-container">
        <div className="row">
          <div className="col-12">
            <div className={`ed-section-head ${titleCenter ? "text-center" : "text-left"}`}>
              <span className="ed-section-head__sm-title">COURSE CATEGORIES</span>
              <h3 className="ed-section-head__title m-0 ed-split-text left">Top Categories You Want to&nbsp;Learn</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Swiper {...sliderProps.category__slider} className="swiper ed-category__slider">
            <div className="swiper-wrapper">
              {/* Single Coure Card  */}
              {categories.map((category) => (
                <SwiperSlide className="swiper-slide" key={category.id}>
                  <div className="ed-category__card ed-category__card--style2">
                    <div className="ed-category__img">
                      <Image width={271} height={232} sizes="100vw" style={{ width: "271px", height: "232px" }} src={category.img} alt="category-img" />
                    </div>
                    <Link href="/course-1" className="ed-category__content">
                      <div className="ed-category__icon">
                        <Image width={30} height={30} sizes="100vw" style={{ width: "30px", height: "30px" }} src={category.icon} alt="icon" />
                      </div>
                      <div className="ed-category__info">
                        <h4>{category.name}</h4>
                        <p>{category.courses > 9 ? category.courses : `0${category.courses}`} Courses</p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};
