import { ERouteMap } from "@/constants/routes";
import { ECourseCategory, ICourse } from "@/types/course";
import { EEmployee } from "@/types/teacher";
import Image from "next/image";
import Link from "next/link";

export const Course3 = () => {
  const courses: ICourse[] = [
    {
      id: 1,
      category: ECourseCategory.PROGRAMMING,
      title: "Програмирање за Деца",
      lessons: 64,
      teacher: EEmployee.HRISTINA_TRAJCEVSKA,
      price: 1800,
      minAge: 7,
      maxAge: 10,
      image: "/assets/codelab/images/1.svg",
      duration: 8,
    },
    {
      id: 2,
      category: ECourseCategory.PROGRAMMING,
      title: "Основи на Програмирање",
      lessons: 64,
      teacher: EEmployee.GORAN_BLAZHEVSKI,
      price: 2000,
      minAge: 11,
      maxAge: 14,
      image: "/assets/codelab/images/2.svg",
      duration: 8,
    },
  ];
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
        <Link href={`/${ERouteMap.Courses}/${course.id}`} className="ed-course__img">
          <Image width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} src={course.image} alt="слика-курс" />
        </Link>
        <Link href="/courses" className="ed-course__tag">
          {course.category}
        </Link>
        <div className="ed-course__body">
          <Link href={`/${ERouteMap.Courses}/${course.id}`} className="ed-course__title">
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
