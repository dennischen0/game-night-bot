require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
      console.info(taggedUser.username.toLowerCase());
      if (taggedUser.username.toLowerCase() === "dennis") {
        msg.channel.send(`${taggedUser.username} cannot be kicked.`);
      }
    } else {
      msg.reply('Please tag a valid user!');
    }
  } else if (msg.content.startsWith('!promote') || msg.content.startsWith('!demote')) {
    let roleCache = msg.guild.roles.cache
    let promotedRole = roleCache.find(role => role.name === "Promoted");
    let demotedRole = roleCache.find(role => role.name === "Demoted");
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      let guildMember = msg.guild.member(taggedUser);
      if (msg.content.startsWith('!promote')) {
        guildMember.roles.add(promotedRole);
        guildMember.roles.remove(demotedRole);
      } else {
        guildMember.roles.add(demotedRole);
        guildMember.roles.remove(promotedRole);
      }
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});