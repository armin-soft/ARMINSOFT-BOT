/*CMD
  command: افزودن وب سرویس هفتم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آدرس وب سرویس برعکس کردن متن را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("WebService_Reverse_Text", message);
Bot.runCommand("افزودن وب سرویس هشتم");
