import { Context } from "telegraf";
import { BaseModel } from "../models/base-model";

/**
 * @param  BaseController абстрактный класс, который имеет параметризованный тип T, который должен наследоваться от BaseModel.
 */
export abstract class BaseController<T extends BaseModel> {
  /**
   * @param create абстрактный метод отвечает за создание новой модели
   */
  abstract create(ctx: Context): Promise<void>;
  /**
   * 
   * @param read абстрактный метод отвечает за чтение модели
   */
  abstract read(ctx: Context): Promise<void>;
  /**
   * 
   * @param update абстрактный метод отвечает за обновление модели
   */
  abstract update(ctx: Context): Promise<void>;
  /**
   * 
   * @param delete абстрактный метод отвечает удаление модели
   */
  abstract delete(ctx: Context): Promise<void>;
}
