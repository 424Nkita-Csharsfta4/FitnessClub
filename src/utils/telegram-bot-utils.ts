import axios from 'axios';
import { Message, KeyboardButton } from '../types/bot-types';

export class TelegramBotUtils {
    static async sendMessage(chat: KeyboardButton, text: string): Promise<Message> {
        const response = await axios.post<Message>('https://api.telegram.org/bot' + process.env.TELEGRAM_BOT_TOKEN + '/sendMessage', {
            chat_id: chat.params,
            text,
        });

        return response.data;
    }

    static async deleteMessage(chat: KeyboardButton, messageId: number): Promise<void> {
        await axios.post('https://api.telegram.org/bot' + process.env.TELEGRAM_BOT_TOKEN + '/deleteMessage', {
            chat_id: chat.params,
            message_id: messageId,
        });
    }
}
