import fs from 'fs'
import { downloadContentFromMessage } from '@whiskeysockets/baileys'
import { loadDB, saveDB, ensureFolder } from './helper.js'

export default {
  command: ['setstock'],
  isAdmin: true,
  run: async (client, m, args) => {
    const db = loadDB()
    ensureFolder()

    const chat = m.chat
    const type = args[0]?.toLowerCase()

    if (!type) {
      return m.reply(`✐ Uso:
.setstock pago texto
.setstock diamantes texto

O responde a un mensaje o imagen`)
    }

    if (!db[chat]) db[chat] = {}

    let finalText = args.slice(1).join(' ') || ''
    let savedText = false
    let savedImage = false

    // 📌 Obtener texto desde respuesta (caption o texto)
    if (!finalText && m.quoted) {
      finalText = m.quoted.text || m.quoted.caption || ''
    }

    if (!finalText && !m.quoted) {
      return m.reply('❌ Debes agregar texto o responder a algo')
    }

    // 💾 Guardar texto
    if (finalText) {
      db[chat][type] = finalText
      savedText = true
    }

    // 🖼️ GUARDAR IMAGEN (FIX TOTAL)
    if (m.quoted) {
      try {
        const quoted = m.quoted.message

        const imageMsg =
          quoted?.imageMessage ||
          quoted?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage

        if (imageMsg) {
          const stream = await downloadContentFromMessage(imageMsg, 'image')

          let buffer = Buffer.from([])
          for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
          }

          const path = `./stock/${chat}_${type}.jpg`
          fs.writeFileSync(path, buffer)

          savedImage = true
          console.log('✅ Imagen guardada en:', path)
        }
      } catch (err) {
        console.log('❌ Error al guardar imagen:', err)
      }
    }

    saveDB(db)

    // 📢 RESPUESTA FINAL
    let msg = '✅ Stock guardado:\n'

    if (savedText) msg += '📝 Texto\n'
    if (savedImage) msg += '🖼️ Imagen\n'

    m.reply(msg.trim())
  }
}
