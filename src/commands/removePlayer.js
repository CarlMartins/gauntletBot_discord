const { playerModel } = require('../models/player');

module.exports = {
  name: 'remove',
  description: 'Creates a new player in the database',
  async execute (message, args) {


    const player = await playerModel.findOne({
      playerName: args[0]
    }).exec();

    if (player === null) {
      return message.channel.send(`Player ${ args[0] } not found`);
    }

    await playerModel.deleteOne({
      playerName: args[0]
    });

    return message.channel.send(`Player ${ args[0] } removed.`);
  }
};