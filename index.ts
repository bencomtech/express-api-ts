import * as http from "http";
import debug from "debug";
import app from "./src/app";
import db from "./src/db";
import config from "./config";

const server: http.Server = http.createServer(app);
const debugLog: debug.IDebugger = debug("app");

(async () => {
  try {
    await db.authenticate();
    debugLog("Connection has been established successfully.");
  } catch (err) {
    debugLog("Unable to connect to the database:", err);
  }

  server.listen(config.port, () => {
    debugLog(`Server running at http://localhost:${config.port}`);
  });
})();
