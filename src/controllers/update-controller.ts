import { Context, NarrowedContext } from 'telegraf';
import { User } from '../models/user-model';
import { Update, Message } from 'telegraf/typings/core/types/typegram';

export class UpdateController {
  handle(ctx: any, userModel: any): void {
    UpdateController.updateHandler(ctx);
  }
  
  static updateHandler(ctx: NarrowedContext<Context<Update>, { message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }>) {
      throw new Error('Method not implemented.');
  }
  private userModel: User;

  constructor(userModel: User) {
    this.userModel = userModel;
  }

  async updateHandler(ctx: Context): Promise<void> {
    const message = ctx.message;

    if (!message || !message.text) {
      await ctx.reply('Сообщение не содержит текста');
      return;
    }

    const { id, name } = message.text?.split(' ')?.slice(1) ?? {};

    if (!id || !name) {
      await ctx.reply('Введите идентификатор пользователя и его новое имя через пробел');
      return;
    }

    const user: User = {
        id: String(id), name,
        read: undefined,
        delete: undefined,
        update: undefined
    };

    try {
      const updatedUser = this.userModel.update(user);
      await ctx.reply(`Пользователь ${updatedUser.id} успешно обновлен: имя изменено на ${updatedUser.name}`);
    } catch (err) {
      await ctx.reply(`Ошибка: ${err.message}`);
    }
}

}
