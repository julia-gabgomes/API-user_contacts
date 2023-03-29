import { z } from "zod";
import { contactRequestSchema } from "../schemas/contact.schemas";

type contact = z.infer<typeof contactRequestSchema>;

export { contact };
