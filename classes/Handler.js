
module.exports = class Handler {
  constructor(update) {
    this.update = update;
    if (typeof update.message !== 'undefined') {
      
      this.userID = update.message.from.id;
      this.msg = update.message.text;
      this.chatID = update.message.chat.id;
      this.username = update.message.from.username;
      this.messageID = update.message.message_id;
      if (typeof update.message.reply_to_message !== 'undefined') {
        this.replying = update.message.reply_to_message;
        this.replyforward = update.message.reply_to_message.forward_from;
        this.replyID = update.message.reply_to_message.from.id;
        this.replyfID = update.message.reply_to_message.forward_from.id;
      }
    } else if (typeof update.callback_query !== 'undefined') {
      this.cbid = update.callback_query.id;
      this.cbdata = update.callback_query.data;
      this.cbmid = update.callback_query.message.message_id;
      this.chatID = update.callback_query.message.chat.id;
      this.userID = update.callback_query.from.id;
      this.name = update.callback_query.from.first_name;
      this.surname = update.callback_query.from.last_name;
      this.username = update.callback_query.from.username;
    }
  }
}
