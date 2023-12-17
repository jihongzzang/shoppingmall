import axios, { AxiosError } from 'axios';

export interface ErrorReponse {
  status: number | null;
  message: string;
  originalError: unknown;
}

export function isError(error: unknown): error is AxiosError {
  return axios.isAxiosError(error);
}

export function transformError(error: unknown): ErrorReponse {
  if (isError(error)) {
    return {
      status: error.response?.status ?? null,
      message: error.message,
      originalError: error,
    };
  }

  return {
    status: null,
    message: 'An unknown error occurred',
    originalError: error,
  };
}
