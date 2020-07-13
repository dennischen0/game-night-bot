const ping = require('../../src/commands/ping.js')

describe('ping', () => {
  const mockMessage = {
    reply: jest.fn(() => {})
  }
  test('should respond with pong', () => {
    ping.execute(mockMessage)
    expect(mockMessage.reply).toHaveBeenCalledWith('pong')
  })
})
