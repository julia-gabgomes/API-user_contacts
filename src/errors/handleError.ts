import { Request, Response, NextFunction } from "express";
import AppError from "./AppError";
import { ZodError } from "zod";

const handleError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return res.status(400).json({
      message: error.flatten().fieldErrors,
    });
  }

  console.log(error);

  return res.status(500).json({
    message: "Internal Server Error",
  });
};

export default handleError;
