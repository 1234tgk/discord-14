import { Response, Router } from 'express';
import logRouter from './log/router';

const router = Router();

router.get('/', (_, res: Response) => {
  res.json({
    message: 'Welcome to the discord-typescript APIs!',
  });
});

router.use('/logs', logRouter);

export default router;
