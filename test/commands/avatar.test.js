const avatar = require('../../src/commands/avatar.js')
// const { Message } = require('discord.js')

const { Message } = jest.genMockFromModule('discord.js')

Message.mockImplementation(() => {
  return {
    channel: {
      send: jest.fn()
    },
    mentions: {
      users: jest.fn(() => {
        console.log('aklsdjfklajh')
      })
    },
    author: {
      displayAvatarURL: jest.fn(() => { return 'https://avatar.png' })
    }
  }
})

describe('avatar', () => {
  let message

  beforeEach(() => {
    // Resets the mocks (clears all calls to functions, etc)
    Message.mockClear()

    message = new Message() // This will create our mock implementation as an instance
    console.log(message.mentions.users)
  })

  describe('when no user mentioned', () => {
    test('should respond with user\'s avatar', () => {
      avatar.execute(message)
      expect(message.channel.send).toHaveBeenCalledWith(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`)
    })
  })
})
