import path from 'path';
import { z } from "zod";
import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const EnvSchema = z.object({
  PORT: z.string().default("3000"),
  JWT_SECRET: z.string().min(1),
  JWT_REFRESH_SECRET: z.string().min(1),
});

const env = EnvSchema.parse(process.env);

export default env;