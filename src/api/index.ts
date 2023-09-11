import { Router } from "express";
import testRouter from "./test/test.router";

export default (): Router => {
    const app = Router();
    app.use('/test', testRouter());
    app.use('/user', testRouter());
    return app;
};