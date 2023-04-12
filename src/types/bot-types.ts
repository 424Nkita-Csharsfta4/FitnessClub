import { Chat } from "telegraf/typings/core/types/typegram";

export interface Message {
    message_id: number;
    text: string;
    chat: Chat;
}
export interface KeyboardButton {
    params(params: any): unknown;
    text: string;
    request_contact?: boolean;
    request_location?: boolean;
}
