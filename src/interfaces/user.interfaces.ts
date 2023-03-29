import { z } from "zod";
import {
  userRequestSchema,
  userResponseSchema,
  userUpdateRequestSchema,
} from "../schemas/user.schemas";

type userRequest = z.infer<typeof userRequestSchema>;

type userResponse = z.infer<typeof userResponseSchema>;

type userUpdateRequest = z.infer<typeof userUpdateRequestSchema>;

export { userRequest, userResponse, userUpdateRequest };
