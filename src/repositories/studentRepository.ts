import { IstudentRepository } from "./IstudentRepository";
import { Student } from "../model/studentModel";

export class studentRepository implements IstudentRepository {
  private studentDb: Student[] = [];
  private index = 1;
  createStudent(data: Omit<Student, "id">): Student {
    try {
      const student = new Student(
        this.index++,
        data.name,
        +data.age,
        data.course
      );
      this.studentDb.push(student);
      return student;
    } catch (error) {
      console.log(error);
      throw new Error("error in repo");
    }
  }

  getAllStudent(): Student[] {
    return this.studentDb;
  }

  getStudentById(id: number): Student | undefined {
    const index = this.studentDb.findIndex((student) => student.id == id);
    console.log(index);
    if (index == -1) {
      return undefined;
    }
    return this.studentDb[index];
  }

  updateStudent(
    id: number,
    data: Partial<Omit<Student, "id">>
  ): Student | undefined {
    const index = this.studentDb.findIndex((student) => student.id == id);

    // if there is no data with this id return
    if (!this.studentDb[index]) return undefined;

    if (data.name != undefined) {
      this.studentDb[index].name = data.name;
    }

    if (data.age != undefined) {
      this.studentDb[index].age = data.age;
    }

    if (data.course != undefined) {
      this.studentDb[index].course = data.course;
    }

    return this.studentDb[index];
  }

  deleteStudent(id: number): Boolean {
    const index = this.studentDb.findIndex((student) => student.id == id);

    if (this.studentDb[index]) {
      this.studentDb.splice(index, 1);
      return true;
    }
    return false;
  }
}
