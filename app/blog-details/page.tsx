import { CallToAction1 } from "@/components/CallToAction";
import PageBanner from "@/components/PageBanner";
import EdunaLayout from "@/layout/EdunaLayout";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <EdunaLayout>
      <PageBanner pageName="Blog Details" />
      <section className="ed-blog__details section-gap position-relative">
        <div className="container ed-container">
          <div className="row">
            <div className="col-lg-12 col-xl-8 col-12">
              {/* Blog Details Main */}
              <div className="ed-blog__details-main">
                <div className="ed-blog__details-top">
                  {/* Blog Details Cover */}
                  <div className="ed-blog__details-cover">
                    <div className="ed-blog__details-cover-img">
                      <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/images/blog/blog-details/b-details-img-1.png" alt="b-details-img-1" />
                    </div>
                    <ul className="ed-blog__details-meta">
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
                  <h2 className="ed-blog__details-title">Fostering Student Growth through Mindful for Your Mentoring Students</h2>
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
                <div className="ed-blog__details-widget">
                  <h5 className="ed-blog__details-widget-title">Where Does it Come From Template</h5>
                  <ul className="ed-blog__details-list">
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
                <div className="ed-blog__details-widget-img">
                  <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/images/blog/blog-details/b-details-img-2.png" alt="b-details-img-2" />
                  <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src="/assets/images/blog/blog-details/b-details-img-3.png" alt="b-details-img-3" />
                </div>
                {/* Blog Details Widget */}
                <div className="ed-blog__details-widget">
                  <h5 className="ed-blog__details-widget-title">Figma Template Design</h5>
                  <p className="ed-blog__details-text">
                    Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur enim ipsam.
                  </p>
                </div>
                {/* Blog Details Comments */}
                <div className="ed-blog__details-comment">
                  <h3 className="ed-blog__comment-title">2 Comment</h3>
                  {/* Single Comment */}
                  <div className="ed-blog__comment-item">
                    <div className="ed-blog__comment-img">
                      <Image width={58} height={58} sizes="100vw" style={{ width: "58px", height: "58px" }} src="/assets/images/blog/blog-details/comment-1.png" alt="comment-1" />
                    </div>
                    <div className="ed-blog__comment-info">
                      <div className="ed-blog__comment-info-head">
                        <h6 className="ed-blog__comment-name">John Smith</h6>
                        <a href="#" className="ed-blog__comment-reply">
                          Reply
                        </a>
                      </div>
                      <p className="ed-blog__comment-text">Fusce condimentum enim vestibulum libero gravida, ut accumsan quam bibendum. Curabitur gravida est sit amet cursus.</p>
                    </div>
                  </div>
                  {/* Single Comment */}
                  <div className="ed-blog__comment-item reply-comment">
                    <div className="ed-blog__comment-img">
                      <Image width={58} height={58} sizes="100vw" style={{ width: "58px", height: "58px" }} src="/assets/images/blog/blog-details/comment-2.png" alt="comment-2" />
                    </div>
                    <div className="ed-blog__comment-info">
                      <div className="ed-blog__comment-info-head">
                        <h6 className="ed-blog__comment-name">Franklin Chen</h6>
                        <a href="#" className="ed-blog__comment-reply">
                          Reply
                        </a>
                      </div>
                      <p className="ed-blog__comment-text">Fusce condimentum enim vestibulum libero gravida, ut accumsan quam bibendum. Curabitur gravida est sit amet cursus.</p>
                    </div>
                  </div>
                </div>
                {/* Blog Details Form */}
                <div className="ed-blog__details-form">
                  <h3 className="ed-blog__details-form-title">Leave a Reply</h3>
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
                    <div className="ed-blog__details-form-btn">
                      <button type="submit" className="ed-btn">
                        Post a Comment
                        <i className="fi fi-rr-arrow-small-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 col-md-8 col-12">
              <div className="ed-blog__sidebar">
                {/* Single Sidebar Widget */}
                <div className="ed-blog__sidebar-widget">
                  <h4 className="ed-blog__sidebar-title">Search Here</h4>
                  <form action="#" method="post" className="ed-blog__sidebar-search">
                    <input type="search" name="search" placeholder="Search..." required />
                  </form>
                </div>
                {/* Single Sidebar Widget */}
                <div className="ed-blog__sidebar-widget">
                  <h4 className="ed-blog__sidebar-title">Categories</h4>
                  <div className="ed-blog__sidebar-category">
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
                </div>
                {/* Single Sidebar Widget */}
                <div className="ed-blog__sidebar-widget">
                  <h4 className="ed-blog__sidebar-title">Popular News</h4>
                  <div className="ed-blog__latest">
                    {/* Single Latest */}
                    <div className="ed-blog__latest-item">
                      <div className="ed-blog__latest-img">
                        <Image width={80} height={80} sizes="100vw" style={{ width: "80px", height: "80px" }} src="/assets/images/blog/blog-details/latest-1.png" alt="latest-1" />
                      </div>
                      <div className="ed-blog__latest-info">
                        <Link href="/blog-details">How to Start a Blog Beginner Best Tooling</Link>
                        <span> Jan 10,2022 </span>
                      </div>
                    </div>
                    {/* Single Latest */}
                    <div className="ed-blog__latest-item">
                      <div className="ed-blog__latest-img">
                        <Image width={80} height={80} sizes="100vw" style={{ width: "80px", height: "80px" }} src="/assets/images/blog/blog-details/latest-2.png" alt="latest-2" />
                      </div>
                      <div className="ed-blog__latest-info">
                        <Link href="/blog-details">Start Your Career for Your Best Planning Days</Link>
                        <span> 30 April, 2024 </span>
                      </div>
                    </div>
                    {/* Single Latest */}
                    <div className="ed-blog__latest-item">
                      <div className="ed-blog__latest-img">
                        <Image width={80} height={80} sizes="100vw" style={{ width: "80px", height: "80px" }} src="/assets/images/blog/blog-details/latest-3.png" alt="latest-3" />
                      </div>
                      <div className="ed-blog__latest-info">
                        <Link href="/blog-details">How to Start a Blog Beginner Best Tooling</Link>
                        <span> 30 April, 2024 </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Sidebar Widget */}
                <div className="ed-blog__sidebar-widget">
                  <h4 className="ed-blog__sidebar-title">Contact Us</h4>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue" />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>24/7 Support</span>
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
                      <a href="mailto:contact@codelab.com.mk">contact@codelab.com.mk3</a>
                    </div>
                  </div>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item">
                    <div className="ed-contact__info-icon">
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-location-blue.svg" alt="icon-location-blue" />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>Our Locati0n</span>
                      <a href="#">32/Jenin, London</a>
                    </div>
                  </div>
                </div>
                {/* Single Sidebar Widget */}
                <div className="ed-blog__sidebar-widget">
                  <h4 className="ed-blog__sidebar-title">Popular Tags</h4>
                  <div className="ed-blog__tags">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction1 />
    </EdunaLayout>
  );
};
export default page;
