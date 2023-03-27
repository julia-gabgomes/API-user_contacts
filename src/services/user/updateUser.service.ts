import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import {
  userResponse,
  userUpdateRequest,
} from "../../interfaces/user.interfaces";
import { userResponseSchema } from "../../schemas/user.schemas";

const updateUserService = async (
  userData: userUpdateRequest,
  userId: string
): Promise<userResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUser = await userRepository.findOneBy({ id: userId });

  const updatedUser = userRepository.create({ ...foundUser, ...userData });
  const userNewData = await userRepository.save(updatedUser);

  const validatedUserData = userResponseSchema.parse(userNewData);

  return validatedUserData;
};

export default updateUserService;
