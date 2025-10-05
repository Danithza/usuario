import { Request, Response } from "express";
import { UserServiceImpl } from "../../../../application/service/UserServiceImpl";

const userService = new UserServiceImpl();

export class UserController {
  async add(req: Request, res: Response) {
    const result = await userService.add(req.body);
    res.status(201).json(result);
  }

  async update(req: Request, res: Response) {
    const result = await userService.update(Number(req.params.id), req.body);
    res.json(result);
  }

  async delete(req: Request, res: Response) {
    await userService.delete(Number(req.params.id));
    res.status(204).send();
  }

  async deactivate(req: Request, res: Response) {
    const result = await userService.deactivate(Number(req.params.id));
    res.json(result);
  }

  async changeRole(req: Request, res: Response) {
    const result = await userService.changeRole(Number(req.params.id), req.body.role);
    res.json(result);
  }

  async findById(req: Request, res: Response) {
    const result = await userService.findById(Number(req.params.id));
    res.json(result);
  }

  async list(req: Request, res: Response) {
    const result = await userService.list();
    res.json(result);
  }
}
