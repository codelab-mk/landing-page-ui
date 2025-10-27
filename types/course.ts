import { EEmployee } from "@/types/teacher";

export enum ECourseCategory {
  PROGRAMMING = "Програмирање",
}

export interface ICourse {
  id: number;
  category: ECourseCategory;
  title: string;
  lessons: number;
  teacher: EEmployee;
  price: number;
  minAge: number;
  maxAge: number;
  duration: number;
  image_url: string;
  video_url: string;
  description: string;
  whyChooseCourse: string[];
  courseContents: string[];
}
