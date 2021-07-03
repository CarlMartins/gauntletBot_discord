const { playerModel } = require('../models/player');

module.exports = {
  name: 'shuffle',
  description: 'Shuffle now!',
  async execute (message, args) {

    let shuffledPlayerFilter = { playerName: args[0] };
    let shuffledPlayer = await playerModel.findOne(shuffledPlayerFilter);

    if (shuffledPlayer === null || shuffledPlayer.length === 0) {
      return message.channel.send(`${ message.author }: player ${ args[0] } not found`);
    }

    let shuffledTimes = shuffledPlayer.shuffledTimes;
    await playerModel.updateOne(shuffledPlayerFilter, { shuffledTimes: shuffledTimes + 1 });
    await shuffledPlayer.save();


    let shufflerPlayerFilter = { playerName: message.author.username };
    let shufflerPlayer = await playerModel.findOne(shufflerPlayerFilter);

    if (shufflerPlayer === null || shufflerPlayer.length === 0) {
      return message.channel.send(`${ message.author }: player ${ shufflerPlayerFilter.playerName } not found.\nCreate your user using !add command.`);
    }

    let gauntletPoints = shufflerPlayer.gauntletPoints;
    await playerModel.updateOne(shufflerPlayerFilter, { gauntletPoints: gauntletPoints + 1 });
    await shufflerPlayer.save();


    return message.channel.send(`${ message.author }: ${ shuffledPlayerFilter.playerName } was shuffled ${ shuffledTimes + 1 } times.\n${ shufflerPlayerFilter.playerName } now has ${ gauntletPoints + 1 } shuffle points.`);
  }
};