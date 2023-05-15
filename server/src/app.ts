import express from 'express';
import morgan from 'morgan';
import routes from './modules/routes';

export default function (): express.Application {
  const app = express();

  // Log HTTP Requests
  app.use(morgan(':method :url :status - :response-time ms'));

  app.use('/', routes);

  return app;
}
