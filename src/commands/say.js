const textToSpeech = require('@google-cloud/text-to-speech')
const fs = require('fs')
const util = require('util')
const tmp = require('tmp')

const client = new textToSpeech.TextToSpeechClient({
  credentials: {
    client_email: process.env.GOOGLE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
  },
  project_id: process.env.GOOGLE_PROJECT_ID
})

module.exports = {
  name: 'say',
  description: 'Say something!',
  args: true,
  async execute (message, args) {
    let languageCode = 'en-US'
    let voiceName = ''
    let ssmlGender = 'NEUTRAL'

    if (args[0] === 'lang') {
      languageCode = args[1]
      voiceName = args[2]
      ssmlGender = args[3]
      args = args.slice(4, args.length)
    }

    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join()

      const dispatcher = connection.play(await generateMp3(languageCode, voiceName, ssmlGender, args.join(' ')))

      dispatcher.on('start', () => {
        // console.log('output.mp3 is now playing!')
      })

      dispatcher.on('finish', () => {
        // console.log('output.mp3 has finished playing!')
      })

      dispatcher.on('error', console.error)
    }

    async function generateMp3 (languageCode, voiceName, ssmlGender, text) {
      const request = {
        input: { text: text },
        // voice: { languageCode: 'en-US', voiceName: '', ssmlGender: 'NEUTRAL' },
        // voice: { languageCode: 'cmn-TW', voiceName: 'cmn-TW-Wavenet-A', ssmlGender: 'FEMALE' },
        // voice: { languageCode: 'ko-KR', voiceName: 'ko-KR-Wavenet-A', ssmlGender: 'FEMALE' },
        voice: { languageCode: languageCode, voiceName: voiceName, ssmlGender: ssmlGender },
        audioConfig: { audioEncoding: 'MP3' }
      }

      const [response] = await client.synthesizeSpeech(request)
      const tmpobj = tmp.fileSync()

      const writeFile = util.promisify(fs.writeFile)
      await writeFile(tmpobj.name, response.audioContent, 'binary')
      // console.log(`Audio content written to file: ${tmpobj.name}`)

      return tmpobj.name
    }
  }
}
