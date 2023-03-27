import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().max(150),
  password: z.string().max(40),
});

export default loginSchema;
