import { userReturn } from "../../interfaces/user.interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { userReturnSchema } from "../../schemas/user.schemas";

const retrieveUserService = async (id: string): Promise<userReturn> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  const validatedUser = userReturnSchema.parse(user);

  return validatedUser;
};

export default retrieveUserService;
