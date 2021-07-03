const { playerModel } = require('../models/player');

module.exports = {
  name: 'add',
  description: 'Creates a new player in the database',
  async execute (message, args) {
    const newPlayer = await new playerModel({
      playerName: args[0]
    });

    newPlayer.save((err) => {
      console.log(err);
    });

    return message.channel.send(`Player ${ args[0] } created.`);
  }
};