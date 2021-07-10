const { PlayerModel } = require('../models/player');

module.exports = {
  name: 'rank',
  description: 'Players shuffle ranking',
  async execute (message, args) {
    let [filter] = args;
    let playerData = [];
    let finalString = '';

    if (filter === '-') {
      playerData = await PlayerModel.find({}).sort({ 'shuffledTimes': -1 }).limit(15).exec();
      playerData = playerData.map(({ playerName, shuffledTimes }) => ({ playerName, shuffledTimes }));

      finalString = '';
      for (let { playerName, shuffledTimes } of playerData) {
        finalString += `**${ playerName }** - ${ shuffledTimes } times\n`;
      }

      return message.channel.send(`${ message.author }:\n${ finalString }`);
    } else if (filter === '+') {
      playerData = await PlayerModel.find({}).sort({ 'shufflePoints': -1 }).limit(15).exec();
      playerData = playerData.map(({ playerName, shufflePoints }) => ({ playerName, shufflePoints }));

      finalString = '';
      for (let { playerName, shufflePoints } of playerData) {
        finalString += `**${ playerName }** - ${ shufflePoints } points\n`;
      }

      return message.channel.send(`${ message.author }:\n${ finalString }`);
    }

    message.channel.send(`${ message.author }:\n${ finalString }`);
  }
};
