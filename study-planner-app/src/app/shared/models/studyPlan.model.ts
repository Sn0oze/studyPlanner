export type Category = 'Thesis' | 'General Competence' | 'Technological Specialisation' |'Elective';

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

export interface Year {
  year: number;
  terms: Term[];
}
