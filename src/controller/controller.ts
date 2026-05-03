import path from "path";
import { studentServices } from "../services/service";
import { Request, Response } from "express";

export class studentController {
  constructor(private studentServices: studentServices) {}

  public createStudent = (req: Request, res: Response) => {
    try {
      // console.log(this.studentServices);
      const student = this.studentServices.createStudent(req.body);
      console.log("controller  " + student);
      res.status(200).json(student);
    } catch (error) {
      console.log(error);
      throw new Error("error in controller");
    }
  };

  public getAllStudents = (req: Request, res: Response) => {
    try {
      const students = this.studentServices.getAllStudents();
      if (students) {
        res.status(200).json(students);
        return;
      }
      res.status(400).json("error");
    } catch (error) {
      console.log(error);
      throw new Error("error in controller");
    }
  };

  public getStudentById = (req: Request, res: Response) => {
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
    } catch (error) {
      console.log(error);
      throw new Error("error in controller");
    }
  };

  public updateStudnet = (req: Request, res: Response) => {
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

  deleteStudent = (req: Request, res: Response) => {
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


