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
  image: string;
  duration: number;
}
