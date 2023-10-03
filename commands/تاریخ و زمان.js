/*CMD
  command: تاریخ و زمان
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
let WebService_DateTime = Bot.getProperty("WebService_DateTime");

HTTP.get({
url: "" + WebService_DateTime + "",
success: 'تاریخ و زمان',
background: true
});
return
}

var Json = JSON.parse(content);
if (Json.Ok == true) {
var Date = Json.Result.Date
var Season = Json.Result.Season
var Season_Emoji = Json.Result.Season_Emoji
var Time = Json.Result.Time
var Time_Based = Json.Result.Time_Based
var Time_Based_Emoji = Json.Result.Time_Based_Emoji

Bot.setProperty("DateTime", "*📆تاریخ:" + Date + " | 🌎فصل:" + Season_Emoji + "" + Season + "\n🕰زمان:" + Time + " " + Time_Based_Emoji + "" + Time_Based + "*");
}

else {
Bot.setProperty("DateTime", "*⚠️خطا:تاریخ و زمان ایران از سرور دریافت نشد.*");
}
