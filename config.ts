import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || "<PORT>",
  dbConfig: {
    db: process.env.DB_NAME || "<DB_NAME>",
    user: process.env.DB_USER || "<DB_USER>",
    password: process.env.DB_PASSWORD || "<DB_PASSWORD>",
    host: process.env.DB_HOST || "<DB_HOST>",
    port: process.env.DB_PORT || "<DB_PORT>",
  },
};
