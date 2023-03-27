import { Router } from "express";
// import createLoginController from "../controllers/login.controller";
// import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
// import { loginRequestSchema } from "../schemas/users.schemas";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import loginSchema from "../schemas/login.schemas";
import createLoginController from "../controllers/login.controller";

const loginRoutes = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(loginSchema),
  createLoginController
);

export default loginRoutes;
