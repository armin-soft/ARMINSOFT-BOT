/*CMD
  command: آپارات
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let WebService_Aparat = Bot.getProperty("WebService_Aparat");

let params = message.split(' ');
User.setProperty("Url", params[1], "text");

let Url = User.getProperty("Url");

let Reply = request.message_id;
User.setProperty("Reply", Reply, "text");

HTTP.get({
url: "" + WebService_Aparat + "&Video_Url=" + Url + "",
success: "آپارات دوم",
background: true
});
