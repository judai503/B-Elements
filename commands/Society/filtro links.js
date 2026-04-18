export default {
  command: ['dd'],
  category: 'grupo',
  isAdmin: true,
  botAdmin: true,
  run: async (client, m, args, usedPrefix, command) => {
    try {
      const groupMetadata = await client.groupMetadata(m.chat)
      const participants = groupMetadata.participants
      const description = groupMetadata.desc ? groupMetadata.desc : ''

      // 1. Extraer enlaces de la descripción
      const urlRegex = /(https?:\/\/[^\s]+)/g
      const linksFound = description.match(urlRegex) || []

      if (linksFound.length === 0) {
        return m.reply(`《✧》 No hay enlaces en la descripción del grupo para mostrar.`)
      }

      // Filtramos a los que NO son administradores
      const nonAdmins = participants.filter(p => !p.admin).map(v => v.id)

      // --- PRIMER MENSAJE: Lista de enlaces numerados ---
      let textoLinks = `《 *SOCIETY INFO* 》\n\n`
      linksFound.forEach((link, index) => {
        textoLinks += `*Link de perfil ${index + 1}*\n${link}\n\n`
      })

      await client.sendMessage(m.chat, { 
        text: textoLinks.trim() 
      }, { quoted: m })

      // --- SEGUNDO MENSAJE: Seguimiento + Etiquetas ---
      if (nonAdmins.length > 0) {
        let textMenciones = `✿ *MANDAR CAPTURA DE EL SEGUIMIENTO O SEGUIMIENTOS*\n\n`
        textMenciones += nonAdmins.map(v => `@${v.split('@')[0]}`).join(' ')

        await client.sendMessage(m.chat, {
          text: textMenciones,
          mentions: nonAdmins
        })
      } else {
        return client.reply(m.chat, `《✧》 No hay miembros comunes para etiquetar.`, m)
      }

    } catch (e) {
      await m.reply(`> An unexpected error occurred while executing command *${usedPrefix + command}*.\n> [Error: *${e.message}*]`)
    }
  },
};
