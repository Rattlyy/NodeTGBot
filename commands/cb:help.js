exports.run = (update, client) => {
var opts = {
        parse_mode: "HTML",
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'Author',
                    url: 'tg://resolve?domain=RattlyBot'
                }], [{
                    text: 'Menu',
                    callback_data: 'menu'
                }]
              ]
        })
    };
  client.editMessageText(update.chatID, update.cbmid, "<b>Commands:</b>\n\n/figlet [text]\n/edit\n/image", opts)
}