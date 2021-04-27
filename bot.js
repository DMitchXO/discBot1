// Requires .env config file
require('dotenv').config();

// Requires fetch command
const fetch = require('node-fetch');

// Requires discord.js module
const Discord = require('discord.js');

// Initalizes discord client
const client = new Discord.Client();

// Login to Discord with bot token from .env
client.login(process.env.TOKEN_BOT);

// Array of replies for !boy
const replies = [
    'lil bwoi',
    'new boy',
    'baby boy' 
];

// When client is 'ready' runs code, once
client.once('ready', () => {
    console.log('bot online')
});

// Every message executes gotMessage function
client.on('message', gotMessage);

// Function used to display c
async function gotMessage(msg){

    // If message resides in a unique channel 
    if (msg.channel.id == process.env.TOKEN_CHANNEL) {
        
        // Displays every message from channel in the console
        console.log(msg.content);

        // Separates each word from message and inserts into array
        let tokens = msg.content.split(' ');


        // Select random reply for "!boy"
        if(tokens[0] === "!boy"){
            const index = Math.floor(Math.random() * replies.length);
            msg.channel.send(replies[index]);    
            
        // Selects random gif based on keywords for "!gif"
        } else if (tokens[0] == "!gif"){

            // Default tenor search term
            let keywords = "basketball";
            
            // keywords entered after "!gif"
            if(tokens.length > 1){

                // Creates a new array with keywords only separated by " "
                keywords = tokens.slice(1,tokens.length).join(" ")
            }

            // Fetch command to GET search results
            let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TOKEN_TENOR}&contentfilter=low&limit=6`
            let response = await fetch(url);
            let json = await response.json();
            console.log(json);

            // Selects random gif from json response
            const index = Math.floor(Math.random(json.results.length));
            msg.channel.send(json.results[index].url);
            msg.channel.send("GIF from Tenor: " + keywords);
        }
    }
 
        // Command Handler
    //let command = tokens.shift(); // removes 1st element from array and returns removed element
   // if (command.charAt[0] === "!"){
       // command = command.substring(1); // removes "!"
            
        //commands[command](tokens)
        //valid command
};

// 
//const commandHandler = require("./commands")



