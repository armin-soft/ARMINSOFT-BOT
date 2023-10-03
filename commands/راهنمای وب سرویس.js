/*CMD
  command: راهنمای وب سرویس
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
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "راهنمای وب سرویس"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");

HTTP.get({
url: "" + WebService_Check_User_Membership + "&User_ID=" + UserID + "",
success: 'راهنمای وب سرویس'
});
return
}

var Json = JSON.parse(content);
if (Json.Ok == true) {
Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄راهنمای وب سرویس در حال بار گذاری می باشد...",
show_alert: false
})

Api.editMessageText({
message_id: request.message.message_id,
text: "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به بخش راهنمای وب سرویس خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n*🔌وب سرویس:آپارات\n📚توضیحات:در این وب سرویس با استفاده از ورودی (لینک پست) اطلاعات مرتبط با آن پست دریافت می شود.\n\n🤔نحوه استفاده:*\n`آپارات https://www.aparat.com/v/wu8MH`\n\n*🔌وب سرویس:اوقات شرعی\n📚توضیحات:در این وب سرویس با استفاده از ورودی (استان،شهر) اوقات شرعی دریافت می شود.\n\n🤔نحوه استفاده:*`اوقات شرعی تهران پاکدشت`\n\n*🔌وب سرویس:هواشناسی\n📚توضیحات:در این وب سرویس با استفاده از ورودی (شهر) اطلاعات آب و هوا دریافت می شود. \n\n🤔نحوه استفاده:*`هواشناسی تهران`\n\n*🔌وب سرویس:محاسبه تاریخ تولد\n📚توضیحات:در این وب سرویس با استفاده از ورودی (تاریخ) اطلاعات تاریخ تولد به فارسی دریافت می شود.\n\n🤔نحوه استفاده:*`محاسبه تاریخ تولد 1378-3-28`\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🌐وب سرویس های کانال (آرمین سافت | ARMIN-SOFT)", url: "https://t.me/Channel_ARMINSOFT"}],
[{text: "🏠بازگشت به منوی اصلی", callback_data: "منوی خدمات ربات" }]
]}
});
}

else {
Api.editMessageText({
message_id: request.message.message_id,
text: "⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش شما از کانال خارج شده اید و ربات به درخواست شما پاسخی نمی دهد.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی عضویت بودن کانال", callback_data: "راهنمای وب سرویس"}]
]}
});
}
}
}
