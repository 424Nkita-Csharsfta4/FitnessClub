"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const config_1 = require("./config");
const user_model_1 = require("./models/user-model");
const create_controller_1 = require("./controllers/create-controller");
const delete_controller_1 = require("./controllers/delete-controller");
const read_controller_1 = require("./controllers/read-controller");
const update_controller_1 = require("./controllers/update-controller");
const bot = new telegraf_1.Telegraf(config_1.BOT_TOKEN);
// создайте модель User, передав конфигурационный объект в качестве аргумента
const userModel = new user_model_1.User({});
const createController = new create_controller_1.CreateController();
const readController = new read_controller_1.ReadController();
const updateController = new update_controller_1.UpdateController();
const deleteController = new delete_controller_1.DeleteController();
bot.start((ctx) => ctx.reply('Привет! Я бот для управления пользователями. Если нужна помощь, пропиши /help'));
bot.help((ctx) => ctx.reply('Команды: /create, /read, /update, /delete'));
bot.command('/create', (ctx) => createController.handle(ctx, userModel)); // передайте userModel как аргумент
bot.command('/read', (ctx) => readController.handle(ctx, userModel)); // передайте userModel как аргумент
bot.command('/update', (ctx) => updateController.handle(ctx, userModel)); // передайте userModel как аргумент
bot.command('/delete', (ctx) => deleteController.handle(ctx, userModel)); // передайте userModel как аргумент
bot.launch().then(() => {
    console.log('Бот запущен');
}).catch((err) => {
    console.error('Ошибка запуска бота:', err);
});
