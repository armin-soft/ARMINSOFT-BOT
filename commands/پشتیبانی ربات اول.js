/*CMD
  command: پشتیبانی ربات اول
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

let FirstName = data.user.first_name;
let UserID = data.user.telegramid;
let DateTime = Bot.getProperty("DateTime");
let Channel_Url = Bot.getProperty("Channel_Url");
let Channel_ID = Bot.getProperty("Channel_ID");
let WebService_Check_User_Membership = Bot.getProperty("WebService_Check_User_Membership");
var Blocked_UserID = Bot.getProperty(user.telegramid + "Blocked_UserID");
var Robot_Status = Bot.getProperty("Robot_Status");

if (Blocked_UserID == true){
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "*🚫کاربر گرامی* [" + FirstName + "](tg://user?id=" + UserID + ") *با عرض پوزش شما به طور دائمی مسدود شده اید.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*⚠️نکته:اگر فکر می کنید اشتباهی رخ داده است به پشتیبانی مراجعه کنید.*",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📞🧑‍💻ارتباط با پشتیبانی (آرمین سافت)", url: "https://t.me/ARMIN_SOFT"}],
]}
});
}

else {
if (Robot_Status == "❌خاموش"){
Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "❌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش ربات در دسترس نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n*⚠️علت:❌🤖ربات خاموش می باشد.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👁مشاهده کانال اطلاع رسانی", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "پشتیبانی ربات اول"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");

HTTP.get({
url: "" + WebService_Check_User_Membership + "&User_ID=" + UserID + "",
success: 'پشتیبانی ربات اول'
});
return
}

var Json = JSON.parse(content);
if (Json.Ok == true) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄پشتیبانی ربات در حال بار گذاری می باشد...",
show_alert: false
})

Api.editMessageText({
message_id: request.message.message_id,
text: "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش پشتیبانی ربات خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*👌لطفا پیام خود را بصورت کامل ارسال کنید.\n⚠️نکته:پیام ارسالی می تواند حاوی فایل و تصویر باشد.*\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پشتیبانی آنلاین" }],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});

Bot.runCommand("پشتیبانی ربات دوم");
}

else {
Api.editMessageText({
message_id: request.message.message_id,
text: "⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش شما از کانال خارج شده اید و ربات به درخواست شما پاسخی نمی دهد.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی عضویت بودن کانال", callback_data: "پشتیبانی ربات اول"}]
]}
});
}
}
}
