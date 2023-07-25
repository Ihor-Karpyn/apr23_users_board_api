import { Response, Request } from 'express';

export interface User {
  id: number;
  carColorId: number;
  name: string;
}

export interface Color {
  id: number;
  name: string;
}

export type Controller = (req: Request, res: Response) => void
