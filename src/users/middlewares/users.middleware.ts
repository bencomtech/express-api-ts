import express from "express";
import debug from "debug";
import usersService from "../services/users.service";

const log: debug.IDebugger = debug("app:users-controller");
class UsersMiddleware {
  async validateUserExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = await usersService.getById(req.params.userId);

    if (user) {
      next();
    } else {
      res.status(404).send({ error: `User ${req.params.userId} not found` });
    }
  }

  async validateRequiredUserBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body && req.body.name) {
      next();
    } else {
      res.status(400).send({ error: `Missing required fields` });
    }
  }
}

export default new UsersMiddleware();
