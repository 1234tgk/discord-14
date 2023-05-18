import { prisma } from '../prisma';
import { CreateParams } from './validator';

const logService = {
  findMany: async () => {
    return prisma.log.findMany();
  },
  create: async (params: CreateParams) => {
    return prisma.log.create({
      data: params,
    });
  },
};

export default logService;
