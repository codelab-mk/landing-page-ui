"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";

export const Blog1 = ({ pt = "" }: { pt?: string }) => {
  const blogs = [
    {
      id: 1,
      title: "Solutions Your All Problem With Online Courses For Your Thinking",
      category: "Education",
      date: "09 May, 2024",
      comments: 32,
      image: "/assets/images/blog/blog-1/1.png",
    },
    {
      id: 2,
      title: "Exploring Learning Landscapes in All Academic Calendar For Season",
      category: "Business",
      date: "09 January, 2024",
      comments: 98,
      image: "/assets/images/blog/blog-1/2.png",
    },
    {
      id: 3,
      title: "Voices from the Learning Education Hub For Your Children",
      category: "Marketing",
      date: "03 June, 2024",
      comments: 4,
      image: "/assets/images/blog/blog-1/3.png",
    },
  ];

  return (
    <section className={`ed-blog section-gap ${pt}`}>
      <div className="container ed-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="ed-section-head text-center">
              <span className="ed-section-head__sm-title">OUR NEWS</span>
              <h3 className="ed-section-head__title ed-split-text left">Our New Articles</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6 col-12" key={blog.id}>
              <div className={`ed-blog__card wow fadeInUp ${styles.blogCard}`} data-wow-duration="1s">
                <div className={`ed-blog__head ${styles.blogHead}`}>
                  <div className={`ed-blog__img ${styles.blogImg}`}>
                    <Image width={370} height={240} sizes="100vw" style={{ width: "370px", height: "240px" }} src={blog.image} alt="blog-img" />
                  </div>
                  <Link href="/blog" className={`ed-blog__category ${styles.blogCategory}`}>
                    {blog.category}
                  </Link>
                </div>
                <div className={`ed-blog__content ${styles.blogContent}`}>
                  <ul className={`ed-blog__meta ${styles.blogMeta}`}>
                    <li>
                      <i className="fi fi-rr-calendar" />
                      {blog.date}
                    </li>
                    <li>
                      <i className="fi fi-rr-comment-alt-dots" />
                      {blog.comments > 9 ? blog.comments : "0" + blog.comments} Comments
                    </li>
                  </ul>
                  <Link href="/blog" className={`ed-blog__title ${styles.blogTitle}`}>
                    <h4>{blog.title}</h4>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Blog2 = () => {
  const blogs = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: "Voices from the Learning Education Hub For Your Children",
    category: "Marketing",
    date: "03 June, 2024",
    comments: 4,
    image: "/assets/images/blog/blog-1/3.png",
  }));

  return (
    <section className="ed-blog ed-blog-page section-gap">
      <div className="container ed-container">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6 col-12" key={blog.id}>
              <div className={`ed-blog__card wow fadeInUp ${styles.blogCard}`} data-wow-duration="1s">
                <div className={`ed-blog__head ${styles.blogHead}`}>
                  <div className={`ed-blog__img ${styles.blogImg}`}>
                    <Image width={370} height={240} sizes="100vw" style={{ width: "370px", height: "240px" }} src={blog.image} alt="blog-img" />
                  </div>
                  <Link href="/blog" className={`ed-blog__category ${styles.blogCategory}`}>
                    {blog.category}
                  </Link>
                </div>
                <div className={`ed-blog__content ${styles.blogContent}`}>
                  <ul className={`ed-blog__meta ${styles.blogMeta}`}>
                    <li>
                      <i className="fi fi-rr-calendar" />
                      {blog.date}
                    </li>
                    <li>
                      <i className="fi fi-rr-comment-alt-dots" />
                      {blog.comments > 9 ? blog.comments : "0" + blog.comments} Comments
                    </li>
                  </ul>
                  <Link href="/blog-details" className={`ed-blog__title ${styles.blogTitle}`}>
                    <h4>{blog.title}</h4>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="ed-pagination">
              <ul className="ed-pagination__list">
                <li className="active">
                  <a href="#">01</a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fi-rr-arrow-small-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
