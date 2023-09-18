import express from "express";
import debug from "debug";
import usersService from "../services/users.service";

const log: debug.IDebugger = debug("app:users-controller");
class UsersController {
  async getUsers(req: express.Request, res: express.Response) {
    const users = await usersService.list(50, 0);

    res.status(200).send(users);
  }

  async getUser(req: express.Request, res: express.Response) {
    const { userId } = req.params;
    const user = await usersService.getById(userId);

    res.status(200).send(user);
  }

  async createUser(req: express.Request, res: express.Response) {
    const user = await usersService.create(req.body);

    res.status(201).send(user);
  }

  async updateUser(req: express.Request, res: express.Response) {
    const { userId } = req.params;
    const affectedRows = await usersService.updateById(userId, req.body);

    res.status(200).send({
      affected_rows: affectedRows,
    });
  }

  async removeUser(req: express.Request, res: express.Response) {
    const { userId } = req.params;
    const affectedRows = await usersService.deleteById(userId);

    res.status(200).send({
      affected_rows: affectedRows,
    });
  }
}

export default new UsersController();
