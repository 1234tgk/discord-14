import Joi from 'joi';
import { AppError, CustomError } from './error';
import { ERROR_TYPE, ERROR_STATUS } from '../constants';

function convertJoiErrorsToCustomErrors(
  errors: Joi.ValidationErrorItem[]
): CustomError[] {
  const details: CustomError[] = [];
  errors.map((error) => {
    details.push({
      type: error.path.join('.'),
      message: error.message,
    });
  });
  return details;
}

export function validateParams<ParamsType>(
  params: any,
  schema: Joi.Schema<ParamsType>
): ParamsType {
  const { value, error } = schema.validate(params);
  if (error) {
    throw new AppError(
      `Validatation failed: ${error.details.map((e) => e.message)}`,
      {
        status: ERROR_STATUS.BAD_REQUEST,
        type: ERROR_TYPE.GENERIC_ERROR,
        errors: convertJoiErrorsToCustomErrors(error.details),
      }
    );
  }
  return value;
}
