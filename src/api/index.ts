import { Router } from "express";
import authRouter from "./auth/auth.router";
import facultyRouter from "./faculty/faculty.router";

export default (): Router => {
    const app = Router();
    app.use("/auth", authRouter());
    app.use("/faculty",  facultyRouter());
    return app;
};