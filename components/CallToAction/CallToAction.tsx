import Image from "next/image";
import Link from "next/link";
import styles from "./CallToAction.module.css";

export const CallToAction1 = () => {
  return (
    <section>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <span className="ed-section-head__sm-title">Започнете веднаш</span>
        <h3 className="ed-section-head__title">Достапни онлајн курсеви и можности за учење</h3>

        <div className="ed-call-action__content-btn">
          <Link href="/courses" className="ed-btn">
            Започни со учење денес
            <i className="fi fi-rr-arrow-small-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};
