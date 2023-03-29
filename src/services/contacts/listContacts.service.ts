import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { userContactsResponseSchema } from "../../schemas/contact.schemas";

const listContactsService = async (userId: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const userContacts: any = await userRepo.find({
    where: { id: userId },
    relations: { contacts: true },
  });

  const validatedUserContacts = userContactsResponseSchema.parse(
    userContacts[0]
  );

  return validatedUserContacts;
};

export default listContactsService;
