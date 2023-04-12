import { Context } from 'telegraf';
import { User } from '../models/user-model';
import { TelegramBotUtils } from '../utils/telegram-bot-utils';

export class CreateController {
  handle(ctx: any, userModel: any): void {
    CreateController.createNewUser(ctx);
  }
  
  static async createNewUser(ctx: Context): Promise<void> {
    try {
      // Проверяем наличие свойства message и его свойства text
      if (!ctx.message || (!ctx.message.text && !ctx.message?.text)) {
        throw new Error('Некорректное сообщение');
      }
      
      // Получаем текст сообщения от пользователя
      const name: string = ctx.message?.text || '';

      // Создаем нового пользователя
      const newUser: User = {
        id: '', name,
        read: undefined,
        delete: undefined,
        update: undefined
      };
      const createdUser: User = await User.create(newUser);

      // Отправляем сообщение пользователю об успешном создании
      const successMessage: string = `Новый пользователь ${createdUser.name} успешно создан!`;
      await TelegramBotUtils.sendMessage(ctx, successMessage);
    } catch (error) {
      // Отправляем сообщение об ошибке, если создание пользователя не удалось
      const errorMessage: string = 'Не удалось создать нового пользователя. Попробуйте еще раз.';
      await TelegramBotUtils.sendMessage(ctx, errorMessage);
    }
  }
}
