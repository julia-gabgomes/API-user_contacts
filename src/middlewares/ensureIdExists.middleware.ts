import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import AppError from "../errors/AppError";

const ensureIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idToUpdate = req.params.id;

  const userRepository = AppDataSource.getRepository(User);
  const foundId = await userRepository.findOneBy({ id: idToUpdate });

  if (!foundId) {
    throw new AppError("User doesn't exist", 404);
  }

  next();
};

export default ensureIdExistsMiddleware;
