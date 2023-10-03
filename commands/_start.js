/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Users", user.telegramid);

let FirstName = user.first_name;
let UserID = user.telegramid;
let DateTime = Bot.getProperty("DateTime");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let Channel_Url = Bot.getProperty("Channel_Url");
let Channel_ID = Bot.getProperty("Channel_ID");
let WebService_Check_User_Membership = Bot.getProperty("WebService_Check_User_Membership");
var Blocked_UserID = Bot.getProperty(user.telegramid + "Blocked_UserID");
var Robot_Status = Bot.getProperty("Robot_Status");

if (Blocked_UserID == true){
Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
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
Api.sendMessage({
text: "❌کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") با عرض پوزش ربات در دسترس نمی باشد.\n➖➖➖➖➖➖➖➖➖➖\n*⚠️علت:❌🤖ربات خاموش می باشد.*\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "👁مشاهده کانال اطلاع رسانی", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی دسترس بودن ربات", callback_data: "/start"}]
]}
});
}

else {
if (!content) {
Bot.runCommand("تاریخ و زمان");

HTTP.get({
url: "" + WebService_Check_User_Membership + "&User_ID=" + UserID + "",
success: '/start',
background: true
});
return
}

var Json = JSON.parse(content);
if (Json.Ok == true) {
if(!User.getProperty("Statistics_Robot")){
Bot.setProperty("Total_User", (Bot.getProperty("Total_User", "0")*1)+1, "text");
User.setProperty("Statistics_Robot", true, "boolean");

Api.sendMessage({
chat_id: Add_Admin_UserID,
text: "*✅لحظاتی پیش کاربر جدیدی عضو ربات گردید.\n\n👤نام:*[" + FirstName + "](tg://user?id=" + UserID + ")\n🆔آیدی عددی:`" + UserID + "`\n\n" + DateTime + "",
parse_mode: "Markdown"
});
}

Api.sendMessage({
text: "🌹کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") به ربات آرمین سافت (API) خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text:"🛠منوی خدمات ربات", callback_data:"منوی خدمات ربات"}]
]}
});
}

else {
Api.sendMessage({
text: "⛔️کاربر گرامی [" + FirstName + "](tg://user?id=" + UserID + ") جهت استفاده از امکانات ربات باید عضو کانال شوید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات ربات بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "📢عضویت در کانال", url: "" + Channel_Url + ""}],
[{text: "🔄بررسی عضویت بودن کانال", callback_data: "/start"}]
]}
});
}
}
}
