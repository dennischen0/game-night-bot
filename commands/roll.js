const DiceRoller = require('rpg-dice-roller/lib/umd/bundle.js')

module.exports = {
  name: 'roll',
  alias: ['luck', 'r'],
  description: 'Rolls a die',
  execute (message, args) {
    const dice = new DiceRoller.DiceRoller()
    const input = args[0] ? args[0] : '1d7'
    dice.roll(input)
    const result = dice.log.shift()
    const reply = `${message.author} rolled ${result.toString()}`
    return message.channel.send(reply).catch(console.error)
  }
}
