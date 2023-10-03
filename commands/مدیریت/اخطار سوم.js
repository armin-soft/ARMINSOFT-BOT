/*CMD
  command: اخطار سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌متن اخطار را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

User.setProperty("Notice_Text", data.message);

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");
var Notice_UserID = User.getProperty("Notice_UserID");
var Notice_Text = User.getProperty("Notice_Text");
let Channel_Url = Bot.getProperty("Channel_Url");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✅مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") اخطار با موفقیت به کاربر ارسال گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "جرایم" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

Api.sendMessage({
chat_id: Notice_UserID,
text: "*📵کاربر گرامی شما بدلیل " + Notice_Text + " اخطار دریافت کردید\n\n⚠️نکته:در صورت تکرار مجدد مسدود می شوید.*\n➖➖➖➖➖➖➖➖➖➖\n" + DateTime + "",
parse_mode: "Markdown",
disable_web_page_preview: true
});
