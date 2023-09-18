import express from "express";
import * as bodyparser from "body-parser";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import config from "../config";
import { RoutesConfig } from "./domain/routes.config";
import { UsersRoutes } from "./users/users.routes.config";

const app: express.Application = express();
const routes: Array<RoutesConfig> = [];

app.use(bodyparser.json());
app.use(cors());
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  })
);

routes.push(new UsersRoutes(app));

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
  })
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(`Server running at http://localhost:${config.port}`);
});

export default app;