import { Student } from "../model/studentModel";
export interface IstudentRepository {
    createStudent(data: Omit<Student, "id">): Student;
}
//# sourceMappingURL=IstudentRepository.d.ts.map