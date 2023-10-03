/*CMD
  command: ارسال پیامک سوم
  help: 
  need_reply: true
  auto_retry_time: 
  folder: مدیریت
  answer: 👌شماره موبایل کاربر مورد نظر را وارد کنید.
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})

Bot.setProperty("PhoneNumber_SMS", data.message);

let Add_Admin_FullName = User.getProperty("Add_Admin_FullName");
let Add_Admin_UserID = Bot.getProperty("Add_Admin_UserID");
let DateTime = Bot.getProperty("DateTime");
let Message_SMS = Bot.getProperty("Message_SMS");
let PhoneNumber_SMS = Bot.getProperty("PhoneNumber_SMS");

Bot.runCommand("تاریخ و زمان");
Api.sendMessage({
text: "✅مدیریت گرامی [" + Add_Admin_FullName + "](tg://user?id=" + Add_Admin_UserID + ") پیامک شما با موفقیت به شماره موبایل " + PhoneNumber_SMS + " ارسال گردید.\n\n" + DateTime + "\n➖➖➖➖➖➖➖➖➖➖\n👌جهت استفاده از امکانات مدیریت بر روی منوی مورد نظر کلیک کنید.",
parse_mode: "Markdown",
reply_markup: {inline_keyboard: [
[{text: "🔙بازگشت به منوی قبل", callback_data: "پیکربندی کلاینت" }],
[{text: "🏠بازگشت به منوی مدیریت", callback_data: "مدیریت"}]
]}
});

HTTP.post({
url: "https://api2.ippanel.com/api/v1/sms/send/panel/single",
headers: {
'Content-Type': 'application/json',
'apikey': 'Zh0CWhURvAImMGnO3B0FryQloS5U5ENZd3TP96oOJvE='
},

body: {
"recipient": [
"" + PhoneNumber_SMS + ""
],
"sender": "3000505",
"message": "" + Message_SMS + "\n\nسرور آمبرلا",
"description": {
"summary": "description",
"count_recipient": "1"
}
}
});
