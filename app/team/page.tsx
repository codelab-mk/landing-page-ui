"use client";

import Link from "next/link";
import Image from "next/image";
import CodeLabLayout from "@/layout/CodeLabLayout";
import PageBanner from "@/components/PageBanner/PageBanner";
import { instructors } from "../../data/instructors";
import { useRouter } from "next/navigation";

const InstructorsPage = () => {
  const router = useRouter();

  return (
    <CodeLabLayout>
      <PageBanner pageTitle="Нашиот Тим" pageName="Нашиот Тим" />
      <section className="ed-team ed-team__page position-relative section-gap">
        <div className="container ed-container">
          <div className="row">
            {instructors.map((instructor) => (
              <div className="col-lg-4 col-md-6 col-12" key={instructor.id}>
                <div className="ed-team__card wow fadeInUp" data-wow-duration="1s">
                  <div className="ed-team__cover">
                    <div className="ed-team__img">
                      <Image width={0} height={0} sizes="100vw" style={{ height: 500, cursor: "pointer" }} src={instructor.image} alt={instructor.name} onClick={() => router.push(`/team/${instructor.id}`)} /> {/* </Link> */}
                    </div>
                  </div>
                  <div className="ed-team__info">
                    <p className="ed-team__designation">{instructor.designation}</p>
                    <Link className="ed-team__name" href={`/team/${instructor.id}`}>
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
