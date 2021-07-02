module.exports = {
  name: 'shuffle',
  description: 'Shuffle now!',
  execute (message, args) {
    let arrayPlayers = [{
      id: 1,
      name: "EdinDen",
      shufflePoints: 0,
      shuffledTimes: 2
    },
    {
      id: 2,
      name: "SSSensational",
      shufflePoints: 1,
      shuffledTimes: 0
    }];


    let shuffledPlayer = arrayPlayers.find(shuffled => shuffled.name === args[0]);
    let player = arrayPlayers.find(p => p.name === message.author.username);

    let shuffledPlayerIndex = arrayPlayers.findIndex((shuffled => shuffled.name === shuffledPlayer.name));
    let playerIndex = arrayPlayers.findIndex((p => p.name === player.name));

    message.channel.send(`Player ${ shuffledPlayer.name } shuffled. He was shuffled ${ shuffledPlayer.shuffledTimes } times already. ${ message.author } now have ${ player.shufflePoints } shuffle points.`);
  },
};