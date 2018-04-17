const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
    if(message.content == 'fag') {
        message.reply('red');
    }

});

bot.on('message', (message) => {
    
    if(message.content == 'monkey') {
        message.reply('https://imgur.com/DpvWdve');
    }

});

bot.on('message', (message) => {
    
    if(message.content == 'indian') {
        message.reply('https://imgur.com/a/CZvtd');
    }

});

bot.login('NDM1NjE4NDY0NDk4MDU3MjE2.Dbbk1g.qLohriMRwxGnJzhEGkouDoaRmmM');