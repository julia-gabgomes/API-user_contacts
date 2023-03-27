import { z } from "zod";

const userRequestSchema = z.object({
  full_name: z.string().max(200),
  phone_number: z.string().max(40),
  email: z.string().email().max(150),
  password: z.string().max(40),
});

const userResponseSchema = z.object({
  id: z.string().uuid(),
  full_name: z.string().max(200),
  phone_number: z.string().max(40),
  email: z.string().email().max(150),
  isActive: z.boolean(),
  createdAt: z.date(),
});

const userUpdateRequestSchema = userRequestSchema.partial();

export { userRequestSchema, userResponseSchema, userUpdateRequestSchema };
