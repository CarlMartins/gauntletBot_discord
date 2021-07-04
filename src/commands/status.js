const { GauntletModel } = require('../models/gauntlet');

module.exports = {
  name: 'status',
  description: 'These are our kingdom gauntles status!',
  async execute (message, args) {
    let gauntletInfo = [];

    const monthlyIncome = await GauntletModel.find({
      winDate: {
        $gt: (new Date().getFullYear(), 0)
      }
    }).exec();

    for (let income of monthlyIncome) {
      let month = income.winDate.toString().split(' ')[1];

      if (gauntletInfo.some(x => x.month === month)) {
        let index = gauntletInfo.findIndex(x => x.month === month);
        let newOrnAmount = income.ornAmount;
        let oldOrnAmount = gauntletInfo[index].ornAmount;
        gauntletInfo[index].ornAmount = oldOrnAmount + newOrnAmount;
      } else {
        gauntletInfo.push({
          month: month,
          ornAmount: income.ornAmount
        });
      }
    }

    let finalResult = '';
    for (let i = 0; i < gauntletInfo.length; i++) {
      finalResult += (`${ gauntletInfo[i].month } - ${ gauntletInfo[i].ornAmount.toLocaleString() } orns\n`);
    }

    message.channel.send(`${ message.author }: \n${ finalResult }`);
  },
};