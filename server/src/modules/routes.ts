import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (_, res: Response) => {
  res.json({
    message: 'Welcome to the discord-typescript APIs!',
  });
});

export default router;
