const { PlayerModel } = require('../models/player');
const Discord = require('discord.js');
const client = new Discord.Client();
const guild = new Discord.Guild();

module.exports = {
  name: 'shuffle',
  description: 'Shuffle now!',
  async execute (message, args) {

    let [shufflerPlayerName, shuffledPlayerName] = args;
    let shuffledPlayer = await PlayerModel.find({ playerName: { $regex: shuffledPlayerName, $options: 'i' } }).exec();

    if (shuffledPlayer === null || shuffledPlayer.length === 0) {
      return message.channel.send(`${ message.author }: player ${ shuffledPlayerName } not found`);
    } else if (shuffledPlayer.length > 1) {
      let playersFound = shuffledPlayer.map(player => player.playerName);
      return message.channel.send(`${ message.author }: players found: ${ playersFound } `);
    }

    let shufflerPlayer = await PlayerModel.find({ playerName: { $regex: shufflerPlayerName, $options: 'i' } }).exec();

    if (shufflerPlayer === null || shufflerPlayer.length === 0) {
      return message.channel.send(`${ message.author }: player ${ shufflerPlayerName } not found.\nCreate your user using !add command.`);
    } else if (shufflerPlayer.length > 1) {
      let playersFound = shufflerPlayer.map(player => player.playerName);
      return message.channel.send(`${ message.author }: players found: ${ playersFound } `);
    }

    [shufflerPlayer] = shufflerPlayer;
    await PlayerModel.updateOne({ playerName: shufflerPlayer.playerName }, { shufflePoints: shufflerPlayer.shufflePoints + 1 });
    await shufflerPlayer.save();

    [shuffledPlayer] = shuffledPlayer;
    await PlayerModel.updateOne({ playerName: shuffledPlayer.playerName }, { shuffledTimes: shuffledPlayer.shuffledTimes + 1 });
    await shuffledPlayer.save();

    setTimeout(() => {
      let role = message.guild.roles.cache.find(role => role.name === 'Officer');
      message.channel.send(`${ role }: gauntlet available to be shuffled again.`);
    }, 1200000);

    return message.channel.send(`${ message.author }: ${ shuffledPlayer.playerName } was shuffled ${ shuffledPlayer.shuffledTimes + 1 } times.\n${ shufflerPlayer.playerName } now has ${ shufflerPlayer.shufflePoints + 1 } shuffle points.`);
  }
};