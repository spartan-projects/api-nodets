import { GenericBody, GenericResponseMessage } from '../common/common';
import { Response, Request } from 'express';

const getController = (req: Request, res: Response) => {
  const body = new GenericBody('Some good message');
  const response = new GenericResponseMessage(body, 3000);

  return res.status(200).send(response);
};

export { getController };
