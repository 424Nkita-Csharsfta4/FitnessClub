import { v4 as uuid } from "uuid";

/**
 * интерфейс для базовой модели, которая имеет свойство id типа string.
 */
export interface BaseModel {
  id: string;
}

/**
 * @class BaseRepository  которое принимает параметр типа T, расширяющий BaseModel
 */
export class BaseRepository<T extends BaseModel> {
  private items: T[] = [];

  create(item: T): T {
    item.id = uuid();
    this.items.push(item);
    return item;
  }

  read(): T[] {
    return this.items;
  }

  update(item: T): T {
    const index = this.items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
      return item;
    }
    throw new Error(`Item with id ${item.id} not found`);
  }

  delete(id: string): void {
    const index = this.items.findIndex((i) => i.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      throw new Error(`Item with id ${id} not found`);
    }
  }
}
