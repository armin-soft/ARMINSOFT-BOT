/*CMD
  command: هواشناسی
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

let WebService_Weather = Bot.getProperty("WebService_Weather");

let params = message.split(' ');
User.setProperty("City", params[1], "text");

let Reply = request.message_id;

User.setProperty("Reply", Reply, "text");

let City = User.getProperty("City");

HTTP.get({
url: "" + WebService_Weather + "&City=" + encodeURI(City) + "",
success: "هواشناسی دوم",
background: true
});
