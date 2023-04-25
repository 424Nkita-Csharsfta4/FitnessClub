import { NarrowedContext, Context } from 'telegraf';
import { Update, Message } from 'telegraf/typings/core/types/typegram';
import { User } from '../models/user-model';

export class ReadController {
   /**
   * Метод-обработчик, который будет вызываться при вызове команды /read.
   * @param ctx Контекст, переданный ботом при вызове команды.
   * @param userModel Модель `User`, которую будем использовать для чтения пользователей.
   * @returns Promise.
   */
  handle(ctx: NarrowedContext<Context<Update>, { message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }>, userModel: any): void | Promise<unknown> {
      throw new Error('Method not implemented.');
  }
  private userModel: User;

  constructor(userModel: User) {
    this.userModel = userModel;
  }
  /**
   * Читает пользователей из модели `User`, используя фильтры.
   * @param filters Фильтры, которые будут использованы для чтения пользователей из модели `User`.
   * @returns Массив объектов `User`.
   */
  async readUsers(filters: any): Promise<User[]> {
    try {
      /**
       * Отправить сообщение об успешном завершении с пользователями пользователю
       */
      const users = this.userModel.read(filters);
      return users;
    } catch (error) {
      /**
       * Отправить сообщение об ошибке пользователю
       */
      return [];
    }
  }
}
