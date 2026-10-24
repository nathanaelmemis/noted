import { LoginDto } from "./auth.schema";
import { User } from "../../types/user.types";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../../utils/jwt";

import { verifyPassword } from './utils/password';

const mockUser: User = {
  id: '0',
  email: "test@gmail.com",
  passwordHash: "$argon2i$v=19$m=16,t=2,p=1$V2M1Z09VVGFka0dqMXBCTA$eUBFbQrGFzaLc/LpybQVvg",
  name: "testName",
  instruments: ["drums", "guitar"]
};

export async function login(data: LoginDto) {
  // get user here
  const user = mockUser;

  const isValid = await verifyPassword(user.passwordHash, data.password);

  if (!isValid) {
    throw new Error("Invalid credentials");
  }

  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user.id)
  };
}

export async function refresh(
  refreshToken: string
) {
  const payload = verifyRefreshToken(refreshToken);

  // get user here
  const user = mockUser;

  // const user =
  //   await userRepository.findById(
  //     payload.sub
  //   );

  // if (!user) {
  //   throw new AppError(
  //     "User not found",
  //     401
  //   );
  // }

  return {
    accessToken: generateAccessToken(user),
    refreshToken: generateRefreshToken(user.id)
  };
}