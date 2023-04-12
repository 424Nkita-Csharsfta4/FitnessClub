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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramBotUtils = void 0;
const axios_1 = __importDefault(require("axios"));
class TelegramBotUtils {
    static sendMessage(chat, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post('https://api.telegram.org/bot' + process.env.TELEGRAM_BOT_TOKEN + '/sendMessage', {
                chat_id: chat.params,
                text,
            });
            return response.data;
        });
    }
    static deleteMessage(chat, messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default.post('https://api.telegram.org/bot' + process.env.TELEGRAM_BOT_TOKEN + '/deleteMessage', {
                chat_id: chat.params,
                message_id: messageId,
            });
        });
    }
}
exports.TelegramBotUtils = TelegramBotUtils;
