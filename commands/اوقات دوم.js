/*CMD
  command: اوقات دوم
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
let Province = User.getProperty("Province");

var Json = JSON.parse(content);
var Today = Json.Result.Today
var Hijri_Lunar = Json.Result.Hijri_Lunar
var Prayer_Morning = Json.Result.Prayer_Morning
var Sunrise = Json.Result.Sunrise
var Prayer_Noon = Json.Result.Prayer_Noon
var Prayer_Evening = Json.Result.Prayer_Evening
var Sunset = Json.Result.Sunset
var Prayer_Maghrib = Json.Result.Prayer_Maghrib
var Prayer_Isha = Json.Result.Prayer_Isha
var Islamic_Midnight = Json.Result.Islamic_Midnight

if (Json.Ok == true) {
Api.sendMessage({
text: "✅کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") اطلاعات اوقات شرعی  شهر " + Province + " دریافت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*📆تاریخ هجری قمری:" + Hijri_Lunar + "\n📆تاریخ شمسی:" + Today + "\n\n🏙اذان صبح:" + Prayer_Morning + "\n🌅طلوع آفتاب:" + Sunrise + "\n☀️اذان ظهر:" + Prayer_Noon + "\n🌇اذان عصر:" + Prayer_Evening + "\n🌄غروب آفتاب:" + Sunset + "\n🌃 اذان مغرب:" + Prayer_Maghrib + "\n🌌نماز عشاء:" + Prayer_Isha + "\n🌘 نیمه شب شرعی:" + Islamic_Midnight + "*",
parse_mode: "Markdown",
reply_to_message_id: Reply,
reply_markup: {inline_keyboard: [
[{text: "👈وب سرویس استفاده شده👉", url: "https://t.me/Channel_ARMINSOFT/12"}],
[{text: "📞🧑‍💻ارتباط با پشتیبانی (آرمین سافت)", url: "https://t.me/ARMIN_SOFT"}],
]}
});
}

else {
}
