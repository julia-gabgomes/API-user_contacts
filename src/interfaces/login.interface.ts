import loginSchema from "../schemas/login.schemas";
import { z } from "zod";

type login = z.infer<typeof loginSchema>;

export default login;
