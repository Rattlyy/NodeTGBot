# NodeTGBot [![Bot API Version](https://img.shields.io/badge/Bot%20API-v4.3-f36caf.svg?style=flat-square)](https://core.telegram.org/bots/api) ![Version](https://img.shields.io/badge/version-v1.0.0-orange.svg)

Simple Node Telegram Bot base -- <b>NOW SUPPORTING KEYBOARDS</b>

## Tutorial
 
### Installation

#### WHAT IS A SECRET:

A secret is a random string that needs to be set in your server.js file, also, it needs to be passed in the webhook in the SECRET field.

Why? Because if you don't pass this secret someone can send fake updates to the bot, making the code thinks that we're doing stuff but we're not.

#### Easy Way: [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/nodetgbot) 

Set the webhook to the link of glitch + /webhook and set the token in .env

Webhook template: https://api.telegram.org/bot<b>YOURTOKEN</b>/setWebhook?url=<b>HTTPS site url</b>/webhook/<b>SECRET</b>

#### Difficult Way:

```bash
git clone https://github.com/zRattly/NodeTGBot.git
npm i --s
node server.js
```

Set the webhook to the link + /webhook and set the token in .env

Webhook template: https://api.telegram.org/bot<b>YOURTOKEN</b>/setWebhook?url=<b>HTTPS site url</b>/webhook/<b>SECRET</b>

### How to use it

Read the example commands + [telegram api wrapper docs](https://www.npmjs.com/package/telegram-bot-client)

### How does it works

The Express webserver gets the update and the "Handler" class process it.

A small script is inserted for handling updates better and having a cleaner code.

## Support

[@Rattly](t.me/Rattly)
