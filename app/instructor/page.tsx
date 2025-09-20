import { CallToAction1 } from "@/components/CallToAction";
import PageBanner from "@/components/PageBanner";
import CodeLabLayout from "@/layout/CodeLabLayout";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const instructors = [
    {
      name: "Laura Martinez",
      designation: "Digital Marketer",
      image: "/assets/images/team/team-1/1.png",
      social: [
        {
          url: "https://www.facebook.com/",
          icon: "/assets/images/icons/icon-white-facebook.svg",
        },
        {
          url: "https://www.twitter.com/",
          icon: "/assets/images/icons/icon-white-twitter.svg",
        },
        {
          url: "https://www.dribbble.com/",
          icon: "/assets/images/icons/icon-white-dribbble.svg",
        },
        {
          url: "https://www.instagram.com/",
          icon: "/assets/images/icons/icon-white-instagram.svg",
        },
      ],
    },
    {
      name: "Jennifer Brown",
      designation: "Digital Marketer",
      image: "/assets/images/team/team-1/2.png",
      social: [
        {
          url: "https://www.facebook.com/",
          icon: "/assets/images/icons/icon-white-facebook.svg",
        },
        {
          url: "https://www.twitter.com/",
          icon: "/assets/images/icons/icon-white-twitter.svg",
        },
        {
          url: "https://www.dribbble.com/",
          icon: "/assets/images/icons/icon-white-dribbble.svg",
        },
        {
          url: "https://www.instagram.com/",
          icon: "/assets/images/icons/icon-white-instagram.svg",
        },
      ],
    },
    {
      name: "Michael Anderson",
      designation: "Digital Marketer",
      image: "/assets/images/team/team-1/3.png",
      social: [
        {
          url: "https://www.facebook.com/",
          icon: "/assets/images/icons/icon-white-facebook.svg",
        },
        {
          url: "https://www.twitter.com/",
          icon: "/assets/images/icons/icon-white-twitter.svg",
        },
        {
          url: "https://www.dribbble.com/",
          icon: "/assets/images/icons/icon-white-dribbble.svg",
        },
        {
          url: "https://www.instagram.com/",
          icon: "/assets/images/icons/icon-white-instagram.svg",
        },
      ],
    },
    {
      name: "Karen Williams",
      designation: "Digital Marketer",
      image: "/assets/images/team/team-1/4.jpg",
      social: [
        {
          url: "https://www.facebook.com/",
          icon: "/assets/images/icons/icon-white-facebook.svg",
        },
        {
          url: "https://www.twitter.com/",
          icon: "/assets/images/icons/icon-white-twitter.svg",
        },
        {
          url: "https://www.dribbble.com/",
          icon: "/assets/images/icons/icon-white-dribbble.svg",
        },
        {
          url: "https://www.instagram.com/",
          icon: "/assets/images/icons/icon-white-instagram.svg",
        },
      ],
    },
    {
      name: "Emily Davis",
      designation: "Professor of Chemistry",
      image: "/assets/images/team/team-1/5.jpg",
      social: [
        {
          url: "https://www.facebook.com/",
          icon: "/assets/images/icons/icon-white-facebook.svg",
        },
        {
          url: "https://www.twitter.com/",
          icon: "/assets/images/icons/icon-white-twitter.svg",
        },
        {
          url: "https://www.dribbble.com/",
          icon: "/assets/images/icons/icon-white-dribbble.svg",
        },
        {
          url: "https://www.instagram.com/",
          icon: "/assets/images/icons/icon-white-instagram.svg",
        },
      ],
    },
    {
      name: "James Brown",
      designation: "Physical Education Teacher",
      image: "/assets/images/team/team-1/6.jpg",
      social: [
        {
          url: "https://www.facebook.com/",
          icon: "/assets/images/icons/icon-white-facebook.svg",
        },
        {
          url: "https://www.twitter.com/",
          icon: "/assets/images/icons/icon-white-twitter.svg",
        },
        {
          url: "https://www.dribbble.com/",
          icon: "/assets/images/icons/icon-white-dribbble.svg",
        },
        {
          url: "https://www.instagram.com/",
          icon: "/assets/images/icons/icon-white-instagram.svg",
        },
      ],
    },
  ];
  return (
    <CodeLabLayout>
      <PageBanner pageName="Our Instructors" />
      <section className="ed-team ed-team__page position-relative section-gap">
        <div className="container ed-container">
          <div className="row">
            {instructors.map((instructor, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="ed-team__card wow fadeInUp" data-wow-duration="1s">
                  <div className="ed-team__cover">
                    <div className="ed-team__img">
                      <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src={instructor.image} alt="team-img" />
                    </div>
                    <ul className="ed-team__social">
                      {instructor.social.map((social, index) => (
                        <li key={index}>
                          <a href={social.url} target="_blank">
                            <Image width={20} height={20} sizes="100vw" style={{ width: "20px", height: "20px" }} src={social.icon} alt={social.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ed-team__info">
                    <p className="ed-team__designation">{instructor.designation}</p>
                    <Link className="ed-team__name" href="/instructor-details">
                      {instructor.name}
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
      <CallToAction1 />
    </CodeLabLayout>
  );
};
export default page;
