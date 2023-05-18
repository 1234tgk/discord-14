import { AppError, CustomError } from './error';

const PAGE_SIZE = 100;

export function paginationParams(query: { page?: number; pageSize?: number }) {
  const pageSize = Number(query.pageSize || PAGE_SIZE) || PAGE_SIZE;
  const page = Number(query.page || 1) || 1;
  const limit = pageSize >= 10001 ? PAGE_SIZE : pageSize;
  const offset = (page - 1) * limit;
  return { offset, limit, page, pageSize };
}

type ResponseParams = {
  data?: any;
  metadata?: any;
  message?: string;
  error?: {
    status: number;
    type: string;
    errors?: CustomError[];
  };
};

export function responseParams(
  props: ResponseParams & { error?: AppError }
): ResponseParams {
  if (props.error) {
    return {
      message: props.error.message || 'error',
      ...props,
      error: {
        type: props.error.type,
        status: props.error.status,
        errors: Array.isArray(props.error.errors)
          ? props.error.errors
          : undefined,
      },
    };
  }
  return {
    message: 'success',
    ...props,
  };
}
