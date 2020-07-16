// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech')

const fs = require('fs')
const util = require('util')

const client = new textToSpeech.TextToSpeechClient()

module.exports = {
  name: 'say',
  description: 'Say something!',
  async execute (message, args) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join()

      await generateMp3(args.join(' '))

      const dispatcher = connection.play('output.mp3')

      dispatcher.on('start', () => {
        console.log('output.mp3 is now playing!')
      })

      dispatcher.on('finish', () => {
        console.log('output.mp3 has finished playing!')
      })

      dispatcher.on('error', console.error)
    }

    async function generateMp3 (text) {
      const request = {
        input: { text: text },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' }
      }

      // Performs the text-to-speech request
      const [response] = await client.synthesizeSpeech(request)
      // Write the binary audio content to a local file
      const writeFile = util.promisify(fs.writeFile)
      await writeFile('output.mp3', response.audioContent, 'binary')
      console.log('Audio content written to file: output.mp3')
    }
  }
}
