const TelegramBot = require("node-telegram-bot-api");

// التوكن اللي خدته من BotFather
const token = "8007821560:AAFVYN1HlBZlq4-rPejwd22aSHKzWZwaqlM";

// نفعّل البوت بنظام polling
const bot = new TelegramBot(token, { polling: true });

// رد ترحيبي عند /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "👋 أهلاً بيك في Sultan Coffee Bot!");
});

// البوت يرد على أي رسالة
bot.on("message", (msg) => {
  if (msg.text && msg.text !== "/start") {
    bot.sendMessage(msg.chat.id, `📩 إنت كتبت: ${msg.text}`);
  }
});
