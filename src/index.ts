import server from './server.ts';
import { logger } from './utils/logger.js';

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

server.listen(PORT, async () => {
  await logger.log('info', 'Server started on port ' + PORT);
});
