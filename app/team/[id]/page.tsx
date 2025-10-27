"use client";
import CodeLabLayout from "@/layout/CodeLabLayout";
import PageBanner from "@/components/PageBanner/PageBanner";
import Image from "next/image";
import { useParams } from "next/navigation";
import { instructors } from "@/data/instructors";

const InstructorDetailsPage = () => {
  const params = useParams();
  const instructor = instructors.find((inst) => inst.id === params.id);

  if (!instructor) return <CodeLabLayout>Не е пронајден запис</CodeLabLayout>;

  return (
    <CodeLabLayout>
      <PageBanner pageName={instructor.name} />
      <section className="ed-team__details position-relative section-gap">
        <div className="container ed-container">
          <div className="row">
            <div className="col-12">
              <div className="ed-team__details-top">
                {/* Image */}
                <div className="ed-team__details-image">
                  <div className="ed-team__details-main-img">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        objectPosition: "top",
                        height: "500px",
                      }}
                      src={instructor.image}
                      alt={instructor.name}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="ed-team__details-info">
                  <h4>{instructor.name}</h4>
                  <span style={{ marginBottom: 50 }}>{instructor.designation}</span>

                  {/* About CodeLab */}
                  <h6>Во CodeLab</h6>
                  <p>{instructor.aboutCodelab}</p>

                  <hr className="ed-team__divider" />

                  {/* Contact info (LinkedIn only) */}
                  <div className="ed-team__details-info-wrapper">
                    {instructor.social
                      .filter((s) => s.url.includes("linkedin"))
                      .map((social, idx) => (
                        <div className="ed-contact__info-item" key={idx}>
                          <div className="ed-contact__info-icon">
                            <a href={social.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: 10, alignItems: "center" }}>
                              <Image width={28} height={28} src={social.icon} alt={social.url} />
                              {social.url}
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Team Details Bottom dynamically */}
              <div className="ed-team__details-bottom">
                <h5>За Мене</h5>
                <p>{instructor.aboutMe}</p>
                <hr className="ed-team__divider" />
                <h5 className="ed-team__about-title">Професионална Позадина</h5>
                <p>{instructor.professionalBackground}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CodeLabLayout>
  );
};

export default InstructorDetailsPage;
