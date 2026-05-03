import { studentRepository } from "../repositories/studentRepository";
import { Student } from "../model/studentModel";

export class studentServices {
  constructor(private studentRepo: studentRepository) {}

  createStudent(data: Omit<Student, "id">): Student {
    try {
      data.age = +data.age;
      console.log(data);
      if (!(data.name && data.course && +data.age)) {
        throw new Error("invalid data");
      }
      console.log(data);
      return this.studentRepo.createStudent(data);
    } catch (error) {
      console.log(error);
      throw new Error("eroor in student services ");
    }
  }

  getAllStudents(): Student[] {
    return this.studentRepo.getAllStudent();
  }

  getStudentById(id: number): Student | undefined {
    console.log(id);
    return this.studentRepo.getStudentById(id);
  }

  updateStudent(
    id: number,
    data: Partial<Omit<Student, "id">>
  ): Student | undefined {
    if (data.age) {
      data.age = +data.age;
    }

    const student = this.studentRepo.updateStudent(id, data);

    return student;
  }

  deleteStudent(id: number): Boolean {
    return this.studentRepo.deleteStudent(id);
  }
}
