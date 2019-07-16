exports.run = (update, client) => {
  client
    .sendMessage(update.chatID, 'Node')
    .promise()
    .then(function(res){
    client
      .delay("1000")
      .editMessageText(update.chatID, res.result.message_id, "NodeTG")
      .promise()
      .then(function(res1) {
            client
              .delay("1000")
              .editMessageText(update.chatID, res1.result.message_id, "NodeTGBot")
      }, function(err){
        console.log(err)
      });
    }, function(err){
        console.log(err);
    });
  
}