"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CallToAction.module.css";

export const CallToAction1 = () => {
  return (
    <section className={`ed-call-action ${styles.wrapper}`}>
      <div>
        <div className={`ed-call-action__inner position-relative ${styles.inner}`} style={{ padding: 20 }}>
          <div className="row">
            {/* Left Image */}
            <div className="col-lg-6 col-12">
              <div className={`ed-call-action__img ${styles.imgWrapper}`}>
                <Image width={332} height={448} src="/assets/codelab/images/callToAction.svg" alt="call-action-img" />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-12 order-class">
              <div className={`ed-call-action__content ${styles.content}`}>
                <div className="ed-section-head">
                  <span className="ed-section-head__sm-title">Започнете веднаш</span>
                  <h3 className="ed-section-head__title">Достапни онлајн курсеви и можности за учење</h3>
                  <p className="ed-section-head__text">Во CodeLab нудиме практични и забавни курсеви што му овозможуваат на секое дете да учи со сопствено темпо.</p>
                </div>
                <div className="ed-call-action__content-btn">
                  <Link href="/courses" className="ed-btn">
                    Започни со учење денес
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
