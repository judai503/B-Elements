import { loadDB } from './helper.js'

export default {
  command: ['stocklist'],
  run: async (client, m) => {
    const db = loadDB()
    const chat = m.chat

    const stocks = db?.[chat]

    // ❌ No hay nada
    if (!stocks || Object.keys(stocks).length === 0) {
      return m.reply('❌ No hay stocks registrados')
    }

    // 📦 Ordenar
    const list = Object.keys(stocks).sort()

    let txt = '📦 *STOCKS DISPONIBLES*\n'
    txt += '━━━━━━━━━━━━━━\n\n'

    list.forEach((k, i) => {
      txt += `🔹 ${k}\n`
    })

    txt += '\n💡 Usa: .stock <nombre>'

    m.reply(txt)
  }
}
