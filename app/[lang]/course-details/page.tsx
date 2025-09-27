import { CallToAction1 } from "@/components/CallToAction";
import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
import Image from "next/image";
const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageTitle="Course Details" />
      <section className="ed-course__details">
        <div className="container ed-container">
          <div className="row">
            <div className="col-lg-8 col-12">
              {/* Course Details Content */}
              <div className="ed-course__details-content">
                {/* Course Details Image */}
                <div className="ed-course__details-img">
                  <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/images/course/course-details/details-img-1.png" alt="course-details-img-1" />
                </div>
                <h3>Starting SEO as your Home Based Business Online Courses</h3>
                <p>
                  Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur enim ipsam.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur enim ipsam.
                </p>
                {/* Course Details Content List */}
                <div className="ed-course__details-list">
                  <h5>What You’ll Learn?</h5>
                  <ul>
                    <li>
                      <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                      Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
                    </li>
                    <li>
                      <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                      Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
                    </li>
                    <li>
                      <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                      Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer
                    </li>
                    <li>
                      <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                      Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
                    </li>
                  </ul>
                </div>
                {/* Course Details Image Two */}
                <div className="ed-course__details-img image-2">
                  <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/images/course/course-details/details-img-2.png" alt="course-details-img-2" />
                </div>
                {/* Course Details Content List */}
                <div className="ed-course__details-list">
                  <h5>Why choose you this course?</h5>
                  <ul>
                    <li>
                      <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                      Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
                    </li>
                    <li>
                      <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                      Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
                    </li>
                    <li>
                      <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                      Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer
                    </li>
                    <li>
                      <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                      Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              {/* Course Details Sidebar */}
              <div className="ed-course__sidebar">
                <div className="ed-course__sidebar-widget">
                  <h4 className="ed-course__sidebar-title">Course Information:</h4>
                  <ul>
                    <li>
                      Price:<span className="price">$30</span>
                    </li>
                    <li>
                      Instructor:<span>Laura Martinez</span>
                    </li>
                    <li>
                      Certifications:<span>Yes</span>
                    </li>
                    <li>
                      Lessons:<span>17</span>
                    </li>
                    <li>
                      Duration:<span>15 weeks</span>
                    </li>
                    <li>
                      Language:<span>English</span>
                    </li>
                    <li>
                      Students:<span>646</span>
                    </li>
                  </ul>
                </div>
                <div className="ed-course__sidebar-widget">
                  <h4 className="ed-course__sidebar-title">Contact Us</h4>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue" />
                    </div>
                    <div className="ed-contact__info-content">
                      <a href="tel:+389 ‭72 278 786‬">+389 ‭72 278 786‬</a>
                    </div>
                  </div>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-envelope-blue.svg" alt="icon-envelope-blue" />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>Send Message</span>
                      <a href="mailto:contact@codelab.com.mk">contact@codelab.com.mk</a>
                    </div>
                  </div>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-location-blue.svg" alt="icon-location-blue" />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>Our Location</span>
                      <a href="#">16та Македонска Бригада 2, Скопје</a>
                    </div>
                  </div>
                </div>
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
