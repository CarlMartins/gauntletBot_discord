const { playerModel } = require('../models/player');

module.exports = {
  name: 'add',
  description: 'Creates a new player in the database',
  async execute (message, args) {

    let playerExists = await playerModel.find({ playerName: args[0] }).exec();

    if (playerExists.length > 0) {
      return message.channel.send(`${ message.author }: player ${ args[0] } already exists.`);
    }

    const newPlayer = await new playerModel({
      playerName: args[0]
    });

    newPlayer.save((err) => {
      console.log(err);
    });

    return message.channel.send(`${ message.author }: player ${ args[0] } was created.`);
  }
};