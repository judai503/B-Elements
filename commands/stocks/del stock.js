import fs from 'fs'
import { loadDB, saveDB } from './helper.js'

export default {
  command: ['delstock'],
  isAdmin: true,
  run: async (client, m, args) => {
    const db = loadDB()

    const chat = m.chat
    const type = args[0]?.toLowerCase()

    if (!type) return m.reply('✐ Ejemplo: .delstock pago')

    // 🗑️ Eliminar texto
    if (db[chat] && db[chat][type]) {
      delete db[chat][type]
    }

    // 🖼️ Eliminar imagen
    const img = `./stock/${chat}_${type}.jpg` // 🔥 FIX
    if (fs.existsSync(img)) {
      fs.unlinkSync(img)
    }

    saveDB(db)

    m.reply(`🗑️ Stock "${type}" eliminado correctamente`)
  }
}
