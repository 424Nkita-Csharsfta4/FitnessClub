import { NarrowedContext, Context } from 'telegraf';
import { Update, Message } from 'telegraf/typings/core/types/typegram';
import { User } from '../models/user-model';

export class ReadController {
  handle(ctx: NarrowedContext<Context<Update>, { message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }>, userModel: any): void | Promise<unknown> {
      throw new Error('Method not implemented.');
  }
  private userModel: User;

  constructor(userModel: User) {
    this.userModel = userModel;
  }

  async readUsers(filters: any): Promise<User[]> {
    try {
      const users = this.userModel.read(filters);
      // Send success message with users to user
      return users;
    } catch (error) {
      // Send error message to user
      return [];
    }
  }
}
