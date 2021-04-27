// Imports fetch from node-fetch module


const boy = require('./commands/boy.js');
const gif = require('./commands/gif.js');



const commands = {
    boy: function() {
        console.log('boy');
    },
    gif: function(args) {
        console.log('gif');
    },
};

// Displays every message from server in the console
module.exports = async function (msg){

    console.log(msg.content);
    // If message resides in a unique channel and 
    if (msg.channel.id == process.env.TOKEN_CHANNEL) {
        let tokens = msg.content.split(' ');

        // Command Handler
        let command = tokens.shift(); // removes 1st element from array and returns removed element
        if (command.charAt[0] === "!"){
            command = command.substring(1); // removes "!"
            
            commands[command](tokens)
            //valid command

            

        };
    };
};


