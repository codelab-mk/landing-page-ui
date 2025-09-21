"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export const Features1 = () => {
  const { t } = useTranslation();

  const features: {
    id: number;
    name: string;
    bg: string;
    icon: string;
    description: string;
  }[] = [
    {
      id: 1,
      name: t("features1.items.0.name"),
      bg: "bg-1",
      icon: "/assets/images/features/features-1/1.svg",
      description: t("features1.items.0.description"),
    },
    {
      id: 2,
      name: t("features1.items.1.name"),
      bg: "bg-2",
      icon: "/assets/images/features/features-1/2.svg",
      description: t("features1.items.1.description"),
    },
    {
      id: 3,
      name: t("features1.items.2.name"),
      bg: "bg-3",
      icon: "/assets/images/features/features-1/3.svg",
      description: t("features1.items.2.description"),
    },
  ];

  return (
    <section className="ed-features position-relative">
      <div className="ed-category__shapes">
        <Image width={49} height={80} className="ed-category__shape-1 updown-ani" src="/assets/images/features/features-1/shape-1.svg" alt="shape-1" />
        <Image width={45} height={37} className="ed-category__shape-2 rotate-ani" src="/assets/images/features/features-1/shape-2.svg" alt="shape-2" />
      </div>
      <div className="container ed-container">
        <div className="row">
          {features.map((feature) => (
            <div className="col-lg-4 col-md-6 col-12" key={feature.id}>
              <div className="ed-features__card wow fadeInUp" data-wow-duration="1s">
                <div className={`ed-features__icon icon-bg ${feature.bg}`}>
                  <Image width={30} height={30} src={feature.icon} alt="icon" />
                </div>
                <div className="ed-features__info">
                  <h4>{feature.name}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
