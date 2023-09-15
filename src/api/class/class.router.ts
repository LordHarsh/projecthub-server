import { Router } from 'express';
import { createClass, getClass, getClasses, updateClass, deleteClass } from './class.controller';
import authenticateToken from '../../shared/middlewares/authenticate';

export default (): Router => {
    const app = Router();
    app.post('/', authenticateToken(), createClass);
    app.get('/', getClasses);
    app.get('/:classId', getClass);
    app.put('/:classId', updateClass);
    app.delete('/:classId', deleteClass);
    return app;
}