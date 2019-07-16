exports.run = (update, client) => {
var http = require('http');
  var options = {
    host: 'shibe.online',
    path: '/api/shibes?count=1&urls=true&httpsUrls=true'
  };

var req = http.get(options, function(res) {
  var bodyChunks = [];
  res.on('data', function(chunk) {
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    var image = JSON.parse(body);
    var shibe = image[0]
    client.sendPhoto(update.chatID, shibe)
  })
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
}); 
  
  
}