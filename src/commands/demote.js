module.exports = {
  name: 'demote',
  description: 'Demote a user',
  execute (message, args) {
    if (!message.guild) {
      console.info('No guild found!')
      return
    }
    const roleCache = message.guild.roles.cache
    const promotedRole = roleCache.find(role => role.name === 'Promoted')
    const demotedRole = roleCache.find(role => role.name === 'Demoted')
    if (message.mentions.users.size) {
      const taggedUser = message.mentions.users.first()
      const guildMember = message.guild.member(taggedUser)
      if (message.content.startsWith('!promote')) {
        guildMember.roles.add(promotedRole)
        guildMember.roles.remove(demotedRole)
        message.channel.send(`${taggedUser.username} promoted.`)
      } else {
        guildMember.roles.add(demotedRole)
        guildMember.roles.remove(promotedRole)
        message.channel.send(`${taggedUser.username} demoted.`)
      }
    } else {
      message.reply('Please tag a valid user!')
    }
  }
}
