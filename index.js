require('dotenv').config()
const fs = require('fs')
const Discord = require('discord.js')
const TOKEN = process.env.TOKEN
const { prefix } = require('./config.json')
const bot = new Discord.Client()

bot.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)

  bot.commands.set(command.name, command)
}

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()

  if (!bot.commands.has(command)) return

  try {
    bot.commands.get(command).execute(message, args)
  } catch (error) {
    console.error(error)
    message.reply('there was an error trying to execute that command!')
  }
})

bot.login(TOKEN)
