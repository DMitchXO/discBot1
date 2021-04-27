// Requires .env config file
require('dotenv').config();

// Requires discord.js module
const Discord = require('discord.js');

// Initalizes discord client
const client = new Discord.Client();

// Login to Discord with bot token from .env
client.login(process.env.TOKEN_BOT);


// When client is 'ready' runs code, once
client.once('ready', () => {
    console.log('bot online')
});

// 
const commandHandler = require("./commands")

// Every message executes gotMessage function
client.on('message', commandHandler);

