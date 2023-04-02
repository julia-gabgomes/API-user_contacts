import login from "../../interfaces/login.interface";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import "dotenv/config";

const createLoginService = async (loginData: login) => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUser = await userRepository.findOneBy({ email: loginData.email });

  if (!foundUser) {
    throw new AppError("Invalid user/password key", 403);
  }

  const passwordMatch = compareSync(loginData.password, foundUser.password);

  if (!passwordMatch) {
    throw new AppError("Invalid user/password key", 403);
  }

  const token = sign({ sub: foundUser.id }, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
  });

  return { token: token, id: foundUser.id };
};

export default createLoginService;
