import Joi from 'joi';
import { validateParams } from '../../utils/validation';

export type CreateParams = {
  message: string;
};

export default {
  create(params: any) {
    const schema = Joi.object<CreateParams>({
      message: Joi.string().required(),
    }).options({ stripUnknown: true });
    return validateParams(params, schema);
  },
};
