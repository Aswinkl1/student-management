import { Student } from "../model/studentModel";

export interface IstudentRepository {
  createStudent(data: Omit<Student, "id">): Student;

  // getAllStudent(): Student[];

  // getStudentById(id: number): Student | undefined;

  // updateStudent(id: number, date: Partial<Omit<Student, "id">>): void;

  // deleteStudent(id: number): Boolean;
}
