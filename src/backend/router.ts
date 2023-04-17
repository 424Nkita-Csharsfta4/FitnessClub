import express from 'express';
import type { Request, Response } from 'express';
import { getDataConntrollerfn, createUserControllerFn, updateUserController, deleteUserController } from './userController';

const router = express.Router();

router.route('/user/getAll').get((req: Request, res: Response) => {
  getDataConntrollerfn(req, res);
});

router.route('/user/create').post((req: Request, res: Response) => {
createUserControllerFn(req, res);
});

router.route('/user/update/:id').patch((req: Request, res: Response) => {
updateUserController(req, res);
});

router.route('/user/delete/:id').delete((req: Request, res: Response) => {
deleteUserController(req, res);
});

export default router;