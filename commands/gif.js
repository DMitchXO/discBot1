const fetch = require('node-fetch');

// !gif default
let keywords = 'basketball';
// !gif with keyword search
if(tokens.length > 1){
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