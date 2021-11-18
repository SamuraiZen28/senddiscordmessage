const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Put whatever you want here!" } })
})
client.on("message", message => {
  if(message.content === `${config.prefix}ping`) {
    message.channel.send("Pong!")
}})

client.login(config.token);
