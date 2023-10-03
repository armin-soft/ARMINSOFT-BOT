/*CMD
  command: هواشناسی دوم
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let DateTime = Bot.getProperty("DateTime");
let Reply = User.getProperty("Reply");
let City = User.getProperty("City");

var Json = JSON.parse(content);
var Longitude = Json.Result.Longitude
var Latitude = Json.Result.Latitude
var Description = Json.Result.Description
var Emoji = Json.Result.Emoji
var Temperature = Json.Result.Temperature
var Emotional_Temperature = Json.Result.Emotional_Temperature
var Temperature_Maximum = Json.Result.Temperature_Maximum
var Temperature_Minimum = Json.Result.Temperature_Minimum
var Air_Pressure = Json.Result.Air_Pressure
var Humidity = Json.Result.Humidity
var Power_Vision = Json.Result.Power_Vision
var Wind_Speed = Json.Result.Wind_Speed
var Wind_Direction = Json.Result.Wind_Direction
var Cloud_Percentage = Json.Result.Cloud_Percentage

if (Json.Ok == true) {
Api.sendMessage({
text: "✅کاربر گرامی " + FirstName + " اطلاعات هواشناسی شهر " + City + " دریافت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*🗺طول جغرافیایی:" + Longitude + "\n🗺عرض جغرافیایی:" + Latitude + "\n\n" + Emoji + "وضعیت:" + Description + "\n\n🌡دما:" + Temperature + "\n🌡دمای احساسی:" + Emotional_Temperature + "\n🌡بیشترین دما:" + Temperature_Maximum + "\n🌡کمترین دما:" + Temperature_Minimum + "\n\n🌬فشار هوا:" + Air_Pressure + "\n💧رطوبت:" + Humidity + "\n👀قدرت دید:" + Power_Vision + "\n💨سرعت باد:" + Wind_Speed + "\n🧭جهت باد:" + Wind_Direction + "\n☁️درصد ابر:" + Cloud_Percentage + "*",
parse_mode: "Markdown",
reply_to_message_id: Reply,
reply_markup: {inline_keyboard: [
[{text: "👈وب سرویس استفاده شده👉", url: "https://t.me/Channel_ARMINSOFT/13"}],
[{text: "📞🧑‍💻ارتباط با پشتیبانی (آرمین سافت)", url: "https://t.me/ARMIN_SOFT"}],
]}
});
}

else {
}
