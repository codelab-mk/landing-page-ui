"use client";

import Image from "next/image";
import Counter from "../Counter";
import styles from "./WhyChooseArea.module.css";

export const WhyChooseArea1 = () => {
  const whyChoose = [
    {
      id: 1,
      name: "Практични Вежби",
      icon: "/assets/images/why-choose/why-choose-1/icon-1.svg",
      bg: "bg-2",
      description: "Запознајте се со концептите преку практични вежби и проекти што ги имплементираат наученото.",
    },
    {
      id: 2,
      name: "Интерактивни Сесии",
      icon: "/assets/images/why-choose/why-choose-1/icon-2.svg",
      bg: "bg-3",
      description: "Интеракција со инструкторите и можност за поставување на прашања.",
    },
    {
      id: 3,
      name: "Сертификат за Успешно Завршување",
      icon: "/assets/images/why-choose/why-choose-1/icon-3.svg",
      bg: "bg-4",
      description: "По завршувањето на курсот, добивате сертификат што го потврдува вашето ново стекнато знаење.",
    },
  ];

  const counter = {
    number: "69K+",
    text: "Задоволни студенти",
  };

  return (
    <section className={`${styles.edWhyChoose} section-gap background-image`}>
      <div className="container ed-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className={styles.edWChooseContent}>
              <div className="ed-section-head">
                <span className="ed-section-head__sm-title">Зошто да го изберете нашиот курс?</span>
                <h3 className="ed-section-head__title ed-split-text left">Во CodeLab, веруваме дека запознавањето на идната генерација со технолошки вештини е од особена важност за нивниот иден успех.</h3>
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
