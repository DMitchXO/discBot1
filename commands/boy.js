// Array of replies for bot
const replies = [
    'lil bwoi',
    'new boy',
    'baby boy' 
]

module.exports = function(msg, args){
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
};