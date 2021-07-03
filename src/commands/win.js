const { GauntletModel } = require('../models/gauntlet');

module.exports = {
  name: 'win',
  description: 'Create a win in the database',
  async execute (message, args) {

    const newWin = await new GauntletModel({
      ornAmount: args[0]
    });

    newWin.save((err) => {
      console.log(err);
    });

    message.channel.send(`Win added to the database.`);
  },
};