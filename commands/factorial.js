const { factorial } = require('mathjs')

module.exports = {
  name: 'factorial',
  description: 'Factorial!',
  async execute (message, args) {
    const amount = parseInt(args[0])

    if (isNaN(amount)) {
      return message.reply('that doesn\'t seem to be a valid number.')
    } else {
      message.reply(factorial(amount))
    }
  }
}
