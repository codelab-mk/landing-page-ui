"use client";
import Link from "next/link";
import Image from "next/image";
import CodeLabLayout from "@/layout/CodeLabLayout";
import PageBanner from "@/components/PageBanner";
import { instructors } from "../data/instructors";

const InstructorsPage = () => {
  return (
    <CodeLabLayout>
      <PageBanner pageName="Our Team" />
      <section className="ed-team ed-team__page position-relative section-gap">
        <div className="container ed-container">
          <div className="row">
            {instructors.map((instructor) => (
              <div className="col-lg-4 col-md-6 col-12" key={instructor.id}>
                <div className="ed-team__card wow fadeInUp" data-wow-duration="1s">
                  <div className="ed-team__cover">
                    <div className="ed-team__img">
                      <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src={instructor.image} alt={instructor.name} />
                    </div>
                    <ul className="ed-team__social">
                      {instructor.social.map((social, index) => (
                        <li key={index}>
                          <a href={social.url} target="_blank">
                            <Image width={20} height={20} src={social.icon} alt={social.url} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ed-team__info">
                    <p className="ed-team__designation">{instructor.designation}</p>
                    <Link className="ed-team__name" href={`/instructor-details/${instructor.id}`}>
                      {instructor.name}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CodeLabLayout>
  );
};

export default InstructorsPage;
