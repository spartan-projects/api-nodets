import { Request, Response } from 'express';
import { GenericBody, GenericResponse } from '../common/responses';

const getProducts = (req: Request, res: Response) => {
  let dummyBody = {
    module: 'first module',
    module1: 'second module',
  };

  let responseBody: GenericBody = new GenericBody(dummyBody, 3000);
  let response: GenericResponse = new GenericResponse(
    responseBody,
    'product.ts'
  );

  res.status(200).send(response);
};

const getProduct = (req: Request, res: Response) => {
  let id: string = req.params.id;
  let dummyBody = {
    id: `${id}`,
  };

  let responseBody: GenericBody = new GenericBody(dummyBody, 3001);
  let response: GenericResponse = new GenericResponse(
    responseBody,
    'product.ts'
  );

  res.status(200).send(response);
};

const postProduct = (req: Request, res: Response) => {
  let { body } = req;

  let responseBody: GenericBody = new GenericBody(body, 4000);
  let response: GenericResponse = new GenericResponse(
    responseBody,
    'product.ts'
  );

  res.status(200).send(response);
};

const updateProduct = (req: Request, res: Response) => {
  let { body } = req;
  let compositeBody = {
    id: `${req.params.id}`,
    body: body,
  };

  let responseBody: GenericBody = new GenericBody(compositeBody, 5000);
  let response: GenericResponse = new GenericResponse(
    responseBody,
    'product.ts'
  );

  res.status(200).send(response);
};

const deleteProduct = (req: Request, res: Response) => {
  let id: string = req.params.id;
  let dummy = {
    id: id,
  };

  let responseBody: GenericBody = new GenericBody(dummy, 6000);
  let response: GenericResponse = new GenericResponse(
    responseBody,
    'product.ts'
  );

  res.status(200).send(response);
};

export { getProducts, getProduct, postProduct, updateProduct, deleteProduct };
