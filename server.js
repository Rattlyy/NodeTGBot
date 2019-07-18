require('dotenv').config()
var express = require('express')
var app = express()
const bodyParser = require('body-parser');
const Handler = require("./classes/Handler");
var token = process.env.TOKEN; //put your token here
var TelegramBotClient = require('telegram-bot-client');
var client = new TelegramBotClient(token);

app.use(bodyParser.json());

app.post('/webhook', function(req, res) {
    console.log("Got update");
    res.send("Ok");
    var update = new Handler(req.body);
    //Update Handling
    if (typeof update.msg !== 'undefined') {
    const args = update.msg.split(" ");
    var command = args[0]
    }
    if (typeof update.cbdata !== 'undefined') {
    console.log(update)
    var command = "cb:"+update.cbdata; //so that commands do not get handled as cbdata
    }
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(update, client);
    } catch (err) {
        console.log(err);
    }

})

const listener = app.listen(process.env.PORT, function() {
    console.log('Listening on ' + listener.address().port);
});