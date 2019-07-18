exports.run = (update, client) => {
    var opts = {
        parse_mode: "HTML",
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    text: 'Talk with me',
                    url: 'tg://resolve?domain=RattlyBot'
                }], [{
                    text: 'Glitch',
                    url: 'https://glitch.com/~nodetgbot'
                }, {
                    text: "Github",
                    url: "https://github.com/zRattly/NodeTGBot"
                }], [{
                    text: "Commands",
                    callback_data: "help"
                }]
            ]
        })
    };
  client.editMessageText(update.chatID, update.cbmid, "This bot was made in <b>Node.JS</b> with <b>NodeTGBot</b>\n\nAuthor: @Rattly", opts)
}
  
  
  
  
