import { BaseModel } from './base-model';

export class User implements BaseModel {
  read: any;
    delete: any;
    update: any;
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
