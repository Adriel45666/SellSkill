import { Request, Response } from "express";
import { http } from "../utils/http";

export class HttpController {
  static async ip(req: Request, res: Response) {
    const { data } = await http.get("/ip");
    res.json(data);
  }
}
