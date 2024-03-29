exports.run = (update, client) => {
    var opts = {
        parse_mode: "HTML",
        hide_keyboard: true,
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
    client.sendMessage(update.chatID, 'This bot was made in <b>Node.JS</b> with <b>NodeTGBot</b>\n\nAuthor: @Rattly', opts);
}