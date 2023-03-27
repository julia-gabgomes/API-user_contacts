import { Router } from "express";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { userRegisterSchema } from "../schemas/user.schemas";

import { createUserController } from "../controllers/users.controller";
import ensureEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import ensureAuthMiddleware from "../middlewares/authenticate.middleware";
import ensureIsAccountOwnerMiddleware from "../middlewares/ensureIsAccountOwner.middleware";
import { listUserController } from "../controllers/users.controller";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userRegisterSchema),
  ensureEmailAvailabilityMiddleware,
  createUserController
);
userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAccountOwnerMiddleware,
  listUserController
);
userRoutes.patch(
  "/:id"
  // verifyFieldToUpdateMiddleware,
  // ensureDataIsValidMiddleware(updateRequestSchema),
  // ensureAuthMiddleware,
  // ensureIsValidIdMiddleware,
  // verifyUserPermissionMiddleware,
  // updateUserController
);
userRoutes.delete(
  "/:id"
  // ensureAuthMiddleware,
  // ensureIsAdmMiddleware,
  // ensureIsValidIdMiddleware,
  // softDeleteUserController
);

export default userRoutes;
