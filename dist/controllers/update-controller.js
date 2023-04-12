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
exports.UpdateController = void 0;
class UpdateController {
    handle(ctx, userModel) {
        UpdateController.updateHandler(ctx);
    }
    static updateHandler(ctx) {
        throw new Error('Method not implemented.');
    }
    constructor(userModel) {
        this.userModel = userModel;
    }
    updateHandler(ctx) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = (_d = (_c = (_b = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c.slice(1)) !== null && _d !== void 0 ? _d : {};
            if (!id || !name) {
                yield ctx.reply('Введите идентификатор пользователя и его новое имя через пробел');
                return;
            }
            const user = {
                id: String(id), name,
                read: undefined,
                delete: undefined,
                update: undefined
            };
            try {
                const updatedUser = this.userModel.update(user);
                yield ctx.reply(`Пользователь ${updatedUser.id} успешно обновлен: имя изменено на ${updatedUser.name}`);
            }
            catch (err) {
                yield ctx.reply(`Ошибка: ${err.message}`);
            }
        });
    }
}
exports.UpdateController = UpdateController;
