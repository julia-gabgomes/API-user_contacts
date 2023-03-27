import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const ensureIsAccountOwnerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const userId = req.user.id;

  if (userId == id) {
    next();
  } else {
    throw new AppError("Must be account owner.", 401);
  }
};

export default ensureIsAccountOwnerMiddleware;
