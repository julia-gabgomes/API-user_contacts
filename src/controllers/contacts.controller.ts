import { Request, Response } from "express";
import {
  createContactService,
  listContactsService,
  updateContactService,
  softDeleteContactService,
} from "../services/contacts";

const createContactController = async (req: Request, res: Response) => {
  const createdContact = await createContactService(req.body, req.user);

  return res.status(201).json(createdContact);
};

const listContactsController = async (req: Request, res: Response) => {
  const contactsList = await listContactsService(req.user.id);

  return res.status(200).json(contactsList);
};

const updateContactController = async (req: Request, res: Response) => {
  const updatedContact = await updateContactService(
    req.params.contactId,
    req.body
  );

  return res.status(200).json(updatedContact);
};

const softDeleteContactController = async (req: Request, res: Response) => {
  await softDeleteContactService(req.params.contactId);

  return res.sendStatus(204);
};

export {
  createContactController,
  listContactsController,
  updateContactController,
  softDeleteContactController,
};
