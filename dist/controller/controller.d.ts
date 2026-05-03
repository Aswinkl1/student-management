import { studentServices } from "../services/service";
import { Request, Response } from "express";
export declare class studentController {
    private studentServices;
    constructor(studentServices: studentServices);
    createStudent: (req: Request, res: Response) => void;
    getAllStudents: (req: Request, res: Response) => void;
    getStudentById: (req: Request, res: Response) => void;
    updateStudnet: (req: Request, res: Response) => void;
    deleteStudent: (req: Request, res: Response) => void;
}
//# sourceMappingURL=controller.d.ts.map