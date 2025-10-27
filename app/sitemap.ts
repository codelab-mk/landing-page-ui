import { instructors } from "@/data/instructors";
import { courses } from "@/data/courses";

export default function sitemap() {
  const baseUrl = "https://codelab.com.mk";

  const staticRoutes = ["", "/about", "/contact", "/courses", "/faq", "/policy", "/team"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const dynamicCourseRoutes = courses.map((c) => ({
    url: `${baseUrl}/courses/${c.id}`,
    lastModified: new Date().toISOString(),
  }));

  const dynamicTeamRoutes = instructors.map((t) => ({
    url: `${baseUrl}/team/${t.id}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...dynamicCourseRoutes, ...dynamicTeamRoutes];
}
