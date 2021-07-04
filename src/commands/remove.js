const { PlayerModel } = require('../models/player');

module.exports = {
  name: 'remove',
  description: 'Creates a new player in the database',
  async execute (message, args) {


    const player = await PlayerModel.findOne({
      playerName: args[0]
    }).exec();

    if (player === null) {
      return message.channel.send(`${ message.author }: player ${ args[0] } not found`);
    }

    await PlayerModel.deleteOne({
      playerName: args[0]
    });

    return message.channel.send(`${ message.author }: player ${ args[0] } removed.`);
  }
};