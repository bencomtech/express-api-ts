import express from "express";
import { RoutesConfig } from "../domain/routes.config";
import UsersController from "./controllers/users.controller";
import UsersMiddleware from "./middlewares/users.middleware";

export class UsersRoutes extends RoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRoutes() {
    this.app
      .route(`/users`)
      .get(UsersController.getUsers)
      .post(
        UsersMiddleware.validateRequiredUserBodyFields,
        UsersController.createUser
      );

    this.app
      .route(`/users/:userId`)
      .all(UsersMiddleware.validateUserExists)
      .get(UsersController.getUser)
      .put(
        UsersMiddleware.validateRequiredUserBodyFields,
        UsersController.updateUser
      )
      .delete(UsersController.removeUser);

    return this.app;
  }
}
