/*CMD
  command: اخطار دوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌آیدی عددی کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Notice_UserID", data.message);
Bot.runCommand("اخطار سوم");
