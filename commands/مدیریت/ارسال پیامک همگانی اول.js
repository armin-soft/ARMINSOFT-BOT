/*CMD
  command: ارسال پیامک همگانی اول
  help: 
  need_reply: 
  auto_retry_time: 
  folder: مدیریت
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");

Api.answerCallbackQuery({
callback_query_id: request.id,
text: "🔄 ارسال پیامک همگانی در حال بار گذاری می باشد...",
show_alert: false
})

Bot.runCommand("تاریخ و زمان");
Api.editMessageText({
message_id: request.message.message_id,
text: "🌹مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") به ارسال پیامک همگانی خوش آمدید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "ارسال پیامک" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت" }]
]}
});

Bot.runCommand("ارسال پیامک همگانی دوم");
