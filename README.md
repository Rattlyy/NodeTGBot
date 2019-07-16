# NodeTGBot [![Bot API Version](https://img.shields.io/badge/Bot%20API-v4.3-f36caf.svg?style=flat-square)](https://core.telegram.org/bots/api) ![Version](https://img.shields.io/badge/version-v1.0.0-orange.svg)

Simple Node Telegram Bot base

## Tutorial
 
### Installation

Easy Way: https://glitch.com/edit/#!/remix/nodetgbot 

Set the webhook to the link of glitch + /webhook and set the token in .env

Webhook template: https://api.telegram.org/bot<b>YOURTOKEN</b>/setWebhook?url=<b>HTTPS site url</b>/webhook

Difficult Way:

```bash
git clone https://github.com/zRattly/NodeTGBot.git
npm i --s
node server.js
```

Set the webhook to the link + /webhook and set the token in .env

Webhook template: https://api.telegram.org/bot<b>YOURTOKEN</b>/setWebhook?url=<b>HTTPS site url</b>/webhook

### How to use it

Read the example commands + [telegram api wrapper docs](https://www.npmjs.com/package/telegram-bot-client)

### How does it works

The Express webserver gets the update and the "Handler" class process it.

A small script is inserted for handling updates better and having a cleaner code.

## Support

[@RattlyBot](t.me/RattlyBot)
