"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Contact.module.css";
import Link from "next/link";

const Contact = () => {
  return (
    <section className={`${styles["ed-contact"]}  position-relative pb-0`}>
      <div className={styles["ed-contact__bg"]}>
        <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/codelab/images/contact22.svg" alt="контакт-позадина" />
      </div>
    </section>
  );
};

export default Contact;

export const Contact2 = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      message: String(formData.get("message")),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(json?.error || "Испраќањето беше неуспешно.");
      } else {
        setSuccess(true);
        form.reset();
      }
    } catch (err) {
      setError("Нешто тргна наопаку. Обидете се повторно.");
    }

    setLoading(false);
  }

  return (
    <section className={`${styles.edContact} ${styles["edContactStyle2"]} section-gap pt-0 position-relative`} style={{ paddingBottom: "100px" }}>
      <div className="container ed-container">
        <div className="row">
          <div className="col-12">
            <div className={styles.edContactStyle2Inner}>
              {/* Contact Image */}
              <div className={styles.edContactStyle2Img}>
                <Image width={500} height={620} sizes="100vw" style={{ width: "620px", height: "620px" }} src="/assets/codelab/images/contact2.svg" alt="контакт-слика" />
              </div>

              {/* Contact Form */}
              <div className={styles.edContactStyle2Form}>
                <div className={styles.edContactFormHead}>
                  <span className={styles.edContactStyle2FormSmTitle}>КОНТАКТИРАЈТЕ НЕ</span>
                  <h3 className={`${styles.edContactFormBigTitle} ed-split-text right`}>
                    Имате прашања? Контактирајте <br /> не денес
                  </h3>
                </div>

                <form onSubmit={onSubmit} className={styles.edContactFormMain}>
                  <div className={styles.formGroup}>
                    <input type="text" id="name" name="name" placeholder="Целосно име" required />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="email" id="email" name="email" placeholder="Внесете ја вашата е-пошта" required />
                  </div>
                  <div className={styles.formGroup}>
                    <textarea id="message" name="message" placeholder="Како можеме да ви помогнеме? Слободно контактирајте не!" required />
                  </div>

                  {/* ✅ Privacy checkbox stays UI only — backend may enforce later */}
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <input className="form-check-input" type="checkbox" id="flexCheckDefault" required />
                      Се согласувам со{" "}
                      <Link href="/policy" className="text-primary" target="_blank" rel="noopener noreferrer">
                        Политиката за приватност
                      </Link>
                      .
                    </label>
                  </div>

                  <div className={styles.edContactFormBtn}>
                    <button type="submit" disabled={loading} className="ed-btn">
                      {loading ? "Испраќам..." : "Испрати порака"}
                      <i className="fi fi-rr-arrow-small-right" />
                    </button>
                  </div>

                  {/* ✅ Feedback messages */}
                  {success && <p className="text-success mt-2">✅ Вашата порака беше успешно испратена!</p>}
                  {error && <p className="text-danger mt-2">❌ {error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
