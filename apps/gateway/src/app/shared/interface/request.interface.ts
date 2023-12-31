import { Request } from 'express';

export interface AppRequest extends Request {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    role: string;
    organization?: string;
    companyId?: string;
  };
}
