import express from "express";

import { Express } from "express";

import { studentRepository } from "./repositories/studentRepository";
import { studentServices } from "./services/service";
import { studentController } from "./controller/controller";
import path from "path";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

const repoInstance = new studentRepository();
const studentServicesInstance = new studentServices(repoInstance);
const studentControllerInstance = new studentController(
  studentServicesInstance
);
// app.get("/", studentControllerInstance.homePageRender);
app.post("/student/add", studentControllerInstance.createStudent);
app.get("/student", studentControllerInstance.getAllStudents);
app.get("/student/:id", studentControllerInstance.getStudentById);
app.put("/student/:id", studentControllerInstance.updateStudnet);
app.delete("/student/:id", studentControllerInstance.deleteStudent);

app.listen(3000, () => console.log("server is running on port 3000"));
