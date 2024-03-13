export interface IOrg {
  id?: string;
  name: string;
  code: string;
  discription: string;
  parentId?: string;
  type?: OrgType;
}

export enum OrgType {
  University = 0,
  School = 1,
  Department = 2,
}

export interface IDepartment {
  id: string;
  name: string;
  code: string;
  description: string;
  programs: IProgram[];
}

export interface IProgram {
  id: string;
  name: string;
  code: string;
  description: string;
  modules?: IModule[];
  concentrations?: Concetration[];
}

export type Concetration = {
  id?: string;
  name: string;
  programId: string;
  modules?: IModule[];
};

export interface IModule {
  id?: string;
  name: string;
  programId: string;
  concentrationId?: string;
  courses?: ICourse[];
}

export interface ICourse {
  id?: string;
  name: string;
  code: string;
  description: string;
  credit: number;
  gradeType: GradeType;
  programId: string;
  concentrationId?: string;
}

export enum GradeType {
  NonCredit = 0,
  Credit = 1,
}

export enum CourseType {
  Major = 0,
  Minor = 1,
  Common = 2,
}

export type CourseOffering = {
  Id: string;
  CourseId: string;
  YearId: number;
  SemesterId: number;
  Course: ICourse | null;
  OfferYear: number;
};

export type Batch = {
  id?: string;
  name: string;
  academicYear: number;
  programId: string;
};
export type YearSemester = {
  Id: number;
  YearId: number;
  SemesterId: number;
  CourseOfferings: CourseOffering[];
  Semester: Semester | null;
  Year: Year | null;
};

export type Year = {
  Id: number;
  Year1: string | null;
  YearSemesters: YearSemester[];
};

export type Semester = {
  Id: number;
  Semester1: string | null;
  YearSemesters: YearSemester[];
};

export interface signupBody {
  fullName: string;
  email: string;
  password: string;
  role?: string;
}

export interface loginBody {
  email: string;
  password: string;
}

export interface loginRes {
  email: string;
  fullName: string;
  token: string;
  role: string;
}

export interface IUser {
  email: string;
  role: string;
  fullName: string;
  id: string | number;
  token: string;
}

export type StudentApplication = {
  id: string;
  bigObject: object;
  status: StudentApplicationStatus;
  ApplicationDate: string;
};

export enum StudentApplicationStatus {
  Applicant,
  Exam,
  Interview,
  Student,
}

export enum ExamStatus {
  Pending,
  Pass,
  Fail,
}
export enum ProgramStream {
  FullTime,
  PartTime,
}

export enum TheoBackground {
  Theological,
  NonTheological,
}
export type Instructor = {
  id: string;
  firstName: string;
  lastName: string;
  personalTitle: string;
  sex: string;
  qualification: string;
  Position: string;
  photo: string;
  denomination: string;
  mobile: string;
  officePhone?: string;
  postAddress?: string;
  email: string;
  isActive: boolean;
  type: string;
};
