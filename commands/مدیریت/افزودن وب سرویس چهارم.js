/*CMD
  command: افزودن وب سرویس چهارم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آدرس وب سرویس آپارات را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("WebService_Aparat", message);
Bot.runCommand("افزودن وب سرویس پنجم");
