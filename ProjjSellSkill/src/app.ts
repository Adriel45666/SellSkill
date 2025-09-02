import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { logger } from "./lib/logger";
import router from "./routes";
import { errorHandler, notFound } from "./middlewares/errorHandler";

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.get("/health", (req, res) => res.json({ status: "ok", uptime: process.uptime() }));
  app.use("/api", router);
  app.use(notFound);
  app.use(errorHandler);
  return app;
}
