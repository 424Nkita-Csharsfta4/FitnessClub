import type { Request, Response } from 'express';
import userService from './userService';

export const getDataConntrollerfn = async (req: Request, res: Response): Promise<void> => {
    const empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

export const createUserControllerFn = async (req: Request, res: Response): Promise<void> => {
    const status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
    console.log(req.params.id);
    console.log(req.body);

    const result = await userService.updateUserDBService(req.params.id,req.body);

    if (result) {
        res.send({ "status": true, "message": "User Updated"} );
    } else {
        res.send({ "status": false, "message": "User Update Failed" });
    }
}

export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
    console.log(req.params.id);
    const result = await userService.removeUserDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "User Deleted"} );
    } else {
        res.send({ "status": false, "message": "User Delete Failed" });
    }
}
