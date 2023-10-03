/*CMD
  command: محاسبه
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let WebService_Calculate_Birth = Bot.getProperty("WebService_Calculate_Birth");

if (!params) {
return
}

params = params.split(' ')
if (params[0] == "تاریخ") {
if (params[1] == "تولد") {

User.setProperty("Date", params[2], "text");

let Reply = request.message_id;

User.setProperty("Reply", Reply, "text");

let Date = User.getProperty("Date");

HTTP.get({
url: "" + WebService_Calculate_Birth + "&Date=" + Date + "",
success: "محاسبه دوم",
background: true
});
}
}
