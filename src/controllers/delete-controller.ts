import { NarrowedContext, Context } from 'telegraf';
import { Update, Message } from 'telegraf/typings/core/types/typegram';
import { User } from '../models/user-model';
import { KeyboardButton } from '../types/bot-types';

/**
 * Класс контроллера удаления пользователей
 */
export class DeleteController {
    /**
     * 
     * @param handle Обработчик события
     */
    handle(ctx: NarrowedContext<Context<Update>, 
        { message: Update.New & Update.NonChannel & Message.TextMessage; update_id: number; }
        >, userModel: any): void | Promise<unknown> {
        /**
         * Вызов ошибки, если метод не реализован
         */ 
        throw new Error('метод не реализован.');
    }
    /**
     * Модель пользователя
     */
    private userModel: User;
 
    /**
     * 
     * @param userModel Конструктор класса с передачей модели пользователя
     */
    constructor(userModel: User) {
        this.userModel = userModel;
    }

    /**
     * 
     * @param handleDelete Обработчик удаления пользователя
     * @returns userToDelete
     */
    public async handleDelete(command: KeyboardButton): Promise<string> {
        /**
         * Получение id пользователя
         */
        const userId = Number(command.params);
        /**
         * Чтение информации о пользователе из модели
         */
        const userToDelete = this.userModel.read(userId);

        /**
         * Если пользователь не найден, вернуть соответствующее сообщение
         */
        if (!userToDelete) {
            return 'Пользователь не найден';
        }

        /**
         * Удаление пользователя из модели
         */
        this.userModel.delete(userId);

        /**
         * Возврат сообщения об успешном удалении пользователя
         */
        return `Пользователь ${userToDelete.name} успешно удален`;
    }
}
