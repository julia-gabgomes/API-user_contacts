import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { contact } from "../../interfaces/contact.interface";

const createContactService = async (data: contact, userId) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const createdUser = contactRepository.create({ ...data, user: userId });

  const savedUser = await contactRepository.save(createdUser);

  return savedUser;
};

export default createContactService;
