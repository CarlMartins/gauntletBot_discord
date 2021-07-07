module.exports = {
  name: 'help',
  description: 'Commands',
  execute(message, args) {
    return message.channel.send(`${message.author} -
    !add "playername" **(Adds the player to the database)**
    !remove "playername" **(Remove the player from the database)**
    !members **(Show all members in the database)**
    !status **(Show kindom orn gains by month in the current year)**
    !win "ornamount" **(Adds the amount to the monthly gain)**
    !shuffle "shufflerplayer" "shuffledplayer" **(Starts a 20 minutes timer and notify officers)**
    !rank "+" or "-" **(Show a rank of all players by shuffle points or shuffled times)**`);
  },
};