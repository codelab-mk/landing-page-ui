import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { _config } from "@/utilities";
import Link from "next/link";
import { menuItems } from "@/constants/header";

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    _config.sticky_header();
  }, []);

  return (
    <Fragment>
      <Header1 showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
      <MobileMenu show={showMobileMenu} onHide={() => setShowMobileMenu(false)} />
    </Fragment>
  );
};

export default Header;

// -----------------------------------
// Menu Configuration
// -----------------------------------

// -----------------------------------
// Header1 Component
// -----------------------------------
const Header1 = ({ showMobileMenu, setShowMobileMenu }: { showMobileMenu: boolean; setShowMobileMenu: (show: boolean) => void }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <Fragment>
      <div className="ed-topbar">
        <div className="container ed-container-expand">
          <div className="ed-topbar__inner">
            <div className="ed-topbar__logo">
              <Link href="/">
                <Image width={300} height={100} src="/assets/codelab/logo/zolto.svg" alt="logo" />
              </Link>
            </div>
            <div className="ed-topbar__info">
              <ul className="ed-topbar__info-social">
                <Social />
              </ul>
              <button type="button" className="mobile-menu-offcanvas-toggler" onClick={() => setShowMobileMenu(true)}>
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="ed-header hide-on-mobile">
        <div className="container ed-container-expand">
          <div className="ed-header__inner">
            <div className="row align-items-center">
              <div className="col-lg-7 col-12">
                <Nav />
              </div>
              <div className="col-lg-5 col-12">
                <div className="ed-header__right">
                  <ul className="ed-header__contact">
                    <li>
                      <a href="tel:+38972278786">+389 72 278 786</a>
                    </li>
                    <li>
                      <a href="tel:+38978298116">+389 78 298 116</a>
                    </li>
                    <li>
                      <a href="mailto:contact@codelab.com.mk">contact@codelab.com.mk</a>
                    </li>
                  </ul>
                  <div className="ed-header__action">
                    <div className="ed-header__menu">
                      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#edSidebar" aria-controls="offcanvasRight" onClick={() => setToggleSidebar(true)}>
                        <Image width={25} height={25} src="/assets/images/icons/icon-grey-menu-3-line.svg" alt="menu" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar close={() => setToggleSidebar(false)} open={toggleSidebar} />
    </Fragment>
  );
};

// -----------------------------------
// Nav Component
// -----------------------------------
const Nav = () => {
  return (
    <nav className="ed-header__navigation">
      <ul className="ed-header__menu">
        {menuItems.map((item) => (
          <li key={item.key}>
            {item.subMenu ? (
              <>
                <a>
                  {item.label}
                  <i className="fi fi-ss-angle-small-down" />
                </a>
                <ul className="sub-menu">
                  {item.subMenu.map((sub) => (
                    <li key={sub.key}>
                      <Link href={sub.key}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.key}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// -----------------------------------
// MobileMenu Component
// -----------------------------------
const MobileMenu = ({ show, onHide }: { show: boolean; onHide: () => void }) => {
  const [activeMenu, setActiveMenu] = useState<string>("");

  const toggleMenu = (key: string) => setActiveMenu(activeMenu === key ? "" : key);

  return (
    <Modal className="modal mobile-menu-modal offcanvas-modal fade" show={show} onHide={onHide}>
      <div className="modal-header offcanvas-header">
        <div className="offcanvas-logo">
          <Link href="/">
            <Image width={200} height={100} src="/assets/codelab/logo/zolto.svg" alt="logo" />
          </Link>
        </div>
        <button type="button" className="btn-close" onClick={onHide}>
          <i className="fi fi-ss-cross" />
        </button>
      </div>

      <div className="mobile-menu-modal-main-body">
        <nav className="offcanvas__menu">
          <ul className="offcanvas__menu_ul">
            {menuItems.map((item) => (
              <li key={item.key} className="offcanvas__menu_li">
                {item.subMenu ? (
                  <>
                    <button className="offcanvas__menu_item" onClick={() => toggleMenu(item.key)}>
                      {item.label}
                    </button>
                    <ul className="offcanvas__sub_menu" style={{ display: activeMenu === item.key ? "block" : "none" }}>
                      {item.subMenu.map((sub) => (
                        <li key={sub.key} className="offcanvas__sub_menu_li">
                          <Link href={sub.key} className="offcanvas__sub_menu_item">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.key} className="offcanvas__menu_item">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Modal>
  );
};

// -----------------------------------
// Social Component
// -----------------------------------
const Social = () => {
  const social = [
    { id: 1, icon: "/assets/images/icons/icon-dark-facebook.svg", link: "https://www.facebook.com/profile.php?id=61555618741877" },
    { id: 2, icon: "/assets/images/icons/icon-dark-instagram.svg", link: "https://www.instagram.com/codelab_mk/" },
  ];

  return (
    <Fragment>
      {social.map((item) => (
        <li key={item.id}>
          <a href={item.link} target="_blank">
            <Image width={35} height={35} src={item.icon} alt="social-icon" />
          </a>
        </li>
      ))}
    </Fragment>
  );
};

// -----------------------------------
// Sidebar Component
// -----------------------------------
const Sidebar = ({ close, open }: { close: () => void; open: boolean }) => {
  const content = [
    { id: 1, title: "Телефон", content: "+38972278786", link: "tel:+38972278786", icon: "/assets/images/icons/icon-phone-blue.svg" },
    { id: 2, title: "Е-Пошта", content: "contact@codelab.com.mk", link: "mailto:contact@codelab.com.mk", icon: "/assets/images/icons/icon-envelope-blue.svg" },
    {
      id: 3,
      title: "Адреса",
      content: "16-та Македонска Бригада 2/2, Скопје",
      link: "https://maps.app.goo.gl/5mmaySuGb6DB12Z79",
      icon: "/assets/images/icons/icon-location-blue.svg",
    },
  ];

  const [beforeClose, setBeforeClose] = useState(false);

  const handleClose = () => {
    setBeforeClose(true);
    setTimeout(() => {
      setBeforeClose(false);
      close();
    }, 300);
  };

  return (
    <Fragment>
      <div className={`offcanvas offcanvas-end ed-sidebar ${beforeClose ? "hiding" : open ? "show" : ""}`}>
        <div className="ed-sidebar-header">
          <Link href="/" className="ed-sidebar-logo">
            <Image width={200} height={100} src="/assets/codelab/logo/zolto.svg" alt="logo" />
          </Link>
          <button type="button" className="text-reset" onClick={handleClose}>
            <i className="fi fi-rr-cross" />
          </button>
        </div>
        <div className="ed-sidebar-body m-0">
          <div className="ed-sidebar-widget">
            <h3 className="ed-sidebar-widget-title">Контакти:</h3>
            {content.map((item) => (
              <div className="ed-contact__info-item" key={item.id}>
                <div className="ed-contact__info-icon" style={{ gap: 10, display: "flex" }}>
                  <Image width={25} height={25} src={item.icon} alt="icon" />
                  <span>{item.title}</span>
                </div>
                <div className="ed-contact__info-content">
                  <a href={item.link}>{item.content}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="ed-sidebar-widget">
            <h3 className="ed-sidebar-widget-title">Заследете не:</h3>
            <ul className="ed-sidebar-social">
              <Social />
            </ul>
          </div>
        </div>
      </div>
      {open && <div className={`offcanvas-backdrop fade ${beforeClose ? "show" : ""}`} onClick={handleClose} />}
    </Fragment>
  );
};
