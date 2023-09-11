import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../jwt";
import database from "../../loaders/database";

export default function authenticateToken() {
  return async (req: Request, res: Response, next: NextFunction) => {
    const bearer_token = req.headers["authorization"];
    const token = bearer_token?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    try {
      const email = verifyToken(token);
      const db = await database();
      const user = (await db).collection("users").findOne({
        email,
      });
      if (!user) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }
      res.locals.user = user;
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  };
}
