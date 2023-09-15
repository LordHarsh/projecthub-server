import { validateRequest } from "../../shared/middlewares/validator";
import { Router } from "express";
import { facultyLoginSchema, facultySignupSchema, studentLoginSchema, studentSignupSchema } from "./auth.schema";
import { createFaculty, createStudent, loginFaculty, loginStudent } from "./auth.controller";


export default (): Router => {
    const app = Router();
    app.post('/facultySignup', validateRequest("body", facultySignupSchema), createFaculty);
    app.post('/facultyLogin', validateRequest("body", facultyLoginSchema), loginFaculty);
    app.post('/studentSignup', validateRequest("body", studentSignupSchema), createStudent);
    app.post('/studentLogin', validateRequest("body", studentLoginSchema), loginStudent);
    return app;
};