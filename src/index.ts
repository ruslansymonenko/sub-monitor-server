import server from './server.ts';
import Logger from './utils/logger.ts';

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const logger = new Logger();

server.listen(PORT, async () => {
  await logger.log('info', 'Server started on port ' + PORT);
});
