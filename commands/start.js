exports.run = (update, client) => {
  var opts = { parse_mode: "HTML" };
  client.sendMessage(update.chatID, 'This bot was made in <b>Node.JS</b> with <b>NodeTGBot</b>\n\nRepo: https://github.com/zRattly/NodeTGBot\nGlitch: https://glitch.com/~nodetgbot\nCommands: /help\n\nAuthor: @Rattly', opts);
}