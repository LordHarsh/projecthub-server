import { Router } from "express";

export default (): Router => {
    const app = Router();
    app.get('/', (req, res) => {
        res.send('The is user folder');
    });
    return app;
};