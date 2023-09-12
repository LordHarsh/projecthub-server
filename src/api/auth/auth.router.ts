import { validateRequest } from "@/shared/middlewares/validator";
import { Router } from "express";
import { facultyLoginSchema, facultySignupSchema } from "./auth.schema";
import { createFaculty, createStudent, loginFaculty, loginStudent } from "./auth.controller";


export default (): Router => {
    const app = Router();
    app.post('/uniSignup', validateRequest("body", facultySignupSchema), createFaculty);
    app.post('/uniLogin', validateRequest("body", facultyLoginSchema), loginFaculty);
    app.post('/studentSignup', validateRequest("body", facultySignupSchema), createStudent);
    app.post('/studentLogin', validateRequest("body", facultyLoginSchema), loginStudent);
    return app;
};