declare namespace Express {
  import { Request } from 'express';
  export interface Request {
    user: {
      id: string;
    };
  }
}
