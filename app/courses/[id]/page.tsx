"use client";
import { useRef, useState } from "react";
import { CallToAction1 } from "@/components/CallToAction/CallToAction";
import PageBanner from "@/components/PageBanner/PageBanner";
import { courses } from "@/data/courses";
import CodeLabLayout from "@/layout/CodeLabLayout";
import Image from "next/image";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const id = Number(params.id);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPaused, setIsVideoPaused] = useState(true);

  const course = courses.find((c) => c.id === id);

  const onVideoPlay = () => {
    videoRef.current?.play();
    setIsVideoPaused(false);
  };

  function Price({ value }: { value: number }) {
    return (
      <>
        {new Intl.NumberFormat("mk-MK", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value)}{" "}
        МКД
      </>
    );
  }
  if (!course) return <CodeLabLayout>❌ Курсот не е пронајден.</CodeLabLayout>;

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
                <div className="ed-course" style={{ position: "relative" }}>
                  <video
                    ref={videoRef}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: 10,
                      boxShadow: "0 6px 25px rgba(0,0,0,0.55)",
                    }}
                    onPlay={() => setIsVideoPaused(false)}
                    onPause={() => setIsVideoPaused(true)}
                    controls>
                    <track kind="captions" />
                    <source src={course.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {isVideoPaused && (
                    <button
                      onClick={onVideoPlay}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "transparent",
                        borderRadius: "50%",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
                        zIndex: 10,
                        padding: 0,
                      }}>
                      <Image width={100} height={100} src="/assets/images/icons/icon-play-blue.svg" alt="Play Button" />
                    </button>
                  )}
                </div>

                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <br />

                <div className="ed-course__details-list">
                  <h5>🧩 Што содржи програмата?</h5>
                  <ul>
                    {course.courseContents.map((item, index) => (
                      <li key={index}>
                        <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Details Content List */}
                <div className="ed-course__details-list">
                  <h5>🤔 Зошто да ја изберете оваа програма?</h5>
                  <ul>
                    {course.whyChooseCourse.map((item, index) => (
                      <li key={index}>
                        <Image width={18} height={18} sizes="100vw" style={{ width: "18px", height: "18px" }} src="/assets/images/icons/icon-check-blue.svg" alt="icon-check-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              {/* Course Details Sidebar */}
              <div className="ed-course__sidebar">
                <div className="ed-course__sidebar-widget">
                  <h4 className="ed-course__sidebar-title">Информации за програмата</h4>
                  <ul>
                    <li>
                      Цена:
                      <span>
                        <Price value={course.price} />
                      </span>
                    </li>
                    <li>
                      Наставник:<span>{course.teacher}</span>
                    </li>
                    <li>
                      Часови:<span>{course.lessons}</span>
                    </li>
                    <li>
                      Времетраење:<span>{course.duration} месеци</span>
                    </li>
                    <li>
                      Јазик:<span>Македонски</span>
                    </li>
                    <li>
                      Студенти во група:<span>8</span>
                    </li>
                    <li>
                      Диплома:<span>Да</span>
                    </li>
                  </ul>
                </div>
                <div className="ed-course__sidebar-widget">
                  <h5 className="text-center" style={{ marginBottom: 30 }}>
                    Како изгледаат часовите во CodeLab
                  </h5>

                  <div className="row" style={{ gap: 20, justifyContent: "center" }}>
                    {/* Card 1 */}
                    <div
                      className="ed-contact__info-item"
                      style={{
                        width: "300px",
                        background: "#ffffff",
                        padding: "20px 18px",
                        borderRadius: 12,
                        boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
                        textAlign: "center",
                      }}>
                      <div className="ed-contact__info-icon" style={{ marginBottom: 10 }}>
                        <Image width={38} height={38} sizes="100vw" src="/assets/codelab/icons/business-presentation.png" alt="teacher" />
                      </div>
                      <h6 style={{ fontWeight: 600, marginBottom: 8 }}>Демонстрација од наставник</h6>
                      <p style={{ fontSize: 14, margin: 0 }}>
                        Секоја задача прво се објаснува
                        <br />и се покажува чекор по чекор.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div
                      className="ed-contact__info-item"
                      style={{
                        width: "300px",
                        background: "#ffffff",
                        padding: "20px 18px",
                        borderRadius: 12,
                        boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
                        textAlign: "center",
                      }}>
                      <div className="ed-contact__info-icon" style={{ marginBottom: 10 }}>
                        <Image width={38} height={38} sizes="100vw" src="/assets/codelab/icons/talking.png" alt="interaction" />
                      </div>
                      <h6 style={{ fontWeight: 600, marginBottom: 8 }}>90% практична работа</h6>
                      <p style={{ fontSize: 14, margin: 0 }}>Учиме преку градење, секоја лекција се применува на проект.</p>
                    </div>

                    {/* Card 3 */}
                    <div
                      className="ed-contact__info-item"
                      style={{
                        width: "300px",
                        background: "#ffffff",
                        padding: "20px 18px",
                        borderRadius: 12,
                        boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
                        textAlign: "center",
                      }}>
                      <div className="ed-contact__info-icon" style={{ marginBottom: 10 }}>
                        <Image width={38} height={38} sizes="100vw" src="/assets/codelab/icons/computer.png" alt="project" />
                      </div>
                      <h6 style={{ fontWeight: 600, marginBottom: 8 }}>Креативни проекти</h6>
                      <p style={{ fontSize: 14, margin: 0 }}>Децата создаваат свои апликации, анимации и ги презентираат со гордост.</p>
                    </div>
                  </div>
                </div>
                <div className="ed-course__sidebar-widget">
                  <h4 className="ed-course__sidebar-title">Контактирајте Не</h4>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item" style={{ marginBottom: 10 }}>
                    <div className="ed-contact__info-icon">
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-phone-blue.svg" alt="icon-phone-blue" />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>Телефонски броеви</span> <br />
                      <a href="tel:+389 ‭72 278 786‬">+389 ‭72 278 786‬</a>
                      <br />
                      <a href="tel:+389 ‭78 298 116‬">+389 ‭78 298 116‬</a>
                    </div>
                  </div>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item" style={{ marginBottom: 10 }}>
                    <div className="ed-contact__info-icon">
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-envelope-blue.svg" alt="icon-envelope-blue" />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>Испратете ни порака</span>
                      <a href="mailto:contact@codelab.com.mk">contact@codelab.com.mk</a>
                    </div>
                  </div>
                  {/* Sigle Info  */}
                  <div className="ed-contact__info-item" style={{ marginBottom: 10 }}>
                    <div className="ed-contact__info-icon">
                      <Image width={28} height={28} sizes="100vw" style={{ width: "28px", height: "28px" }} src="/assets/images/icons/icon-location-blue.svg" alt="icon-location-blue" />
                    </div>
                    <div className="ed-contact__info-content">
                      <span>Нашата локација</span>
                      <a href="https://maps.app.goo.gl/5mmaySuGb6DB12Z79">16-та Македонска Бригада 2/2, Скопје</a>
                    </div>
                  </div>

                  {/* Sigle Info  */}
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
