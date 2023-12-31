import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import config from '../config';
import routes from '../api';
import { errorHandler } from '../shared/middlewares/errorHandler';
import { requestLogger } from '../shared/middlewares/logRequest';

export default ({ app }: { app: express.Application }): void => {
    app.enable('trust proxy');
    app.use(helmet());
    app.use(cors());
    app.use(bodyParser.json());
    app.use(config.api.prefix, requestLogger, routes());
    app.use(errorHandler);
  };