/*CMD
  command: افزودن وب سرویس سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آدرس وب سرویس بررسی عضویت را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("WebService_Check_User_Membership", message);
Bot.runCommand("افزودن وب سرویس چهارم");
