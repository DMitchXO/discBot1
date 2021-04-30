// Imports fetch from node-fetch module
const fetch = require('node-fetch');

// Accessible outside of module
module.exports = async function(msg, args){
    // Default tenor search argument
    let keywords = "basketball";
                
    // keywords entered after "!gif"
    if(args.length > 0){

        // Creates a new array with keywords only separated by " "
        keywords = args.join(" ");
    }

    // Fetch command to GET search results
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TOKEN_TENOR}&contentfilter=low&limit=6`
    let response = await fetch(url);
    let json = await response.json();
    //console.log(json);

    // Selects random gif from json response
    const index = Math.floor(Math.random(json.results.length));
    msg.channel.send(json.results[index].url);
    msg.channel.send("GIF from Tenor: " + keywords);
}