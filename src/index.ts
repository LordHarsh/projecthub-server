import express from 'express';
import Loaders from './loaders';
import config from './config';
import Logger from './loaders/logger';

async function startServer() {
  const app = express();
  await Loaders({ expressApp: app });
  app
    .listen(config.port, () => {
      Logger.info(`
      <===== Server listening on port: ${config.port} =====>
    `);
    })
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();