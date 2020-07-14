const argsInfo = require('../../src/commands/args-info.js')

describe('args-info', () => {
  const mockMessage = {
    channel: {
      send: jest.fn(() => {})
    }
  }
  test('should respond with bar', () => {
    argsInfo.execute(mockMessage, ['foo'])
    expect(mockMessage.channel.send).toHaveBeenCalledWith('bar')
  })

  test('non foo arg', () => {
    const args = ['test']
    argsInfo.execute(mockMessage, args)
    expect(mockMessage.channel.send).toHaveBeenCalledWith(`Arguments: ${args}\nArguments length: ${args.length}`)
  })
})
