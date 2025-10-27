import Link from "next/link";
import styles from "./PageBanner.module.css";

const PageBanner = ({ pageTitle, pageName = "" }: { pageTitle?: string; pageName?: string }) => {
  return (
    <div>
      {/* Start Breadcrumbs Area */}
      <section className={`${styles.breadcrumbs}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className={styles.content}>
                <h3 className={styles.title}>{pageTitle || pageName}</h3>
                <ul className={styles.menu}>
                  <li className={styles.activeLink}>
                    <Link href="/">Почетна</Link>
                  </li>
                  <li>/</li>
                  <li>{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumbs Area */}
    </div>
  );
};

export default PageBanner;
