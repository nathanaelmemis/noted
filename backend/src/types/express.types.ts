import { UserPayload } from "../types/user.types";

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}