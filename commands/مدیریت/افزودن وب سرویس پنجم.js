/*CMD
  command: افزودن وب سرویس پنجم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آدرس وب سرویس اوقات شرعی را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("WebService_Religious_Times", message);
Bot.runCommand("افزودن وب سرویس ششم");
