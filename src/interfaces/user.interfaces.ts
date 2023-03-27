import { z } from "zod";
import { userRegisterSchema, userReturnSchema } from "../schemas/user.schemas";

type userRegister = z.infer<typeof userRegisterSchema>;

type userReturn = z.infer<typeof userReturnSchema>;

export { userRegister, userReturn };
