import { Router } from "express";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  userRequestSchema,
  userUpdateRequestSchema,
} from "../schemas/user.schemas";

import { createUserController } from "../controllers/users.controller";
import ensureEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import authenticateMiddleware from "../middlewares/authenticate.middleware";
import ensureIsAccountOwnerMiddleware from "../middlewares/ensureIsAccountOwner.middleware";
import { listUserController } from "../controllers/users.controller";
import ensureIdExistsMiddleware from "../middlewares/ensureIdExists.middleware";
import { updateUserController } from "../controllers/users.controller";
import { softDeleteUserController } from "../controllers/users.controller";

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
