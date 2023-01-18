const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv').config();
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.APIT;

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
  bot.sendMessage('this is a demo and read rules ');
      bot.sendMessage('TYPE /download to get dwonload ')
  });
  //
  bot.onText(/\/filedem(.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  const dem = 'http://ipv4.download.thinkbroadband.com/50MB.zip'
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
  bot.sendDocument(chatId,dem)
}); 
 bot.onText(/\/fileget (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  const dem = resp;
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
  bot.sendDocument(chatId,dem)
}); 


  bot.onText(/\/star(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const group = ''
    const doc = 'rules.txt'
    bot.sendDocument(chatId, doc)
     bot.sendContact(chatId,`+917498553750`,`Pawit Sahare [Admin]`)
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'I am alive \n and type /demon or type``` /fileget url``` or \n example :- /fileget telegram.org/img/t_logo.png  . and type exact and change url');
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
   bot.sendMessage(chatId,'You are send wrong || For example :- ```/fileget+url ``` \n example /fileget+https://speed.hetzner.de/100MB.bin')
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
    bot.sendPhoto(chatId, `https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg`)
   });
   
   bot.onText(/\/con(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
     bot.sendContact(chatId,`+917498553750`,`Pawit Sahare [Admin]`)
   });
bot.onText(/\/daw(.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const photo = 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg'
    const down = 'game.html'
     bot.sendDocument(chatId,down)
     bot.sendPhoto(chatId,photo)
   });
// express js
      
