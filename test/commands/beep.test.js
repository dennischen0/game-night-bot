const beep = require('../../src/commands/beep.js')
const { Message } = require('discord.js')

jest.mock('discord.js')

Message.mockImplementation(() => {
  return {
    channel: {
      send: jest.fn()
    }
  }
})

describe('beep', () => {
  let message

  beforeEach(() => {
    // Resets the mocks (clears all calls to functions, etc)
    Message.mockClear()

    message = new Message() // This will create our mock implementation as an instance
  })

  test('should respond with boop', () => {
    beep.execute(message)
    expect(message.channel.send).toHaveBeenCalledWith('Boop.')
  })
})
