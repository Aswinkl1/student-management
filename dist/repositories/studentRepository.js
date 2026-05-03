"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRepository = void 0;
const studentModel_1 = require("../model/studentModel");
class studentRepository {
    studentDb = [];
    index = 1;
    createStudent(data) {
        try {
            const student = new studentModel_1.Student(this.index++, data.name, +data.age, data.course);
            this.studentDb.push(student);
            return student;
        }
        catch (error) {
            console.log(error);
            throw new Error("error in repo");
        }
    }
    getAllStudent() {
        return this.studentDb;
    }
    getStudentById(id) {
        const index = this.studentDb.findIndex((student) => student.id == id);
        console.log(index);
        if (index == -1) {
            return undefined;
        }
        return this.studentDb[index];
    }
    updateStudent(id, data) {
        const index = this.studentDb.findIndex((student) => student.id == id);
        // if there is no data with this id return
        if (!this.studentDb[index])
            return undefined;
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
    deleteStudent(id) {
        const index = this.studentDb.findIndex((student) => student.id == id);
        if (this.studentDb[index]) {
            this.studentDb.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.studentRepository = studentRepository;
//# sourceMappingURL=studentRepository.js.map