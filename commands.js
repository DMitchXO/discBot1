// Requires specific command modules
const boy = require('./commands/boy.js');
const gif = require('./commands/gif.js');

// ENHANCED OBJECT LITERALS
const commands = { boy , gif};

// Function used to respond to specific messages
module.exports = async function (msg){

    // If message resides in a unique channel 
    if (msg.channel.id == process.env.TOKEN_CHANNEL) {
        
        // Displays every message from channel in the console
        //console.log(msg.content);

        // Separates each word from message and inserts into array and command var
        let tokens = msg.content.split(' ');
        let command = tokens.shift();

        // Separates command from arguments and searches for it's function
        // Error Handling
        try{
            if(command.charAt(0) === "!"){
                command = command.substring(1);
                commands[command](msg, tokens);
            };
        } catch{
            msg.channel.send("Command Not Found :/");
        }
    }
};