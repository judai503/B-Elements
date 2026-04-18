export default {
  command: ['tit'],
  category: 'diversion',
  run: async (client, m, args) => {
    // Si no hay texto después del comando
    const text = args.join(' ')
    if (!text) return client.reply(m.chat, '❌ Escribe el texto que quieres convertir.\nEjemplo: .tit hola', m)

    const abcAzul = {
      'a': '🇦', 'b': '🇧', 'c': '🇨', 'd': '🇩', 'e': '🇪', 'f': '🇫', 'g': '🇬',
      'h': '🇭', 'i': '🇮', 'j': '🇯', 'k': '🇰', 'l': '🇱', 'm': '🇲', 'n': '🇳',
      'o': '🇴', 'p': '🇵', 'q': '🇶', 'r': '🇷', 's': '🇸', 't': '🇹', 'u': '🇺',
      'v': '🇻', 'w': '🇼', 'x': '🇽', 'y': '🇾', 'z': '🇿'
    }

    // Convertimos el texto a los emojis regionales
    let convertido = text.toLowerCase().split('').map(letra => abcAzul[letra] || letra).join(' ')

    // Formato final solicitado
    let mensaje = ` ${convertido}`

    await client.sendMessage(m.chat, { text: mensaje }, { quoted: m })
  }
}
