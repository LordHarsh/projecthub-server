import { Request, Response, NextFunction } from "express";
import { handleCreateFaculty, handleCreateStudent, handleFacultyLogin, handleStudentLogin } from "./auth.services";
// Controller for creating a new faculty
export const createFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await handleCreateFaculty(
      req.body.designation,
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.password
    );
    res.status(200).send({
      success: true,
      message: "Faculty created successfully",
    });
  } catch (error) {
    next(error);
  }
};
// Controller for logging in a faculty
export const loginFaculty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await handleFacultyLogin(req.body.email, req.body.password);
    res.status(200).send({
      success: true,
      message: "Faculty logged in successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};

// Controller for creating a new student
export const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        await handleCreateStudent(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password
        );
        res.status(200).send({
        success: true,
        message: "Student created successfully",
        });
    } catch (error) {
        next(error);
    }
};

// Controller for logging in a student
export const loginStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = await handleStudentLogin(req.body.email, req.body.password);
        res.status(200).send({
        success: true,
        message: "Student logged in successfully",
        token,
        });
    } catch (error) {
        next(error);
    }
};