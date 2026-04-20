import fs from 'fs'
import { loadDB, ensureFolder } from './helper.js'

export default {
  command: ['stock'],
  run: async (client, m, args) => {
    const db = loadDB()
    ensureFolder()

    const chat = m.chat
    const type = args[0]?.toLowerCase()

    if (!type) {
      return m.reply('✐ Ejemplo: .stock pago')
    }

    const text = db?.[chat]?.[type]
    const img = `./stock/${chat}_${type}.jpg` // 🔥 FIX AQUÍ

    if (!text && !fs.existsSync(img)) {
      return m.reply('❌ No existe ese stock')
    }

    // 🖼️ Si hay imagen → enviar con caption
    if (fs.existsSync(img)) {
      return client.sendMessage(m.chat, {
        image: fs.readFileSync(img),
        caption: text || ''
      }, { quoted: m })
    }

    // 📝 Si solo hay texto
    m.reply(text)
  }
}
