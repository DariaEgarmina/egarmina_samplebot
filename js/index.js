import { getDayMenu, getTimeMenu } from './keyboards.js';
import { dayTimeResult, addDayTime } from './db.js';

import dotenv from 'dotenv';
dotenv.config();

import { session, Telegraf } from 'telegraf';

const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

bot.use(
  session({
    defaultSession: (ctx) => ({})
  })
);

const daysList = {
  Mon: 'понедельник',
  Tues: 'вторник',
  Wedn: 'среду',
  Thur: 'четверг',
  Fri: 'пятницу',
  Sat: 'субботу',
  Sun: 'воскресенье',
};

const timeList = {
  Seven: '07:00',
  Twelve: '12:00',
  Eight: '20:00',
};

bot.command('start', (ctx) => {
  ctx.reply('Выберите день для полива:', getDayMenu());
});

bot.action(['Mon', 'Tues', 'Wedn', 'Thur', 'Fri', 'Sat', 'Sun'], (ctx) => {
  ctx.session.day = ctx.callbackQuery.data;
  addDayTime(ctx.session.day);

  ctx.reply(
    `Вы выбрали ${daysList[ctx.callbackQuery.data]}! Теперь выберите время:`,
    getTimeMenu()
  );

  ctx.deleteMessage();
});

bot.action(['Seven', 'Twelve', 'Eight'], (ctx) => {
  ctx.session.time = ctx.callbackQuery.data;
  addDayTime(ctx.session.time);
  console.log(dayTimeResult);

  ctx.reply(
    `Отлично!\n\n Я буду напоминать о поливе в ${daysList[ctx.session.day]}  ${timeList[ctx.callbackQuery.data]
    }`
  );

  ctx.deleteMessage();
});

bot.launch();
