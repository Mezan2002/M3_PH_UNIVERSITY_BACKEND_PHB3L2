import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';

const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log('Hello world!');
  next();
};

const router = express.Router();

router.post('/create-student', shenaBahini, UserControllers.createStudent);

export const UserRoutes = router;
