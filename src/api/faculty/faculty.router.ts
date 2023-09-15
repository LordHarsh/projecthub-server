import { Router } from "express";
import { createQuestion, getFaculty } from "./faculty.controller";
import authenticateFaculty from "../../shared/middlewares/authenticate";

export default ():Router => {
    const app = Router();
    app.get('/', authenticateFaculty(), getFaculty)
    app.post('/createclass', authenticateFaculty(), getFaculty)
    app.post('/postquestion', authenticateFaculty(), createQuestion)
    return app;
}