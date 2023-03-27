import { userRegister } from "../../interfaces/user.interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

const createUserService = async (userPayload: userRegister): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const createdUser = userRepository.create(userPayload);
  const newUser = await userRepository.save(createdUser);

  return newUser;
};

export default createUserService;
