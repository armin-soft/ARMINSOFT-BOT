/*CMD
  command: آپارات دوم
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

var Json = JSON.parse(content);
var FullName = Json.Result.Publisher_Information.FullName
var User_ID = Json.Result.Publisher_Information.User_ID
var Username = Json.Result.Publisher_Information.Username
//var Profile_Photo = Json.Result.Publisher_Information.Profile_Photo

var iD = Json.Result.Video_Information.ID
var Url_ID  = Json.Result.Video_Information.Url_ID
var Category_Persian = Json.Result.Video_Information.Category_Persian
var Category_English = Json.Result.Video_Information.Category_English
var Category_ID = Json.Result.Video_Information.Category_ID
var Title  = Json.Result.Video_Information.Title
var Description = Json.Result.Video_Information.Description
var Visit_Count = Json.Result.Video_Information.Visit_Count
var Like_Count = Json.Result.Video_Information.Like_Count
var Are_Hidden = Json.Result.Video_Information.Are_Hidden
var Are_Official = Json.Result.Video_Information.Are_Official
var Are_Autoplay = Json.Result.Video_Information.Are_Autoplay
var Are_360_Degrees = Json.Result.Video_Information.Are_360_Degrees
var Are_Comment = Json.Result.Video_Information.Are_Comment
var Are_Downlaod = Json.Result.Video_Information.Are_Downlaod
var Duration_Seconds = Json.Result.Video_Information.Duration_Seconds
var Post_Date = Json.Result.Video_Information.Post_Date
var Size_MB = Json.Result.Video_Information.Size_MB
var Tag = Json.Result.Video_Information.Tag
var Frame = Json.Result.Video_Information.Frame
var Big_Photo = Json.Result.Video_Information.Big_Photo
var Small_Photo = Json.Result.Video_Information.Small_Photo
var Link_Download_Quality144 = Json.Result.Video_Information.Link_Download[0].Url[0]
var Link_Download_Quality240 = Json.Result.Video_Information.Link_Download[1].Url[0]
var Link_Download_Quality360 = Json.Result.Video_Information.Link_Download[2].Url[0]
var Link_Download_Quality480 = Json.Result.Video_Information.Link_Download[3].Url[0]
var Link_Download_Quality720 = Json.Result.Video_Information.Link_Download[4].Url[0]
var Link_Download_Quality1080 = Json.Result.Video_Information.Link_Download[5].Url[0]

if (Json.Ok == true) {
Api.sendPhoto({
photo: Big_Photo,
caption: "✅کاربر گرامی " + FirstName + " اطلاعات لینک از آپارات دریافت گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*👤نام:" + FullName + "\n♻️نام کاربری:" + Username + "\n🆔آیدی عددی:" + User_ID + "\n\n🗒عنوان:" + Title + "\n🗄دسته بندی:(" + Category_Persian + " -" + Category_English + ")\n🆔آیدی عددی:" + iD + "\n♐️شناسه پست:" + Url_ID + "\n📆تاریخ پست:" + Post_Date + "\n📂حجم:" + Size_MB + " مگابایت\n#️⃣هشتگ:" + Tag + "\n\n📚توضیحات:\n" + Description + "\n\n👁تعداد بازدید:" + Visit_Count + " عدد\n👍تعداد لایک:" + Like_Count + " عدد\n\n☸️آیا ویدیو ۳۶۰ درجه است:" + Are_360_Degrees + "\n👀آیا کانال پنهان است:" + Are_Hidden + "\n📢آیا کانال رسمی است:" + Are_Official + "\n🎞آیا پخش خودکار دارد:" + Are_Autoplay + "\n💌آیا امکان نظر گداشتن وجود دارد:" + Are_Comment + "\n📥آیا امکان دانلود وجود دارد:" + Are_Downlaod + "*",
parse_mode: "Markdown",
reply_to_message_id: Reply,
reply_markup: {inline_keyboard: [
[{text: "📥دانلود کیفیت (۱۴۴)", url: Link_Download_Quality144},{text: "📥دانلود کیفیت (۲۴۰)", url: Link_Download_Quality240}],
[{text: "📥دانلود کیفیت (۳۶۰)", url: Link_Download_Quality360},{text: "📥دانلود کیفیت (۴۸۰)", url: Link_Download_Quality480}],
[{text: "📥دانلود کیفیت (۷۲۰)", url: Link_Download_Quality720},{text: "📥دانلود کیفیت (۱۰۸۰)", url: Link_Download_Quality1080}],
[{text: "👈وب سرویس استفاده شده👉", url: "https://t.me/Channel_ARMINSOFT/11"}],
[{text: "📞🧑‍💻ارتباط با پشتیبانی (آرمین سافت)", url: "https://t.me/ARMIN_SOFT"}],
]}
});
}

else {
}
