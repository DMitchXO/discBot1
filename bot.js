// Requires .env config file
require('dotenv').config();

// Requires discord.js module
const Discord = require('discord.js');

// Initalizes discord client
const client = new Discord.Client();

// When client is 'ready' runs code, once
client.once('ready', () => {
    console.log('bot online')
});

// Retrieves function which handles each message
const commandHandler = require("./commands.js")

// Every message executes gotMessage function
client.on('message', commandHandler);

// Login to Discord with bot token from .env
client.login(process.env.TOKEN_BOT);