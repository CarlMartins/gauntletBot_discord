const { playerModel } = require('../models/player');

module.exports = {
  name: 'members',
  description: 'List all kingdom members',
  async execute (message, args) {

    const players = [];

    const allPlayersQuery = await playerModel.find({}).exec();

    for (let player of allPlayersQuery) {
      players.push(` ${ player.playerName } `);
    }

    players.sort();

    message.channel.send(`${ message.author }\n${ players }`);
  }
};