exports.run = (update, client) => {
  var opts = { parse_mode: "HTML" };
  client.sendMessage(update.chatID, "<b>Avaible commands:</b>\n\n/figlet {text}\n/edit\n/image\n\nAuthor: @Rattly", opts)
  
}
