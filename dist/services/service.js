"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentServices = void 0;
class studentServices {
    studentRepo;
    constructor(studentRepo) {
        this.studentRepo = studentRepo;
    }
    createStudent(data) {
        try {
            data.age = +data.age;
            console.log(data);
            if (!(data.name && data.course && +data.age)) {
                throw new Error("invalid data");
            }
            console.log(data);
            return this.studentRepo.createStudent(data);
        }
        catch (error) {
            console.log(error);
            throw new Error("eroor in student services ");
        }
    }
    getAllStudents() {
        return this.studentRepo.getAllStudent();
    }
    getStudentById(id) {
        console.log(id);
        return this.studentRepo.getStudentById(id);
    }
    updateStudent(id, data) {
        if (data.age) {
            data.age = +data.age;
        }
        const student = this.studentRepo.updateStudent(id, data);
        return student;
    }
    deleteStudent(id) {
        return this.studentRepo.deleteStudent(id);
    }
}
exports.studentServices = studentServices;
//# sourceMappingURL=service.js.map