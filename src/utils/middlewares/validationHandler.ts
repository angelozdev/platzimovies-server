import { Schema } from 'yup';
import { Request, Response, NextFunction } from 'express';

type Check = 'body' | 'params';

const validate = (check: string, schema: Schema<any>): string | null => {
   const isValid = schema.isValidSync(check);
   if (!isValid) return 'Invalid';

   return null;
};

export const validateHandler = (schema: Schema<any>, check: Check = 'body') => {
   return (req: Request, res: Response, next: NextFunction) => {
      const error = validate(req[check], schema);

      error ? next(new Error(error)) : next();
   };
};
