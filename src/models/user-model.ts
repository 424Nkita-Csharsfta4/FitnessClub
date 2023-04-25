import { BaseModel } from './base-model';

/**
 * Это определение класса TypeScript для пользовательской модели, которая реализует интерфейс BaseModel
 */
export class User implements BaseModel {
  /**
   * чтение свойство не определенно но в будущем будет понятно значение
   */
    read: unknown;
    /**
   * удаление свойство не определенно но в будущем будет понятно значение
   */
    delete: unknown;
    /**
   * обновление свойство не определенно но в будущем будет понятно значение
   */
    update: unknown;
    /**
     * 
     * @param create статический метод, который создает новый экземпляр пользователя и возвращает его.
     */
  static create(newUser: User): User | PromiseLike<User> {
    throw new Error('Method not implemented.');
  }
  id:string;
  name: string;

  constructor(name: string) {
    this.id = '';
    this.name = name;
  }
}
