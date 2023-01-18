const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv').config();
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.API;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


// Listen for any kind of message. There are different kinds o
bot.onText(/\/demo(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    var randomstring = require('randomstring')
    // send a message to the chat acknowledging receipt of their message
   bot.sendMessage(chatId, `Your text id ${randomstring.generate(5)}`);
  const doc = 'rules.txt'
  
  const url = 'https://telegram.org/img/t_logo.png';
  bot.sendDocument(chatId, doc);
  bot.sendDocument(chatId, url);
  bot.sendMessage('this is a demo and read rules ')
  });
  //
  bot.onText(/\/download(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    var randomstring = require('randomstring')

    // send a message to the chat acknowledging receipt of their message
  const doc = 'rules.txt'
  const resp = match[1];
  const url = resp;
  
  bot.sendDocument(chatId, doc);
  bot.sendDocument(chatId, `${url}`);
  bot.sendMessage('this is a demo and read rules ')
  }); 
  bot.onText(/\/star(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const group = ''
    const doc = 'rules.txt'
    bot.sendDocument(chatId, doc)
     bot.sendContact(chatId,`+917498553750`,`Pawit Sahare [Admin]`)
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'I am alive \n and type /demon or type``` /download+url``` or \n example :- /download+telegram.org/img/t_logo.png  . and type exact and change url');
    bot.sendMessage(chatId, 'You can play game using /play')
    bot.sendMessage(chatId, 'You can also invite player with userid , it wotk on non existing user')
  });
  //bot.sendMessage(nonExistentUserId, 'text').catch((error) => {
  //console.log(error.code);  // => 'ETELEGRAM'
 // console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
 bot.onText(/\/myfil(.+)/, (msg, match) => {
    const respon = match[1];
    const chatId = msg.chat.id
    const fileId = getFileIdSomehow();
    bot.sendAudio(chatId, fileId);
 })
  bot.onText(/\/downloa(.+)/, (msg, match) => { 
      const chatId = msg.chat.id;
   bot.sendMessage(chatId,'You are send wrong || For example :- ```/download+url ``` \n Note url not contain http:// or http:// just remove https:// http:// from url')
   bot.createChatInviteLink(chatId)
   
  });


  
  bot.onText(/\/pla(.+)/, (msg, match) => {
    // command
    const chatId = msg.chat.id;
    const url = `game.jpg`;
    bot.sendPhoto(chatId, url);
    const gameurl = `Play Game - ${process.env.DOMAIN_NAME}`
    bot.sendMessage(chatId, `You need to play game Right? || Open this link and play game`)
    bot.sendMessage(chatId,gameurl);
    bot.sendPhoto(chatId, `https://images.assetsdelivery.com/compings_v2/putracetol/putracetol1805/putracetol180503254.jpg`)
    bot.sendMessage(chatId,gameurl);
 
   });
   
   bot.onText(/\/con(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
     bot.sendContact(chatId,`+917498553750`,`Pawit Sahare [Admin]`)
   });
// express js
   const express = require('express')
   const app = express()
   const port = 3000
   const path1 = require('path')
   app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname,'game.html'))
   })
   
   app.listen(port, () => {
     console.log(`Listening Port ${port}`)
   })
      
