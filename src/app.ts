import { Telegraf } from 'telegraf';
import { BOT_TOKEN } from './config';
import { User } from './models/user-model';
import { CreateController } from './controllers/create-controller';
import { DeleteController } from './controllers/delete-controller';
import { ReadController } from './controllers/read-controller';
import { UpdateController } from './controllers/update-controller';

const bot = new Telegraf(BOT_TOKEN);

// создайте модель User, передав конфигурационный объект в качестве аргумента
const userModel = new User({});

const createController = new CreateController();
const readController = new ReadController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

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
