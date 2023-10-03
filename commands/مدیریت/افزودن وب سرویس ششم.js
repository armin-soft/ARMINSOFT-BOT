/*CMD
  command: افزودن وب سرویس ششم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آدرس وب سرویس هواشناسی را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("WebService_Weather", message);
Bot.runCommand("افزودن وب سرویس هفتم");
