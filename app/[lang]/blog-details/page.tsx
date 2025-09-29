import { CallToAction1 } from "@/components/CallToAction/CallToAction";
import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogDetails.module.css";

const page = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageName="Blog Details" />
      <section className={`${styles.edBlogDetails} section-gap position-relative`}>
        <div className="container ed-container">
          <div className="row">
            <div className="col-lg-12 col-xl-8 col-12">
              {/* Blog Details Main */}
              <div className={styles.edBlogDetailsMain}>
                <div className="ed-blog__details-top">
                  {/* Blog Details Cover */}
                  <div className="ed-blog__details-cover">
                    <div className={styles.edBlogDetailsCoverImg}>
                      <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/images/blog/blog-details/b-details-img-1.png" alt="b-details-img-1" />
                    </div>
                    <ul className={styles.edBlogDetailsMeta}>
                      <li>
                        <i className="fi fi-rr-calendar" />
                        30 April, 2024
                      </li>
                      <li>
                        <i className="fi fi-rr-comment-alt-dots" />
                        18 Comments
                      </li>
                      <li>
                        <Link href="/blog">Marketing</Link>
                      </li>
                    </ul>
                  </div>
                  <h2 className={styles.edBlogDetailsTitle}>Fostering Student Growth through Mindful for Your Mentoring Students</h2>
                  <p className="ed-blog__details-text">
                    Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur enim ipsam.
                  </p>
                  <br />
                  <p className="ed-blog__details-text">
                    Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur enim ipsam.
                  </p>
                </div>
                {/* Blog Details Widget */}
                <div className={styles.edBlogDetailsWidget}>
                  <h5 className={styles.edBlogDetailsWidgetTitle}>Where Does it Come From Template</h5>
                  <ul className={styles.edBlogDetailsList}>
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
                {/* Blog Details Widget Image */}
                <div className={styles.edBlogDetailsWidgetImg}>
                  <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/images/blog/blog-details/b-details-img-2.png" alt="b-details-img-2" />
                  <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/images/blog/blog-details/b-details-img-3.png" alt="b-details-img-3" />
                </div>
                {/* Blog Details Widget */}
                <div className={styles.edBlogDetailsWidget}>
                  <h5 className={styles.edBlogDetailsWidgetTitle}>Figma Template Design</h5>
                  <p className="ed-blog__details-text">
                    Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur enim ipsam.
                  </p>
                </div>

                {/* Blog Details Form */}
                {/* <div className={styles.edBlogDetailsForm}>
                  <h3 className={styles.edBlogDetailsFormTitle}>Leave a Reply</h3>
                  <form action="#" method="post">
                    <div className="form-group">
                      <input type="text" name="your-name" placeholder="Enter your name*" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="your-email" placeholder="Enter your email*" required />
                    </div>
                    <div className="form-group">
                      <textarea name="message" placeholder="How can we help you? Feel free to get in touch!" required defaultValue={""} />
                    </div>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />I agree to the&nbsp;Privacy Policy.
                      </label>
                    </div>
                    <div className={styles.edBlogDetailsFormBtn}>
                      <button type="submit" className="ed-btn">
                        Post a Comment
                        <i className="fi fi-rr-arrow-small-right" />
                      </button>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 col-md-8 col-12">
              <div className="ed-blog__sidebar">
                {/* Single Sidebar Widget */}
                {/* <div className={styles.edBlogSidebarWidget}>
                  <h4 className={styles.edBlogSidebarTitle}>Search Here</h4>
                  <form action="#" method="post" className={styles.edBlogSidebarSearch}>
                    <input type="search" name="search" placeholder="Search..." required />
                  </form>
                </div> */}
                {/* Single Sidebar Widget */}
                {/* <div className={styles.edBlogSidebarWidget}>
                  <h4 className={styles.edBlogSidebarTitle}>Categories</h4>
                  <div className={styles.edBlogSidebarCategory}>
                    <ul>
                      <li>
                        <a href="#">
                          Education <span>09</span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Marketing <span>54</span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Business <span>17</span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Technology <span>15</span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Language <span>29</span>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* Single Sidebar Widget */}
                <div className={styles.edBlogSidebarWidget}>
                  <h4 className={styles.edBlogSidebarTitle}>Popular News</h4>
                  <div className="ed-blog__latest">
                    {/* Single Latest */}
                    <div className={styles.edBlogLatestItem}>
                      <div className={styles.edBlogLatestImg}>
                        <Image width={80} height={80} sizes="100vw" style={{ width: "80px", height: "80px" }} src="/assets/images/blog/blog-details/latest-1.png" alt="latest-1" />
                      </div>
                      <div className={styles.edBlogLatestInfo}>
                        <Link href="/blog-details">How to Start a Blog Beginner Best Tooling</Link>
                        <span> Jan 10,2022 </span>
                      </div>
                    </div>
                    {/* Single Latest */}
                    <div className={styles.edBlogLatestItem}>
                      <div className={styles.edBlogLatestImg}>
                        <Image width={80} height={80} sizes="100vw" style={{ width: "80px", height: "80px" }} src="/assets/images/blog/blog-details/latest-2.png" alt="latest-2" />
                      </div>
                      <div className={styles.edBlogLatestInfo}>
                        <Link href="/blog-details">Start Your Career for Your Best Planning Days</Link>
                        <span> 30 April, 2024 </span>
                      </div>
                    </div>
                    {/* Single Latest */}
                    <div className={styles.edBlogLatestItem}>
                      <div className={styles.edBlogLatestImg}>
                        <Image width={80} height={80} sizes="100vw" style={{ width: "80px", height: "80px" }} src="/assets/images/blog/blog-details/latest-3.png" alt="latest-3" />
                      </div>
                      <div className={styles.edBlogLatestInfo}>
                        <Link href="/blog-details">How to Start a Blog Beginner Best Tooling</Link>
                        <span> 30 April, 2024 </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Sidebar Widget */}
                <div className={styles.edBlogSidebarWidget}>
                  <h4 className={styles.edBlogSidebarTitle}>Contact Us</h4>
                  {/* Sigle Info  */}
                  <div className={styles.edContactInfoItem}>
                    <div className={styles.edContactInfoIcon}>
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue" />
                    </div>
                    <div className={styles.edContactInfoContent}>
                      <a href="tel:+389 ‭72 278 786‬">+389 ‭72 278 786‬</a>
                    </div>
                  </div>
                  {/* Sigle Info  */}
                  <div className={styles.edContactInfoItem}>
                    <div className={styles.edContactInfoIcon}>
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-envelope-blue.svg" alt="icon-envelope-blue" />
                    </div>
                    <div className={styles.edContactInfoContent}>
                      <span>Send Message</span>
                      <a href="mailto:contact@codelab.com.mk">contact@codelab.com.mk</a>
                    </div>
                  </div>
                  {/* Sigle Info  */}
                  <div className={styles.edContactInfoItem}>
                    <div className={styles.edContactInfoIcon}>
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-location-blue.svg" alt="icon-location-blue" />
                    </div>
                    <div className={styles.edContactInfoContent}>
                      <span>Our Location</span>
                      <a href="#">16та Македонска Бригада 2, Скопје</a>
                    </div>
                  </div>
                </div>
                {/* Single Sidebar Widget */}
                {/* <div className={styles.edBlogSidebarWidget}>
                  <h4 className={styles.edBlogSidebarTitle}>Popular Tags</h4>
                  <div className={styles.edBlogTags}>
                    <ul>
                      <li>
                        <a href="#">Design</a>
                      </li>
                      <li>
                        <a href="#">Creative </a>
                      </li>
                      <li>
                        <a href="#">Solution</a>
                      </li>
                      <li>
                        <a href="#">Laptop</a>
                      </li>
                      <li>
                        <a href="#">Product</a>
                      </li>
                    </ul>
                  </div>
                </div> */}
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
