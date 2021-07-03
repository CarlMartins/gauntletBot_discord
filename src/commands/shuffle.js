const { PlayerModel } = require('../models/player');

module.exports = {
  name: 'shuffle',
  description: 'Shuffle now!',
  async execute (message, args) {

    let shuffledPlayerName = args[0];
    let shuffledPlayer = await PlayerModel.findOne({ playerName: shuffledPlayerName });

    if (shuffledPlayer === null || shuffledPlayer.length === 0) {
      return message.channel.send(`${ message.author }: player ${ shuffledPlayerName } not found`);
    }

    let shuffledTimes = shuffledPlayer.shuffledTimes;
    await PlayerModel.updateOne({ playerName: shuffledPlayerName }, { shuffledTimes: shuffledTimes + 1 });
    await shuffledPlayer.save();


    let shufflerPlayerName = message.author.username;
    let shufflerPlayer = await PlayerModel.findOne({ playerName: shufflerPlayerName });

    if (shufflerPlayer === null || shufflerPlayer.length === 0) {
      return message.channel.send(`${ message.author }: player ${ shufflerPlayerName } not found.\nCreate your user using !add command.`);
    }

    let shufflePoints = shufflerPlayer.shufflePoints;
    await PlayerModel.updateOne({ playerName: shufflerPlayerName }, { shufflePoints: shufflePoints + 1 });
    await shufflerPlayer.save();


    return message.channel.send(`${ message.author }: ${ shuffledPlayerName } was shuffled ${ shuffledTimes + 1 } times.\n${ shufflerPlayerName } now has ${ shufflePoints + 1 } shuffle points.`);
  }
};