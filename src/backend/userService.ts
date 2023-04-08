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
    userModelData.save((error: any, result: any) => {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

export const updateUserDBService = (id: string, userDetails: any): Promise<any> => {
  console.log(userDetails);
  return new Promise((resolve, reject) => {
    userModel.findByIdAndUpdate(id, userDetails, (error: any, result: any) => {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
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
