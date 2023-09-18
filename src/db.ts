import { Sequelize } from "sequelize";
import config from "../config";

const db = new Sequelize(
  config.dbConfig.db,
  config.dbConfig.user,
  config.dbConfig.password,
  {
    host: config.dbConfig.host,
    port: Number(config.dbConfig.port),
    dialect: "mysql",
    dialectOptions: {
      requestTimeout: 1000 * 30,
      options: {
        encrypt: true,
      },
    },
  }
);

export default db;
