import { Request, Response, NextFunction } from "express";
import { handleCreateClass, handleCreateQuestion, handleGetFaculty } from "./faculty.services";

export const getFaculty = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(res.locals.faculty);
        const faculty = await handleGetFaculty(res.locals.faculty._id);
        res.status(200).json({
            success: 200,
            message: "Faculty fetched successfully.",
            data: faculty
       })
    } catch (error) {
        next(error)
    }
};

// create class
export const createClass = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { name, code, description } = req.body;
        const faculty = res.locals.faculty;
        const classes = await handleCreateClass(name, code, description, faculty._id);
        res.status(200).json({
            success: 200,
            message: "Class created successfully.",
            data: classes
       })
    } catch (error) {
        next(error)
    }
};

export const createQuestion = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try{
        const { name, code, description } = req.body;
        const faculty = res.locals.faculty;
        const classes = await handleCreateQuestion(req.body.title, req.body.question);
        res.status(200).json({
            success: 200,
            message: "Question created successfully.",
            data: classes
       })
    } catch (error) {
        next(error)
    }
}