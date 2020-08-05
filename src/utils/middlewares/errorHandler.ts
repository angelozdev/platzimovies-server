import { config } from '../../../config';
import { Request, Response, NextFunction } from 'express';
import { Boom, isBoom, badImplementation, Payload } from '@hapi/boom';

interface ErrorHandler extends Error {
   status: number;
}

const withErrorStack = (error: Payload, stack: any) => {
   if (config.DEV) {
      return { ...error, stack };
   }
   return { message: error.message };
};

export const logError = (
   err: ErrorHandler,
   _req: Request,
   _res: Response,
   next: NextFunction
) => {
   console.error(err);
   next(err);
};

export const wrapError = (
   err: ErrorHandler,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   if (!isBoom(err)) {
      next(badImplementation(err.message));
   }

   next(err);
};

export const errorHandler = (
   err: Boom,
   _req: Request,
   res: Response,
   _next: NextFunction
) => {
   const {
      output: { statusCode, payload }
   } = err;
   res.status(statusCode);
   res.json(withErrorStack(payload, err.stack));
};
