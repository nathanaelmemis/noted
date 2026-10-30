import express from "express";

import authRoutes from "./modules/auth/auth.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);

app.use(errorHandler);

export default app;