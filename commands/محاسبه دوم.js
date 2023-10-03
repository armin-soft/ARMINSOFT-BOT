/*CMD
  command: محاسبه دوم
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
let Date = User.getProperty("Date");

var Json = JSON.parse(content);
var Exact_Age = Json.Result.Exact_Age
var Years_18_Date = Json.Result.Years_18_Date
var AD_Date = Json.Result.AD_Date
var Solar_Date = Json.Result.Solar_Date
var Hijri_Lunar_Date = Json.Result.Hijri_Lunar_Date
var Day = Json.Result.Day
var Season = Json.Result.Season
var Animal = Json.Result.Animal
var Symbol = Json.Result.Symbol
var Component = Json.Result.Component
var Lucky_Number = Json.Result.Lucky_Number
var Stone = Json.Result.Stone
var Planet = Json.Result.Planet
var Tree = Json.Result.Tree
var Description_Tree = Json.Result.Description_Tree
var Tourism_Industry = Json.Result.Tourism_Industry
var Character_Recognition = Json.Result.Character_Recognition
var Color = Json.Result.Color
var Count_Moon_Around_Earth = Json.Result.Count_Moon_Around_Earth
var Count_Eyelid = Json.Result.Count_Eyelid
var Count_Hour_Sleep = Json.Result.Count_Hour_Sleep
var Count_Heart_Beat = Json.Result.Count_Heart_Beat
var Count_Breathing = Json.Result.Count_Breathing
var Count_Meal = Json.Result.Count_Meal
var How_Many_Day = Json.Result.How_Many_Day
var How_Many_Week = Json.Result.How_Many_Week
var Count_Last_Day = Json.Result.Count_Last_Day
var Count_Last_Week = Json.Result.Count_Last_Week
var Count_Last_Mount = Json.Result.Count_Last_Mount
var Count_Last_Hour = Json.Result.Count_Last_Hour
var Count_Last_Minutes = Json.Result.Count_Last_Minutes
var Count_Last_Second = Json.Result.Count_Last_Second

if (Json.Ok == true) {
Api.sendMessage({
text: "✅کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") اطلاعات تاریخ تولد " + Date + " دریافت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*📆سن دقیق:" + Exact_Age + "\n📆تاریخ میلادی:" + AD_Date + "\n📆تاریخ شمسی:" + Solar_Date + "\n📆تاریخ هجری قمری:" + Hijri_Lunar_Date + "\n\n🔞تاریخ سن ۱۸ سالگی:" + Years_18_Date + "\n🎋روز متولد:(" + Day + "،" + Season + ")\n🐲حیوان:" + Animal + "\n☸️سمبل (نماد):" + Symbol + "\n⚡️عنصر:" + Component + "\n🎈عدد شانس:" + Lucky_Number + "\n💎سنگ:" + Stone + " \n🌎سیاره:" + Planet + "\n🪅رنگ:" + Color + "\n🔞صنعت گردشگری:" + Tourism_Industry + "\n\n🌙گردش ماه به دور زمین:" + Count_Moon_Around_Earth + "\n👁تعداد پلک:" + Count_Eyelid + "\n🛌تعداد ساعات خواب:" + Count_Hour_Sleep + "\n🫀تعداد تپش قلب:" + Count_Heart_Beat + "\n❤️‍🩹تعداد تنفس:" + Count_Breathing + "\n🧆 تعداد وعده غذایی:" + Count_Meal + "\n\n📆چندمین روز: " + How_Many_Day + "\n📆چندمین هفته:" + How_Many_Week + "\n\n📆تعداد روز گذشته:" + Count_Last_Day + "\n📆تعداد هفته گذشته:" + Count_Last_Week + "\n📆تعداد ماه گذشته:" + Count_Last_Mount + "\n\n🕰تعداد ساعت گذشته:" + Count_Last_Hour + "\n🕰تعداد دقیقه گذشته:" + Count_Last_Minutes + "\n🕰تعداد ثانیه گذشته:" + Count_Last_Second + "\n\n🌳درخت:" + Tree + "\n📚توضیحات درخت:\n" + Description_Tree + "\n\n🔆 شخصیت شناسی:" + Character_Recognition + "*",
parse_mode: "Markdown",
reply_to_message_id: Reply,
reply_markup: {inline_keyboard: [
[{text: "👈وب سرویس استفاده شده👉", url: "https://t.me/Channel_ARMINSOFT/30"}],
[{text: "📞🧑‍💻ارتباط با پشتیبانی (آرمین سافت)", url: "https://t.me/ARMIN_SOFT"}],
]}
});
}

else {
}
