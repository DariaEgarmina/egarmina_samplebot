require("dotenv").config();

const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const { Markup } = require("telegraf");
const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

bot.command('start', (ctx) => {
    ctx.reply('Выберите день для полива:',
        Markup.inlineKeyboard([
            [Markup.button.callback('Понедельник', 'Mon'), Markup.button.callback('Вторник', 'Tues')],
            [Markup.button.callback('Среда', 'Wedn'), Markup.button.callback('Четверг', 'Thur')],
            [Markup.button.callback('Пятница', 'Fri')],
            [Markup.button.callback('Суббота', 'Sat'), Markup.button.callback('Воскресенье', 'Sun')]
        ]),
    );
});

bot.action('Mon', (ctx) => {
    ctx.reply('Вы выбрали понедельник! Теперь выберите время:',
    Markup.inlineKeyboard([
        [Markup.button.callback('07:00', 'Seven'), Markup.button.callback('12:00', 'Twelve'), Markup.button.callback('20:00', 'Eight')],
    ]),
    );
});

bot.action('Tues', (ctx) => {
    ctx.reply('Вы выбрали вторник! Теперь выберите время:',
    Markup.inlineKeyboard([
        [Markup.button.callback('07:00', 'Seven'), Markup.button.callback('12:00', 'Twelve'), Markup.button.callback('20:00', 'Eight')],
    ]),
    );
});

bot.action('Wedn', (ctx) => {
    ctx.reply('Вы выбрали среду! Теперь выберите время:',
    Markup.inlineKeyboard([
        [Markup.button.callback('07:00', 'Seven'), Markup.button.callback('12:00', 'Twelve'), Markup.button.callback('20:00', 'Eight')],
    ]),
    );
});

bot.action('Thur', (ctx) => {
    ctx.reply('Вы выбрали четверг! Теперь выберите время:',
    Markup.inlineKeyboard([
        [Markup.button.callback('07:00', 'Seven'), Markup.button.callback('12:00', 'Twelve'), Markup.button.callback('20:00', 'Eight')],
    ]),
    );
});

bot.action('Fri', (ctx) => {
    ctx.reply('Вы выбрали пятницу! Теперь выберите время:',
    Markup.inlineKeyboard([
        [Markup.button.callback('07:00', 'Seven'), Markup.button.callback('12:00', 'Twelve'), Markup.button.callback('20:00', 'Eight')],
    ]),
    );
});

bot.action('Sat', (ctx) => {
    ctx.reply('Вы выбрали cубботу! Теперь выберите время:',
    Markup.inlineKeyboard([
        [Markup.button.callback('07:00', 'Seven'), Markup.button.callback('12:00', 'Twelve'), Markup.button.callback('20:00', 'Eight')],
    ]),
    );
});

bot.action('Sun', (ctx) => {
    ctx.reply('Вы выбрали воскресенье! Теперь выберите время:',
    Markup.inlineKeyboard([
        [Markup.button.callback('07:00', 'Seven'), Markup.button.callback('12:00', 'Twelve'), Markup.button.callback('20:00', 'Eight')],
    ]),
    );
});




bot.help((ctx) => ctx.reply("Отправь мне стикер"));
bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
bot.hears("привет", (ctx) => ctx.reply("Приветики!"));
bot.hears("Привет", (ctx) => ctx.reply("Приветики!"));
bot.launch();
