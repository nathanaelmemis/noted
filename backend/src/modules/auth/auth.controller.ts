import { Request, Response } from "express";

import * as authService from './auth.service';
import { LoginDto, LoginSchema } from "./auth.schema";

export async function login(req: Request, res: Response) {
  const dto: LoginDto = LoginSchema.parse(req.body);
  const result = await authService.login(dto);

  res.cookie("refreshToken", result.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  res.status(200).json({
    accessToken: result.accessToken
  });
}

export async function refresh(
  req: Request,
  res: Response
) {
  const tokens =
    await authService.refresh(
      req.body.refreshToken
    );

  res.json(tokens);
}