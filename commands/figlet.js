exports.run = (update, client) => {
const figlet = require('figlet');
    figlet(update.msg.replace("/figlet ", ""), (err, data) => {
      var opts = { parse_mode: "HTML" };
      client.sendMessage(update.chatID, '<code>' + data + '</code>', opts)
    }) 
}