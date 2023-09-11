import { Request, Response } from "express";
import { ApiError } from "next/dist/server/api-utils";

export interface APIError extends Error {
    message: string;
    statusCode?: number;
}

export const errorHandler = (error: ApiError, req: Request, res: Response) => {
    console.log(error);
    res.status(error.statusCode ?? 500).json({
        success: false,
        message: error.message ?? 'SERVER_ERROR',
    });
}