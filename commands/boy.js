// Array of replies for bot
const replies = [
    'lil bwoi',
    'new boy',
    'baby boy' 
]

// Accessible outside of module
module.exports = function(msg, args){
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
};
