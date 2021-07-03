const { PlayerModel } = require('../models/player');

module.exports = {
  name: 'shuffle',
  description: 'Shuffle now!',
  async execute (message, args) {

    let shuffledPlayerFilter = { playerName: args[0] };
    let shuffledPlayer = await PlayerModel.findOne(shuffledPlayerFilter);

    if (shuffledPlayer === null || shuffledPlayer.length === 0) {
      return message.channel.send(`${ message.author }: player ${ args[0] } not found`);
    }

    let shuffledTimes = shuffledPlayer.shuffledTimes;
    await PlayerModel.updateOne(shuffledPlayerFilter, { shuffledTimes: shuffledTimes + 1 });
    await shuffledPlayer.save();


    let shufflerPlayerFilter = { playerName: message.author.username };
    let shufflerPlayer = await PlayerModel.findOne(shufflerPlayerFilter);

    if (shufflerPlayer === null || shufflerPlayer.length === 0) {
      return message.channel.send(`${ message.author }: player ${ shufflerPlayerFilter.playerName } not found.\nCreate your user using !add command.`);
    }

    let shufflePoints = shufflerPlayer.shufflePoints;
    await PlayerModel.updateOne(shufflerPlayerFilter, { shufflePoints: shufflePoints + 1 });
    await shufflerPlayer.save();


    return message.channel.send(`${ message.author }: ${ shuffledPlayerFilter.playerName } was shuffled ${ shuffledTimes + 1 } times.\n${ shufflerPlayerFilter.playerName } now has ${ shufflePoints + 1 } shuffle points.`);
  }
};