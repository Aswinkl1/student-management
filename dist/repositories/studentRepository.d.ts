import { IstudentRepository } from "./IstudentRepository";
import { Student } from "../model/studentModel";
export declare class studentRepository implements IstudentRepository {
    private studentDb;
    private index;
    createStudent(data: Omit<Student, "id">): Student;
    getAllStudent(): Student[];
    getStudentById(id: number): Student | undefined;
    updateStudent(id: number, data: Partial<Omit<Student, "id">>): Student | undefined;
    deleteStudent(id: number): Boolean;
}
//# sourceMappingURL=studentRepository.d.ts.map