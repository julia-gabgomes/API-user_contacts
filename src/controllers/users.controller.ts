import { Request, Response } from "express";

import { userResponseSchema } from "../schemas/user.schemas";
import { userUpdateRequest } from "../interfaces/user.interfaces";

import {
  createUserService,
  retrieveUserService,
  updateUserService,
  softDeleteUserService,
} from "../services/user/index";

const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;

  const newUserData = await createUserService(userData);

  const sentData = userResponseSchema.parse(newUserData);

  return res.status(201).json(sentData);
};

const listUserController = async (req: Request, res: Response) => {
  const user = await retrieveUserService(req.params.id);

  return res.json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const updateData: userUpdateRequest = req.body;

  const updatedUser = await updateUserService(updateData, req.params.id);

  return res.status(200).json(updatedUser);
};

const softDeleteUserController = async (req: Request, res: Response) => {
  const status = await softDeleteUserService(req.params.id);
  return res.sendStatus(status);
};

export {
  createUserController,
  listUserController,
  updateUserController,
  softDeleteUserController,
};
