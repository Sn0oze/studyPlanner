export type Category = 'thesis' | 'general competence' | 'technological Specialisation' |'elective';

export interface Course {
  id: string;
  name: string;
  placement: string;
  category: Category;
  points: number;
}

export interface Term   {
  order: number;
  placement: string;
  courses: Course[];
}

export interface AcademicYear {
  year: number;
  terms: Term[];
}
