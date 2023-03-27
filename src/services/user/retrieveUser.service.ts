import { userResponse } from "../../interfaces/user.interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { userResponseSchema } from "../../schemas/user.schemas";

const retrieveUserService = async (id: string): Promise<userResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  const validatedUser = userResponseSchema.parse(user);

  return validatedUser;
};

export default retrieveUserService;
