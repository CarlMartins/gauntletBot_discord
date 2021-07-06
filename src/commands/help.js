module.exports = {
  name: 'help',
  description: 'Commands',
  execute(message, args) {
    return message.channel.send(`${message.author} -
    !add "playername"
    !remove "playername"
    !members
    !status
    !win "ornamount"
    !shuffle "shufflerplayer" "shuffledplayer"
    !rank "shuffledtimes" or "shufflepoints"`);
  },
};