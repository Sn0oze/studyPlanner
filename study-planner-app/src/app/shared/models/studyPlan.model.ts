export type Category = 'thesis' | 'general_competence' | 'technological_specialisation' |'elective';

export type TermPlacement = 'spring' | 'fall';

export interface Course {
  id: string;
  name: string;
  module: string;
  category: Category;
  placement: TermPlacement[];
  points: number;
}

export interface Term {
  order: number;
  placement: TermPlacement;
  courses: Course[];
}

export interface AcademicYear {
  year: number;
  terms: Term[];
}

export function instanceOfAcademicYear(object: any): object is AcademicYear {
  return 'terms' in object;
}

export function instanceOfTerm(object: any): object is Term {
  return 'courses' in object;
}
