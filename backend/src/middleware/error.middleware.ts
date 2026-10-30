import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { InvalidCredentialsError } from "../errors/invalidCredentials.error";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  if (err instanceof InvalidCredentialsError
    || err instanceof ZodError
  ) {
    res.status(400).json({
      message: err.message
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
  });
}