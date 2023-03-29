import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

const updateContactService = async (contactId: string, updateData) => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const foundContact = await contactRepo.findOneBy({ id: contactId });

  const updatedContact = { ...foundContact, ...updateData };

  contactRepo.save(updatedContact);

  return updatedContact;
};

export default updateContactService;
