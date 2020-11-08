export interface Course {
  id: string;
  name: string;
  placement: string;
  category: string;
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
