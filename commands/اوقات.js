/*CMD
  command: اوقات
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

let WebService_Religious_Times = Bot.getProperty("WebService_Religious_Times");

if (!params) {
return
}

params = params.split(' ')
if (params[0] == "شرعی") {

User.setProperty("City", params[1], "text");
User.setProperty("Province", params[2], "text");

let Reply = request.message_id;

User.setProperty("Reply", Reply, "text");

let City = User.getProperty("City");
let Province = User.getProperty("Province");

HTTP.get({
url: "" + WebService_Religious_Times + "&Province=" + encodeURI(Province) + "&City=" + encodeURI(City) + "",
success: "اوقات دوم",
background: true
});
}
