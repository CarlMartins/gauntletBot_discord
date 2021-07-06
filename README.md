<p align="center">
  <img src="https://orna.guide/static/orna/img/shops/dungeon.png" width="250"><br>
</p>

<h1 align="center">Gauntlet bot for discord</h1>

<p align="center">
  <a href=#about>About</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href=#technologies>Technologies</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href=#setup>Setup</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href=#commands>Commands</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href=#error-handling>Error Handling</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href=#known-issues>Known Issues</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


### About
This is a discord BOT made with Node.js and MongoDB for help my kingdom in a mobile RPG game called [Orna RPG](https://play.google.com/store/apps/details?id=playorna.com.orna). <br>
It's important to say that multiple methods was poorly implemented with lots of repeatedly code, but they work just fine.

### Technologies
- [Node.js](https://nodejs.org/en/)
- [Discord.js](https://discord.js.org/#/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mongoose](https://mongoosejs.com/)
- [Mongo DB](https://www.mongodb.com/pt-br)

### Setup

- Install [Node.js](https://nodejs.org/en/)

- Install [Yarn](https://classic.yarnpkg.com/lang/en/)

```bash
# Clone the repository
$ git clone https://github.com/CarlMartins/gauntletBot_discord.git

# Install the dependencies
$ yarn install
```

Before you start the bot, you need to rename the ``config.sample.json`` file to ``config.json`` and change the properties:
 - prefix: The prefix that will be used to call the bot commands
 - token: This is your discord token. [See how to get yours](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token).
 - connectionString: This is your string to connect do your MongoDb database. [See how to get yours](https://docs.mongodb.com/guides/server/drivers/).

After all,
```bash
# Install the dependencies
$ yarn install
```

### Commands
```!add "player name"``` - Adds the player in the database. <br>
```!remove "player name"``` - Removes the player from the database <br>
```!members``` - Lists all the members in the database <br>
```!shuffle "shuffler name" "shuffled name"``` - The first parameter is the name of who is shuffling the gauntlet. The second one is who is being shuffled. In the database, it will add 1 shuffle point to the shuffler and 1 shuffled time points to that who was shuffled. Both names can be written in a short way like: "LongPlayerName" you can write "long".<br>
```!rank shuffledtimes``` - Show a rank list of all kingdom members starting from the most shuffled player. <br>
```!rank shufflepoints``` - Show a rank list of all kingdom members starting from the player with greater amount of shuffle points. <br>
```!win "orn amount"``` - Adds the orn amount got form gauntlet win to the database. <br>
```!status``` - Show all the orn gain separated by month in the current year. <br>


### Error handling
  - If you use ``!shuffle`` command and any of the given usernames are not found in the database, it will return an error message in the discord channel.
  - If you use ``!shuffle`` command and any of the given usernames returns more than 1 result, it will log an error message in the discord channel telling the existing players in the database.
  - If you use ``!delete`` command and the given player name does not exists, it will log an error message in the discord channel.
  - If you use ``!add`` command and the given player already exists in the database, it will log an error message in the discord channel.

### Known issues
  - If you have two player named ``foo`` and ``foobar``, you cannot use ``!shuffle foo foobar`` because ``foo`` matches both players.

<hr>

<p align="center">
    Made by
    <a href="https://github.com/CarlMartins">Carlos Martins</a>
    -
    <a href="https://www.linkedin.com/in/carlos-alberto-lemos-martins-oliveira-189b291b5/">LinkedIn</a>
</p>