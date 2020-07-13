const DiceRoller = require('rpg-dice-roller/lib/umd/bundle.js')

module.exports = {
    name: 'roll',
    alias: ['luck', 'r'],
    description: 'Rolls a die',
    execute(message, args) {
        let dice = new DiceRoller.DiceRoller();
        let input = args[0] ? args[0] : '1d7';
        dice.roll(input);
        let result = dice.log.shift();
        let reply = `${message.author} rolled ${result.toString()}`;
        return message.channel.send(reply).catch(console.error);
    }
}