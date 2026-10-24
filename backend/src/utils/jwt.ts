import jwt from "jsonwebtoken";
import { User, UserPayload } from "../types/user.types";
import env from "../config/env";
import { ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN } from "../modules/auth/auth.constants";

export function generateAccessToken(
  user: User
) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    env.JWT_SECRET,
    {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    }
  );
}

export function generateRefreshToken(
  userId: string
) {
  return jwt.sign(
    {
      sub: userId,
    },
    env.JWT_REFRESH_SECRET,
    {
      expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    }
  );
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, env.JWT_SECRET) as UserPayload;
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(
    token,
    env.JWT_REFRESH_SECRET
  ) as UserPayload;
}