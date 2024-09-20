import Markup from 'telegraf/markup';

function getDayMenu() {
  return Markup.inlineKeyboard([
    [Markup.button.callback('Понедельник', 'Mon'), Markup.button.callback('Вторник', 'Tues')],
    [Markup.button.callback('Среда', 'Wedn'), Markup.button.callback('Четверг', 'Thur')],
    [Markup.button.callback('Пятница', 'Fri')],
    [Markup.button.callback('Суббота', 'Sat'), Markup.button.callback('Воскресенье', 'Sun')]
  ]);
}

export { getDayMenu };
