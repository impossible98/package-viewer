// import third-party modules
import express from 'express';
import type { Express, Response } from 'express';

function initRouter() {
  const app: Express = express();

  app.get('/', (_req, res: Response) => {
    res.send('Hello World!');
  });

  return app;
}

export default initRouter;
