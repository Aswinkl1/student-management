"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentRepository_1 = require("./repositories/studentRepository");
const service_1 = require("./services/service");
const controller_1 = require("./controller/controller");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
const repoInstance = new studentRepository_1.studentRepository();
const studentServicesInstance = new service_1.studentServices(repoInstance);
const studentControllerInstance = new controller_1.studentController(studentServicesInstance);
// app.get("/", studentControllerInstance.homePageRender);
app.post("/student/add", studentControllerInstance.createStudent);
app.get("/student", studentControllerInstance.getAllStudents);
app.get("/student/:id", studentControllerInstance.getStudentById);
app.put("/student/:id", studentControllerInstance.updateStudnet);
app.delete("/student/:id", studentControllerInstance.deleteStudent);
app.listen(3000, () => console.log("server is running on port 3000"));
//# sourceMappingURL=index.js.map