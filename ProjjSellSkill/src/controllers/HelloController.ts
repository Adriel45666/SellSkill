import { Request, Response } from "express";
import { HelloService } from "../services/HelloService";

export class HelloController {
  static async hello(req: Request, res: Response) {
    const result = await HelloService.getHello();
    res.json(result);
  }
}
