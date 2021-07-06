const express = require('express');
const app = express();
// const { prefix, token } = require('../config.json');

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

require('./helpers/DbConnection');


const commandFiles = fs.readdirSync('src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${ file }`);
  client.commands.set(command.name, command);
}


client.once('ready', message => {
  console.log('Bot running');
});

client.on('message', message => {
  if (!message.content.startsWith(process.env.PREFIX || prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(process.env.PREFIX.length || prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) {
    return;
  }
  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.log(error);
    message.reply('There was an error trying to execute that command.');
  }
});


client.login(process.env.DISCORD_TOKEN || token);

app.listen(3000);