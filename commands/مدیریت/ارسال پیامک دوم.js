/*CMD
  command: ارسال پیامک دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌متن پیامک را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("Message_SMS", message);
Bot.runCommand("ارسال پیامک سوم");
