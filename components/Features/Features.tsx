"use client";

import Image from "next/image";
import styles from "./Features.module.css";

export const Features1 = () => {
  const features: {
    id: number;
    name: string;
    bg: string;
    icon: string;
    description: string;
  }[] = [
    {
      id: 1,
      name: "Поддршка за едукатори",
      bg: "bg-1",
      icon: "/assets/images/features/features-1/1.svg",
      description: "Нудиме целосна поддршка за ученици и наставници со современи ресурси.",
    },
    {
      id: 2,
      name: "Врвни инструктори",
      bg: "bg-2",
      icon: "/assets/images/features/features-1/2.svg",
      description: "Учете од искусни инструктори со реално работно искуство.",
    },
    {
      id: 3,
      name: "Интерактивни часови",
      bg: "bg-3",
      icon: "/assets/images/features/features-1/3.svg",
      description: "Часовите се динамични и практични за подобро разбирање и вклученост.",
    },
  ];

  const getBgClass = (bg: string) => {
    switch (bg) {
      case "bg-1":
        return styles.iconBg1;
      case "bg-2":
        return styles.iconBg2;
      case "bg-3":
        return styles.iconBg3;
      default:
        return "";
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.shape1}>
        <Image width={49} height={80} className="updown-ani" src="/assets/images/features/features-1/shape-1.svg" alt="shape-1" />
      </div>
      <div className={styles.shape2}>
        <Image width={45} height={37} className="rotate-ani" src="/assets/images/features/features-1/shape-2.svg" alt="shape-2" />
      </div>
      <div className="container ed-container">
        <div className="row">
          {features.map((feature) => (
            <div className="col-lg-4 col-md-6 col-12" key={feature.id}>
              <div className={`${styles.card} wow fadeInUp`} data-wow-duration="1s">
                <div className={`${styles.icon} ${getBgClass(feature.bg)}`}>
                  <Image width={30} height={30} className={styles.iconImg} src={feature.icon} alt="icon" />
                </div>
                <div className={styles.info}>
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
