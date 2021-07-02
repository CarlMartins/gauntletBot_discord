module.exports = {
  name: 'ping',
  description: 'Ping! Ping! Ping!',
  execute (message, args) {


    message.channel.send(`Your argumets were ${ args }`);
  },
};