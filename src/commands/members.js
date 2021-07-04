const { PlayerModel } = require('../models/player');

module.exports = {
  name: 'members',
  description: 'List all kingdom members',
  async execute (message, args) {

    const players = [];

    const allPlayersQuery = await PlayerModel.find({}).exec();

    for (let player of allPlayersQuery) {
      players.push(` ${ player.playerName } `);
    }

    players.sort();

    message.channel.send(`${ message.author }\n${ players }`);
  }
};