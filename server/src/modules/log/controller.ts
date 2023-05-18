import { NextFunction as Next, Request as Req, Response as Res } from 'express';
import { responseParams } from '../../utils';
import logService from './service';
import logValidator from './validator';

export default {
  findMany: async (req: Req, res: Res, next: Next) => {
    try {
      const logs = await logService.findMany();
      res.json(
        responseParams({
          data: logs,
        })
      );
    } catch (e) {
      next(e);
    }
  },
  create: async (req: Req, res: Res, next: Next) => {
    try {
      const params = logValidator.create(req.body);
      const log = await logService.create(params);
      res.json(
        responseParams({
          data: log,
        })
      );
    } catch (e) {
      next(e);
    }
  },
};
