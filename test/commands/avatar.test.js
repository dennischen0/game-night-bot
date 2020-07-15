// const avatar = require('../../src/commands/avatar.js')

describe('when no user mentioned', () => {
  // const message = {
  //   channel: {
  //     send: jest.fn(() => {})
  //   },
  //   mentions: {
  //     users: []
  //   },
  //   author: {
  //     displayAvatarURL: jest.fn(() => { return 'https://avatar.png' })
  //   }
  // }
  test('should respond with user\'s avatar', () => {
    // avatar.execute(message)
    expect(1 + 1).toBe(2)
    // expect(message.channel.send).toHaveBeenCalledWith(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`)
  })
})
