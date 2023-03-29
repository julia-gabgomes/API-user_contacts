import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

const softDeleteContactService = async (contactId: string) => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const foundContact = await contactRepo.findOneBy({ id: contactId });

  const softDeletedContact = { ...foundContact, isActive: false };

  contactRepo.save(softDeletedContact);

  return {};
};

export default softDeleteContactService;
