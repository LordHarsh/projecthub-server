import { Request, Response, NextFunction } from 'express';

export const createClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.send('Create class');
    } catch (error) {
        next(error);
    }
}

export const getClasses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.send('Get classes');
    } catch (error) {
        next(error);
    }
}
export const getClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.send('Get class');
    } catch (error) {
        next(error);
    }
}
export const updateClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.send('Update class');
    } catch (error) {
        next(error);
    }
}
export const deleteClass = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.send('Delete class');
    } catch (error) {
        next(error);
    }
}