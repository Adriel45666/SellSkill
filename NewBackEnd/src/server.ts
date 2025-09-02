import { createApp } from "./app";
import { env } from "./config/env";
import { logger } from "./lib/logger";

const app = createApp();
const port = env.PORT;

app.listen(port, () => {
  logger.info({ port }, `🚀 Server rodando em http://localhost:${port}`);
});
