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
exports.CreateController = void 0;
const user_model_1 = require("../models/user-model");
const telegram_bot_utils_1 = require("../utils/telegram-bot-utils");
class CreateController {
    handle(ctx, userModel) {
        CreateController.createNewUser(ctx);
    }
    static createNewUser(ctx) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Проверяем наличие свойства message и его свойства text
                if (!ctx.message || (!ctx.message.text && !((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text))) {
                    throw new Error('Некорректное сообщение');
                }
                // Получаем текст сообщения от пользователя
                const name = ((_b = ctx.message) === null || _b === void 0 ? void 0 : _b.text) || '';
                // Создаем нового пользователя
                const newUser = {
                    id: '', name,
                    read: undefined,
                    delete: undefined,
                    update: undefined
                };
                const createdUser = yield user_model_1.User.create(newUser);
                // Отправляем сообщение пользователю об успешном создании
                const successMessage = `Новый пользователь ${createdUser.name} успешно создан!`;
                yield telegram_bot_utils_1.TelegramBotUtils.sendMessage(ctx, successMessage);
            }
            catch (error) {
                // Отправляем сообщение об ошибке, если создание пользователя не удалось
                const errorMessage = 'Не удалось создать нового пользователя. Попробуйте еще раз.';
                yield telegram_bot_utils_1.TelegramBotUtils.sendMessage(ctx, errorMessage);
            }
        });
    }
}
exports.CreateController = CreateController;
