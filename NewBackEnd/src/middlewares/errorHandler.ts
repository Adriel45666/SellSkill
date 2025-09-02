import { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404).json({ error: "Rota não encontrada" });
}

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error({ err }, "Unhandled error");
  res.status(500).json({ error: "Erro interno" });
}
