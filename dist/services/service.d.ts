import { studentRepository } from "../repositories/studentRepository";
import { Student } from "../model/studentModel";
export declare class studentServices {
    private studentRepo;
    constructor(studentRepo: studentRepository);
    createStudent(data: Omit<Student, "id">): Student;
    getAllStudents(): Student[];
    getStudentById(id: number): Student | undefined;
    updateStudent(id: number, data: Partial<Omit<Student, "id">>): Student | undefined;
    deleteStudent(id: number): Boolean;
}
//# sourceMappingURL=service.d.ts.map