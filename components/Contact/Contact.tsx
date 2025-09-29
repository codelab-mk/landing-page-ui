"use client";

import Image from "next/image";
import styles from "./Contact.module.css"; // CSS module import

const Contact = () => {
  return (
    <section className={`${styles["ed-contact"]}  position-relative pb-0`}>
      <div className={styles["ed-contact__bg"]}>
        <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/images/contact/contact-bg.png" alt="contact-bg" />
      </div>
    </section>
  );
};

export default Contact;

export const Contact2 = () => {
  return (
    <section className={`${styles.edContact} ${styles["edContactStyle2"]} section-gap pt-0 position-relative`} style={{ paddingBottom: "100px" }}>
      <div className="container ed-container">
        <div className="row">
          <div className="col-12">
            <div className={styles.edContactStyle2Inner}>
              {/* Contact Image */}
              <div className={styles.edContactStyle2Img}>
                <Image width={620} height={620} sizes="100vw" style={{ width: "620px", height: "620px" }} src="/assets/codelab/images/contact2.svg" alt="contact-img" />
              </div>
              {/* Contact Form */}
              <div className={styles.edContactStyle2Form}>
                <div className={styles.edContactFormHead}>
                  <span className={styles.edContactStyle2FormSmTitle}>CONTACT US</span>
                  <h3 className={`${styles.edContactFormBigTitle} ed-split-text right`}>
                    Have questions? Contact <br /> with us today
                  </h3>
                </div>
                <form action="#" method="post" className={styles.edContactFormMain}>
                  <div className={styles.formGroup}>
                    <input type="text" id="name" name="name" placeholder="Full name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <textarea id="message" name="message" placeholder="How can we help you? Feel free to get in touch!" required defaultValue={""} />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />I agree to the&nbsp;Privacy Policy.
                    </label>
                  </div>
                  <div className={styles.edContactFormBtn}>
                    <button type="submit" className="ed-btn">
                      Send Message
                      <i className="fi fi-rr-arrow-small-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
