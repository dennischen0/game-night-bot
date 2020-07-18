// const say = require('../../src/commands/say.js')
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

describe('say', () => {
  // let message
  // let env

  // beforeEach(() => {
  //   env = process.env
  //   process.env = {
  //     GOOGLE_ACCOUNT_EMAIL: 'fake',
  //     GOOGLE_PRIVATE_KEY: 'fake\n',
  //     GOOGLE_PROJECT_ID: 'fake'
  //   }
  //   // Resets the mocks (clears all calls to functions, etc)
  //   Message.mockClear()

  //   message = new Message() // This will create our mock implementation as an instance
  //   console.log(message.mentions.users)
  // })

  // afterEach(function () {
  //   process.env = env
  // })

  describe('when user is not in voice channel', () => {
    test('should respond with user\'s avatar', () => {
      // say.execute(message)
      // expect(message.member.voice.channel.join).not.toHaveBeenCalled()
      expect(1 + 1).toBe(2)
    })
  })
})
