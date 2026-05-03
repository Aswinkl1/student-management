"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
class studentController {
    studentServices;
    constructor(studentServices) {
        this.studentServices = studentServices;
    }
    createStudent = (req, res) => {
        try {
            // console.log(this.studentServices);
            const student = this.studentServices.createStudent(req.body);
            console.log("controller  " + student);
            res.status(200).json(student);
        }
        catch (error) {
            console.log(error);
            throw new Error("error in controller");
        }
    };
    getAllStudents = (req, res) => {
        try {
            const students = this.studentServices.getAllStudents();
            if (students) {
                res.status(200).json(students);
                return;
            }
            res.status(400).json("error");
        }
        catch (error) {
            console.log(error);
            throw new Error("error in controller");
        }
    };
    getStudentById = (req, res) => {
        try {
            const id = req.params.id;
            if (!id) {
                console.log("no id");
                throw new Error("no id found");
            }
            const student = this.studentServices.getStudentById(+id);
            if (student) {
                res.status(200).json(student);
                return;
            }
            res.status(404).json({ eroor: "student not found" });
        }
        catch (error) {
            console.log(error);
            throw new Error("error in controller");
        }
    };
    updateStudnet = (req, res) => {
        const id = req.params.id;
        if (!id) {
            console.log("no id");
            res.status(404).json({ error: "provide a valid error" });
            return;
        }
        const student = this.studentServices.updateStudent(+id, req.body);
        if (student) {
            res.status(200).json(student);
            return;
        }
        res.status(404).json({ error: "coundn't update the student" });
    };
    deleteStudent = (req, res) => {
        const id = req.params.id;
        if (typeof id == "undefined" || isNaN(+id)) {
            res.status(404).json({ message: "enter a valid id" });
            return;
        }
        const student = this.studentServices.deleteStudent(+id);
        if (student) {
            res.status(200).json({ message: "success" });
            return;
        }
        res.status(400).json({ message: "faild" });
    };
}
exports.studentController = studentController;
//# sourceMappingURL=controller.js.map