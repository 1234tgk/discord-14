import { ERROR_STATUS, ERROR_TYPE } from '../constants';

export interface CustomError {
  type: string;
  message?: string;
}

export class AppError extends Error {
  public status: number;
  public type: string;
  public errors?: CustomError[];
  constructor(
    message: string,
    opts?: {
      status: number;
      type: string;
      errors?: CustomError[];
    }
  ) {
    super(message);
    this.status = (opts && opts.status) || ERROR_STATUS.GENERIC_ERROR;
    this.type = (opts && opts.type) || ERROR_TYPE.GENERIC_ERROR;
    this.errors = opts && opts.errors;
  }
}
