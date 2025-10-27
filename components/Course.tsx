import { ERouteMap } from "@/constants/routes";
import { courses } from "@/data/courses";
import { ICourse } from "@/types/course";
import Image from "next/image";
import Link from "next/link";

export const Course3 = () => {
  return (
    <section className="ed-course section-gap position-relative">
      <div className="container ed-container">
        <div className="row">
          <div className="col-12">
            <div className="ed-course__filter">
              <p className="ed-course__filter-text">
                Прикажани&nbsp;1-{courses.length}&nbsp;од&nbsp;{courses.length}&nbsp;резултати
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Course Card */}
          {courses.map((course) => (
            <CourseItem course={course} containerClass="col-lg-6 col-xl-4 col-md-6 col-12" key={course.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseItem = ({ course, containerClass = "col-lg-6 col-xl-4 col-md-6 col-12" }: { course: ICourse; containerClass?: string }) => {
  return (
    <div className={containerClass}>
      <div className="ed-course__card wow fadeInUp" data-wow-duration="1s">
        <Link href={`${ERouteMap.Courses}/${course.id}`} className="ed-course__img">
          <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src={course.image_url} alt="слика-курс" />
        </Link>
        <Link href="/courses" className="ed-course__tag">
          {course.category}
        </Link>
        <div className="ed-course__body">
          <Link href={`${ERouteMap.Courses}/${course.id}`} className="ed-course__title">
            <h5>{course.title}</h5>
          </Link>
          <div className="ed-course__lesson" style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="ed-course__part">
              <i className="fi-rr-book" />
              <p>{course.lessons} Часови</p>
            </div>
            <div className="ed-course__teacher">
              <i className="fi-rr-user" />
              <p>{course.teacher}</p>
            </div>
          </div>

          <div className="ed-course__lesson" style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="ed-course__students">
              <i className="fi fi-rr-cake-birthday"></i>
              <p>
                Возраст: {course.minAge}-{course.maxAge}
              </p>
            </div>
            <div className="ed-course__students">
              <i className="fi fi-rr-clock" />
              <p> {course.duration} месеци</p>
            </div>
          </div>

          <div className="ed-course__bottom">
            <span className="ed-course__price">{course.price} мкд / месечно</span>
          </div>
        </div>
      </div>
    </div>
  );
};
