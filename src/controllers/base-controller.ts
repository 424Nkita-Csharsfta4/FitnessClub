import { Context } from "telegraf";
import { BaseModel } from "../models/base-model";

export abstract class BaseController<T extends BaseModel> {
  abstract create(ctx: Context): Promise<void>;
  abstract read(ctx: Context): Promise<void>;
  abstract update(ctx: Context): Promise<void>;
  abstract delete(ctx: Context): Promise<void>;
}
