"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserDBService = exports.updateUserDBService = exports.createUserDBService = exports.getDataFromDBService = void 0;
var userModel_1 = require("./userModel");
var getDataFromDBService = function () {
    return new Promise(function (resolve, reject) {
        userModel_1.default.find({}, function (error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.getDataFromDBService = getDataFromDBService;
var createUserDBService = function (userDetails) {
    return new Promise(function (resolve, reject) {
        var userModelData = new userModel_1.default();
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;
        userModelData.save(function (error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(true);
            }
        });
    });
};
exports.createUserDBService = createUserDBService;
var updateUserDBService = function (id, userDetails) {
    console.log(userDetails);
    return new Promise(function (resolve, reject) {
        userModel_1.default.findByIdAndUpdate(id, userDetails, function (error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.updateUserDBService = updateUserDBService;
var removeUserDBService = function (id) {
    return new Promise(function (resolve, reject) {
        userModel_1.default.findByIdAndDelete(id, function (error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.removeUserDBService = removeUserDBService;
