// import third-party modules
import type { Express } from 'express';
// import local modules
import initRouter from './router/index';

function initServer() {
  const router: Express = initRouter();

  return router;
}

export default initServer;
