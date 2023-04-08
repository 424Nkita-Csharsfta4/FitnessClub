import type { IUser } from './userModel';
import type { Document } from 'mongoose';
import userModel from './userModel';

export const getDataFromDBService = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    userModel.find({}, (error: any, result: any) => {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
};

export const createUserDBService = (userDetails: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    const userModelData = new userModel();
    userModelData.name = userDetails.name;
    userModelData.address = userDetails.address;
    userModelData.phone = userDetails.phone;
  });
};


export const updateUserDBService = (id: string, userDetails: any): Promise<Document<any, any, IUser> | null> => {
  console.log(userDetails);
  return userModel.findByIdAndUpdate(id, userDetails, { new: true }).exec();
};



export const removeUserDBService = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    userModel.findByIdAndDelete(id, (error: any, result: any) => {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
};
export const userService ={
  getDataFromDBService,
  createUserDBService,
  updateUserDBService,
  removeUserDBService
}