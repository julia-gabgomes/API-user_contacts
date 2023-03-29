import { z } from "zod";

const contactRequestSchema = z.object({
  full_name: z.string().max(200),
  phone_number: z.string().max(40),
  email: z.string().email().max(150),
});

const userContactsResponseSchema = z.object({
  id: z.string().uuid(),
  full_name: z.string().max(200),
  phone_number: z.string().max(40),
  email: z.string().email().max(150),
  isActive: z.boolean(),
  createdAt: z.date(),
  contacts: z.array(
    z.object({
      id: z.string().uuid(),
      full_name: z.string().max(200),
      phone_number: z.string().max(40),
      email: z.string().email().max(150),
      isActive: z.boolean(),
      createdAt: z.date(),
    })
  ),
});

const contactUpdateRequestSchema = contactRequestSchema.partial();

export {
  contactRequestSchema,
  userContactsResponseSchema,
  contactUpdateRequestSchema,
};
