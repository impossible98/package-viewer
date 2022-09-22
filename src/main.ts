// import third-party modules
import dotenv from 'dotenv';
// import local modules
import initServer from './server/server';
import { getEnv } from './utils/env';
import { showLoginInfo } from './utils/info';

dotenv.config();

function main() {
  const startTime: number = new Date().getTime();
  const port: number = parseInt(getEnv(process.env.PORT, '8080'));
  const server = initServer();

  server.listen(port, () => {
    const endTime: number = new Date().getTime();
    const costTime: number = endTime - startTime;
    showLoginInfo(port, costTime);
  });
}

main();
