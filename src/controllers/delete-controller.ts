import { NarrowedContext, Context } from 'telegraf';
import { Update, Message } from 'telegraf/typings/core/types/typegram';
import { User } from '../models/user-model';
import { KeyboardButton } from '../types/bot-types';

export class DeleteController {
    handle(ctx: NarrowedContext<Context<Update>, { message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }>, userModel: any): void | Promise<unknown> {
        throw new Error('Method not implemented.');
    }
    private userModel: User;

    constructor(userModel: User) {
        this.userModel = userModel;
    }

    public async handleDelete(command: KeyboardButton): Promise<string> {
        const userId = Number(command.params);
        const userToDelete = this.userModel.read(userId);

        if (!userToDelete) {
            return 'Пользователь не найден';
        }

        this.userModel.delete(userId);

        return `Пользователь ${userToDelete.name} успешно удален`;
    }
}
