import { Request, Response } from 'express';
import { ErrorHandler } from '../util/error';

type Query = {
  name: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const run = async (req: Request<unknown, unknown, unknown, Query>, _res: Response) => {
  const { name } = req.query;
  throw new ErrorHandler(404, 'Not implemented');
};

export default run;
