// Imports fetch from node-fetch module


//const boy = require('./commands/boy.js');
//const gif = require('./commands/gif.js');


/* 
const commands = {
    boy: function() {
        console.log('boy');
    },
    gif: function(args) {
        console.log('gif');
    },
};*/


/*(module.exports = async function gotMessage(msg){

    // Displays every message from server in the console
    console.log(msg.content);

    // If message resides in a unique channel and separates each words
    if (msg.channel.id == process.env.TOKEN_CHANNEL) {
        let tokens = msg.content.split(" ");


        // Array of replies for bot
        if(tokens[0] =="!boy"){
            const index = Math.floor(Math.random() * replies.length);
            msg.channel.send(replies[index]);        
        } else if (tokens[0] == "!gif"){

            // Default tenor search term
            let keywords = "basketball";
            
            
            if(tokens.length > 1){
                // Creates a new array with keyswords separated by " "
                keywords = tokens.slice(1,tokens.length).join(" ")
            }
                // Fetch command to GET search results
                let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TOKEN_TENOR}&contentfilter=low`
                let response = await fetch(url);
                let json = await response.json();
                //console.log(json);

                // Selects random gif from json response
                const index = Math.floor(Math.random() * json.results.length);
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


const replies = [
    'lil bwoi',
    'new boy',
    'baby boy' 
];



*/