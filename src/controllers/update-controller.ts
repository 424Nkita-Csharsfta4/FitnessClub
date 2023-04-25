import { Context, NarrowedContext } from 'telegraf';
import { User } from '../models/user-model';
import { Update, Message } from 'telegraf/typings/core/types/typegram';

/**
 * Контроллер для обработки запросов на обновление пользователей
 */
export class UpdateController {
  handle(ctx: any, userModel: any): void {
    UpdateController.updateHandler(ctx);
  }

  /**
   * 
   * @param updateHandler Обработчик для запросов на обновление пользователей
   */
  static updateHandler(ctx: NarrowedContext<Context<Update>, { message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }>) {
    throw new Error('Method not implemented.');
  }
  private userModel: User;

  constructor(userModel: User) {
    this.userModel = userModel;
  }

  /**
   * 
   * Обработчик для запросов на обновление пользователей
   */
  async updateHandler(ctx: Context): Promise<void> {
    const message = ctx.message;

    /**
     * Проверка, что сообщение содержит текст
     */
    if (!message || !message.text) {
      await ctx.reply('Сообщение не содержит текста');
      return;
    }

    /**
     * Разбиваем текст на идентификатор и новое имя пользователя
     */
    const { id, name } = message.text?.split(' ')?.slice(1) ?? {};

    if (!id || !name) {
      await ctx.reply('Введите идентификатор пользователя и его новое имя через пробел');
      return;
    }

    /**
     * Создаем объект пользователя с переданным идентификатором и новым именем
     */
    const user: User = {
      id: String(id), name,
      read: undefined,
      delete: undefined,
      update: undefined
    };

    try {
      /**
       * Обновляем пользователя
       */
      const updatedUser = this.userModel.update(user);
      await ctx.reply(`Пользователь ${updatedUser.id} успешно обновлен: имя изменено на ${updatedUser.name}`);
    } catch (err) {
      await ctx.reply(`Ошибка: ${err.message}`);
    }
  }
}
