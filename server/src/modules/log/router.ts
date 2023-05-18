import { Router } from 'express';
import controller from './controller';

const router = Router();

router.route('/').get(controller.findMany).post(controller.create);

export default router;
