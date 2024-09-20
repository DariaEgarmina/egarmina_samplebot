import { getDayMenu } from './keyboards.js';

import dotenv from 'dotenv';
dotenv.config();

import { Telegraf } from 'telegraf';
const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('Выберите день для полива:', getDayMenu());
});

bot.launch();
