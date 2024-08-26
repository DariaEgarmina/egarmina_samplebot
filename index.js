require('dotenv').config();

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters')
const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

bot.start(ctx => ctx.replyWithHTML('<b>Привет!</b> Я Дашин бот :) Набери /help или скажи привет'));
bot.help(ctx => ctx.reply('Отправь мне стикер'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('привет', ctx => ctx.reply('Приветики!'));
bot.hears('Привет', ctx => ctx.reply('Приветики!'));
bot.launch();