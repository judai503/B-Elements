export default {
  command: ['todos', 'invocar', 'tagall', 'emotag', 'setemoji'],
  category: 'grupo',
  isAdmin: true,

  run: async (client, m, args) => {

    if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
    const chat = global.db.data.chats[m.chat]

    const groupInfo = await client.groupMetadata(m.chat)
    const participants = groupInfo.participants

    const cmd = m.command

    // 🌸 CAMBIAR EMOJI DEL GRUPO
    if (['emotag', 'setemoji'].includes(cmd)) {
      const emoji = args[0]
      if (!emoji) return client.reply(m.chat, '🌸 Usa: *.emotag 😺*', m)

      chat.tagEmoji = emoji
      return client.reply(m.chat, `✨ Emotag del grupo cambiado a ${emoji}`, m)
    }

    const pesan = args.join(' ')
    
    // 🦖🐾 MIX DE DINOS Y ANIMALITOS POR DEFECTO
    const animals = [
      '🦖', '🦕', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', 
      '🦁', '🐯', '🐼', '🐻', '🐺', '🦊', '🐨', '🐵', 
      '🐧', '🦅', '🦄', '🐙', '🦋', '🦈', '🐝', '🦉'
    ]
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)]
    const emoji = chat.tagEmoji || randomAnimal

    let teks = ` 🪩  *ATENCION TODOS* 🪩
  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

╭──  📌  *NEW NOTICE*
│ ${pesan || 'El Tio Judai Sigueme en tiktok'}
╰───────────────

  •──  📈 *STAFF:* ${participants.length}
  •──  🪄 *NOTIFICADO POR:* @${m.sender.split('@')[0]}

  🚀 *PARTICIPANTS:*
`

    for (const mem of participants) {
      teks += `  ⤷ ${emoji} @${mem.id.split('@')[0]}\n`
    }

    teks += `
  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
  🎁 *PROYECTO TOTALMENTE GRATUITO*
  ⚠️ *PROHIBIDA SU VENTA / DENUNCIA*
  
  ✨ *CREADO POR EL TIO JUDAI*
  📱 *TIKTOK:* @tm__judai`

    return client.reply(
      m.chat,
      teks,
      m,
      { mentions: [m.sender, ...participants.map(p => p.id)] }
    )
  }
}
