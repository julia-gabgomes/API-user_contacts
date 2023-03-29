import { Router } from "express";

import {
  userRequestSchema,
  userUpdateRequestSchema,
} from "../schemas/user.schemas";

import {
  createUserController,
  listUserController,
  updateUserController,
  softDeleteUserController,
} from "../controllers/users.controller";

import {
  ensureDataIsValidMiddleware,
  ensureEmailAvailabilityMiddleware,
  authenticateMiddleware,
  ensureIsAccountOwnerMiddleware,
  ensureIdExistsMiddleware,
} from "../middlewares/index";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRequestSchema),
  ensureEmailAvailabilityMiddleware,
  createUserController
);
userRoutes.get(
  "/:id",
  authenticateMiddleware,
  ensureIdExistsMiddleware,
  ensureIsAccountOwnerMiddleware,
  listUserController
);
userRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(userUpdateRequestSchema),
  authenticateMiddleware,
  ensureEmailAvailabilityMiddleware,
  ensureIdExistsMiddleware,
  ensureIsAccountOwnerMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  authenticateMiddleware,
  ensureIdExistsMiddleware,
  ensureIsAccountOwnerMiddleware,
  softDeleteUserController
);

export default userRoutes;
