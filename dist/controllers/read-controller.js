"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadController = void 0;
class ReadController {
    handle(ctx, userModel) {
        throw new Error('Method not implemented.');
    }
    constructor(userModel) {
        this.userModel = userModel;
    }
    readUsers(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = this.userModel.read(filters);
                // Send success message with users to user
                return users;
            }
            catch (error) {
                // Send error message to user
                return [];
            }
        });
    }
}
exports.ReadController = ReadController;
