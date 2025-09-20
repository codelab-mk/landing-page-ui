import { CallToAction1 } from "@/components/CallToAction";
import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
import Image from "next/image";
const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageName="Instructor Details" />
      <section className="ed-team__details position-relative section-gap">
        <div className="container ed-container">
          <div className="row">
            <div className="col-12">
              {/* Team Details Top */}
              <div className="ed-team__details-top">
                {/* Team Details Image */}
                <div className="ed-team__details-image">
                  <div className="ed-team__details-main-img">
                    <Image width={488} height={450} sizes="100vw" style={{ width: "488px", height: "450px" }} src="/assets/images/team/team-1/3.png" alt="team-details-img" />
                  </div>
                  {/* Team Details Meta */}
                  <div className="ed-team__details-meta">
                    <div className="ed-course__lesson">
                      <div className="ed-course__rattings">
                        <ul>
                          <li>
                            <i className="icofont-star" />
                          </li>
                          <li>
                            <span>(09 Reviews)</span>
                          </li>
                        </ul>
                      </div>
                      <div className="ed-course__part">
                        <i className="fi-rr-book" />
                        <p>254 Students</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Team Details Info */}
                <div className="ed-team__details-info">
                  <span>SCINCE TEACHER</span>
                  <h4>Michael Anderson</h4>
                  <p>If you need help coping with a mental health condition or things going on in your life, like loneliness or stress due to a new baby or financial issues, just come to us.</p>
                  <div className="ed-team__details-info-wrapper">
                    {/* Sigle Info */}
                    <div className="ed-contact__info-item">
                      <div className="ed-contact__info-icon">
                        <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue" />
                      </div>
                      <div className="ed-contact__info-content">
                        <span>24/7 Support</span>
                        <a href="tel:+389 ‭72 278 786‬">+389 ‭72 278 786‬</a>
                      </div>
                    </div>
                    {/* Sigle Info */}
                    <div className="ed-contact__info-item">
                      <div className="ed-contact__info-icon">
                        <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-envelope-blue.svg" alt="icon-envelope-blue" />
                      </div>
                      <div className="ed-contact__info-content">
                        <span>Send Message</span>
                        <a href="mailto:contact@CodeLab.com.mk">contact@CodeLab.com.mk3</a>
                      </div>
                    </div>
                  </div>
                  {/* Team Details Social */}
                  <ul className="ed-team__details-info-social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <Image width={20} height={20} sizes="100vw" style={{ width: "20px", height: "20px" }} src="/assets/images/icons/icon-dark-facebook.svg" alt="icon-dark-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <Image width={20} height={20} sizes="100vw" style={{ width: "20px", height: "20px" }} src="/assets/images/icons/icon-dark-twitter.svg" alt="icon-dark-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.dribbble.com/" target="_blank">
                        <Image width={20} height={20} sizes="100vw" style={{ width: "20px", height: "20px" }} src="/assets/images/icons/icon-dark-dribbble.svg" alt="icon-dark-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <Image width={20} height={20} sizes="100vw" style={{ width: "20px", height: "20px" }} src="/assets/images/icons/icon-dark-instagram.svg" alt="icon-dark-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Team Details Bottom */}
              <div className="ed-team__details-bottom">
                <h5>About Me</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit sed do eius mod tempor incidid labore dolore magna aliqua. enim ad minim eniam quis nostrud exercitation ullamco laboris nisi aliquip ex commodo consequat. duis aute irure dolor in repreed ut perspiciatis unde omnis iste natus error sit
                  voluptat em acus antium.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur elit sed do eius mod tempor incidid labore dolore magna aliqua. enim ad minim eniam quis nostrud exercitation ullamco laboris nisi aliquip ex commodo consequat. duis aute irure dolor in repreed ut perspiciatis unde omnis iste natus error sit
                  voluptat em acus antium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction1 />
    </CodeLabLayout>
  );
};
export default page;
