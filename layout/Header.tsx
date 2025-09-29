import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { LangLink, RouteKey } from "@/components/LangLink";
import { LanguageSwitcher } from "@/components/LanguageSwithcer";
import { _config } from "@/utilities";
import Link from "next/link";

interface HeaderProps {
  header?: number;
}

export const Header = ({ header }: HeaderProps) => {
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
const menuItems: {
  key: RouteKey;
  label: string;
  subMenu?: { key: RouteKey; label: string }[];
}[] = [
  { key: "home", label: "Home" },
  {
    key: "courses",
    label: "Courses",
    subMenu: [
      { key: "courses", label: "Courses" },
      { key: "course-details", label: "Course Details" },
    ],
  },
  {
    key: "blog",
    label: "News",
    subMenu: [
      { key: "blog", label: "Blog" },
      { key: "blog-details", label: "Blog Details" },
    ],
  },
  {
    key: "about",
    label: "About",
    subMenu: [
      { key: "about", label: "About Us" },
      { key: "instructor-details", label: "Our Team" },
    ],
  },
  { key: "contact", label: "Contact" },
];

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
              <LangLink to="home">
                <Image width={300} height={100} src="/assets/codelab/logo/zolto.svg" alt="logo" />
              </LangLink>
            </div>
            <div className="ed-topbar__info">
              <ul className="ed-topbar__info-social">
                <Social />
              </ul>
              <LanguageSwitcher />
              <button type="button" className="mobile-menu-offcanvas-toggler" onClick={() => setShowMobileMenu(true)}>
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="ed-header">
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
                <a href="javascript:void(0)">
                  {item.label}
                  <i className="fi fi-ss-angle-small-down" />
                </a>
                <ul className="sub-menu">
                  {item.subMenu.map((sub) => (
                    <li key={sub.key}>
                      <LangLink to={sub.key}>{sub.label}</LangLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <LangLink to={item.key}>{item.label}</LangLink>
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
          <LangLink to="home">
            <Image width={140} height={34} src="/assets/codelab/logo/zolto.svg" alt="logo" />
          </LangLink>
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
                          <LangLink to={sub.key} className="offcanvas__sub_menu_item">
                            {sub.label}
                          </LangLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <LangLink to={item.key} className="offcanvas__menu_item">
                    {item.label}
                  </LangLink>
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
            <Image width={25} height={25} src={item.icon} alt="social-icon" />
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
    { id: 1, title: "Contact", content: "Phone number", link: "tel:+38972278786", icon: "/assets/images/icons/icon-phone-blue.svg" },
    { id: 2, title: "Send Message", content: "Send Message", link: "mailto:contact@codelab.com.mk", icon: "/assets/images/icons/icon-envelope-blue.svg" },
    { id: 3, title: "Our Location", content: "Our Location", link: "https://www.google.com/maps/place/32/Jenin,+London", icon: "/assets/images/icons/icon-location-blue.svg" },
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
          <LangLink to="home" className="ed-sidebar-logo">
            <Image width={200} height={100} src="/assets/codelab/logo/zolto.svg" alt="logo" />
          </LangLink>
          <button type="button" className="text-reset" onClick={handleClose}>
            <i className="fi fi-rr-cross" />
          </button>
        </div>
        <div className="ed-sidebar-body m-0">
          <div className="ed-sidebar-widget">
            <h3 className="ed-sidebar-widget-title">Contacts Us:</h3>
            {content.map((item) => (
              <div className="ed-contact__info-item" key={item.id}>
                <div className="ed-contact__info-icon">
                  <Image width={25} height={25} src={item.icon} alt="icon" />
                </div>
                <div className="ed-contact__info-content">
                  <span>{item.title}</span>
                  <a href={item.link}>{item.content}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="ed-sidebar-widget">
            <h3 className="ed-sidebar-widget-title">Follow Us:</h3>
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

// -----------------------------------
// Login/Register Components
// -----------------------------------
const LoginRegisterButton = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <Fragment>
      <button type="button" className="register-btn" onClick={() => setShowRegisterModal(true)}>
        Register
      </button>
      <button type="button" className="login-btn" onClick={() => setShowLoginModal(true)}>
        Log In
      </button>
      <RegisterModal show={showRegisterModal} onHide={() => setShowRegisterModal(false)} />
      <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
    </Fragment>
  );
};

const RegisterModal = ({ show, onHide }: { show: boolean; onHide: () => void }) => {
  return (
    <Modal className="modal fade ed-auth__modal" show={show} onHide={onHide}>
      <div className="ed-auth__modal-content ">
        <button type="button" className="ed-auth__modal-close" onClick={onHide}>
          <i className="fi-rr-cross" />
        </button>
        {/* Auth Head  */}
        <div className="ed-auth__modal-head">
          <Link href="/" className="ed-auth__modal-logo">
            <Image width={140} height={34} src="/assets/codelab/logo/zolto.svg" alt="logo" />
          </Link>
          <h3 className="ed-auth__modal-title">Sign Up Now</h3>
          <p className="ed-auth__modal-text">
            already have an account?
            <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
              Sign In
            </button>
          </p>
        </div>
        {/* Auth Body  */}
        <div className="ed-auth__modal-body">
          <form action="#" method="post" className="ed-auth__modal-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Enter name" required />
            </div>
            <div className="form-group">
              <input type="text" name="user name" placeholder="Enter user name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Enter password" required />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault2">
                <input className="form-check-input" type="checkbox" defaultChecked={true} id="flexCheckDefault2" />I agree with your <strong>Privacy Policy</strong>
              </label>
            </div>
            <div className="ed-auth__form-btn">
              <button type="submit" className="ed-btn">
                Register Now
                <i className="fi fi-rr-arrow-small-right" />
              </button>
            </div>
          </form>
        </div>
        {/* Auth Footer  */}
        <div className="ed-auth__modal-footer">
          <div className="ed-auth__modal-third-party">
            <p>Or Sign Up with</p>
            <ul className="ed-auth__modal-third-party-list">
              <li>
                <a className="google-login" href="https://www.google.com/">
                  <Image width={25} height={25} src="/assets/images/icons/icon-color-google.svg" alt="icon-color-google" />
                </a>
              </li>
              <li>
                <a className="facebook-login" href="https://facebook.com/">
                  <Image width={25} height={25} src="/assets/images/icons/icon-color-facebook.svg" alt="icon-color-facebook" />
                </a>
              </li>
              <li>
                <a className="linkedin-login" href="https://www.linkedin.com/">
                  <Image width={25} height={25} src="/assets/images/icons/icon-color-linkedin.svg" alt="icon-color-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const LoginModal = ({ show, onHide }: { show: boolean; onHide: () => void }) => {
  return (
    <Modal className="modal fade ed-auth__modal" show={show} onHide={onHide}>
      <div className="ed-auth__modal-content">
        <button type="button" className="ed-auth__modal-close" onClick={onHide}>
          <i className="fi-rr-cross" />
        </button>
        {/* Auth Head  */}
        <div className="ed-auth__modal-head">
          <Link href="/" className="ed-auth__modal-logo">
            <Image width={140} height={34} src="/assets/codelab/logo/zolto.svg" alt="logo" />
          </Link>
          <h3 className="ed-auth__modal-title">Sign In Now</h3>
          <p className="ed-auth__modal-text">
            Didn’t Create an account?
            <button type="button" data-bs-toggle="modal" data-bs-target="#registerModal">
              Sign Up
            </button>
          </p>
        </div>
        {/* Auth Body  */}
        <div className="ed-auth__modal-body">
          <form action="#" method="post" className="ed-auth__modal-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Enter user name" required />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Enter password" required />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input className="form-check-input" type="checkbox" defaultChecked={true} id="flexCheckDefault" />
                Remember me
              </label>
            </div>
            <div className="ed-auth__form-btn">
              <button type="submit" className="ed-btn">
                Sign In
                <i className="fi fi-rr-arrow-small-right" />
              </button>
            </div>
          </form>
        </div>
        {/* Auth Footer  */}
        <div className="ed-auth__modal-footer">
          <div className="ed-auth__modal-third-party">
            <p>Or Sign In with</p>
            <ul className="ed-auth__modal-third-party-list">
              <li>
                <a className="google-login" href="https://www.google.com/">
                  <Image width={25} height={25} src="/assets/images/icons/icon-color-google.svg" alt="icon-color-google" />
                </a>
              </li>
              <li>
                <a className="facebook-login" href="https://facebook.com/">
                  <Image width={25} height={25} src="/assets/images/icons/icon-color-facebook.svg" alt="icon-color-facebook" />
                </a>
              </li>
              <li>
                <a className="linkedin-login" href="https://www.linkedin.com/">
                  <Image width={25} height={25} src="/assets/images/icons/icon-color-linkedin.svg" alt="icon-color-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};
