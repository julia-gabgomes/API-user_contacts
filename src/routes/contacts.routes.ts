import { Router } from "express";
import {
  authenticateMiddleware,
  ensureDataIsValidMiddleware,
  ensureIdExistsMiddleware,
  ensureIsAccountOwnerMiddleware,
} from "../middlewares";
import {
  createContactController,
  listContactsController,
  softDeleteContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import {
  contactRequestSchema,
  contactUpdateRequestSchema,
} from "../schemas/contact.schemas";

const contactsRoutes = Router();

contactsRoutes.post(
  "/:id",
  authenticateMiddleware,
  ensureDataIsValidMiddleware(contactRequestSchema),
  ensureIdExistsMiddleware,
  ensureIsAccountOwnerMiddleware,
  createContactController
);

contactsRoutes.get(
  "/:id",
  authenticateMiddleware,
  ensureIdExistsMiddleware,
  ensureIsAccountOwnerMiddleware,
  listContactsController
);

contactsRoutes.patch(
  "/:id/user/:contactId",
  authenticateMiddleware,
  ensureDataIsValidMiddleware(contactUpdateRequestSchema),
  ensureIdExistsMiddleware,
  ensureIsAccountOwnerMiddleware,
  updateContactController
);

contactsRoutes.delete(
  "/:id/user/:contactId",
  authenticateMiddleware,
  ensureIdExistsMiddleware,
  ensureIsAccountOwnerMiddleware,
  softDeleteContactController
);

export default contactsRoutes;
