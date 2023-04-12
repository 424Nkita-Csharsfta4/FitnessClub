"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const config_1 = require("./config");
const controllers_1 = require("./controllers");
const bot = new telegraf_1.Telegraf(config_1.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Привет! Я бот для управления пользователями. Если нужна помощь, пропиши /help'));
bot.help((ctx) => ctx.reply('Команды: /create, /read, /update, /delete'));
bot.command('/create', controllers_1.createUserController);
bot.command('/read', controllers_1.readUserController);
bot.command('/update', controllers_1.updateUserController);
bot.command('/delete', controllers_1.deleteUserController);
bot.launch().then(() => {
    console.log('Бот запущен');
}).catch((err) => {
    console.error('Ошибка запуска бота:', err);
});
