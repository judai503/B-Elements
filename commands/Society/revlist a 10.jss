export default {
  command: ['revlist', 'revlist1', 'revlist2', 'revlist3', 'revlist4', 'revlist5', 'revlist6', 'revlist7', 'revlist8', 'revlist9', 'revlist10'],
  category: 'sociedad',
  run: async (client, m, args) => {
    if (!m.isGroup) return client.reply(m.chat, '⚠️ Este comando solo funciona en grupos.', m)

    const cmd = m.command
    const emoji = args[0] || '✨' 
    const metadata = await client.groupMetadata(m.chat)
    const groupName = metadata.subject
    const participants = metadata.participants
    const members = participants.filter(p => !p.admin)
    const admins = participants.filter(p => p.admin)
    const mentions = participants.map(p => p.id)
    
    let mensaje = ''

    // --- FUNCIONES DE APOYO ---
    const getNumEstilizado = (i, tipo) => {
      const circulos = ['❶','❷','❸','❹','❺','❻','❼','❽','❾','❶⓿'];
      const negros = ['➊','➋','➌','➍','➎','➏','➐','➑','➒','➓'];
      const superScript = ['¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹','¹⁰','¹¹','¹²','¹³','¹⁴','¹⁵','¹⁶','¹⁷','¹⁸','¹⁹','²⁰'];
      if (tipo === 'circulo') return circulos[i] || (i + 1);
      if (tipo === 'negro') return negros[i] || (i + 1);
      if (tipo === 'super') return superScript[i] || (i + 1);
      return i + 1;
    };

    // --- DISEÑO: REVLIST (GENERAL) ---
    if (cmd === 'revlist') {
      let lista = members.map((p, i) => `${i + 1}. ${emoji} @${p.id.split('@')[0]}\n    .🅛 .🅜.🅜.🅙.🅥\n*`).join('\n')
      mensaje = `*Lista de ${groupName}*\n\n*🅿️ PERMISO: 0*\n*🕑 P. Entregar tarde: 0*\n*❌ No al día: 0*\n*🆕 Ingresos y reingresos : 0*\n*🚻 Integrantes: ${members.length}*\n*${emoji} Reacciones: 0*\n•••••••••••••••••••••••••••••••••••\n\n${lista}\n\n•••••••••••••••••••••••••••••••••••\n*Administradores*\n${admins.map(a => '@' + a.id.split('@')[0]).join('\n')}`
    }

    // --- DISEÑO: REVLIST 1 ---
    if (cmd === 'revlist1') {
      let mList = participants.map(p => `${emoji} @${p.id.split('@')[0]}\n📅🅻 🅼 🅼 🅹 🆅\n* `).join('\n\n')
      mensaje = `🏷️ 『Grupo』➤ ${groupName}\n👥 『Integrantes』➤ ${participants.length}\n\n✅ 『Al día』➤ \n❌ 『No al día』➤ \n⏱️ 『Entrega tarde』➤ 0\n🆕 『Nuevos / Reingreso』➤ 0\n🅿️ 『Permiso』➤ 0\n\n📋 LISTA DE MIEMBROS\n❰︿﹀︿﹀${emoji}${emoji}﹀︿﹀❱\n\n${mList}\n\n❰︿﹀︿﹀${emoji}${emoji}﹀︿﹀❱\n\n『👑 ADMINISTRADORES』\n${admins.map(p => `${emoji} @${p.id.split('@')[0]}`).join('\n')}`
    }

    // --- DISEÑO: REVLIST 2 ---
    if (cmd === 'revlist2') {
      let lista = members.slice(0, 100).map((p, i) => `${getNumEstilizado(i, 'circulo')} @${p.id.split('@')[0]}\n🅻.🅼.🅼.🅹.🆅`).join('\n\n')
      mensaje = `${emoji} ${groupName} ${emoji}\n\n      ${emoji} ɆVłĐɆ₦₵ł₳₴ ${emoji}\n\n*ᴀʟ ᴅíᴀ ${emoji}*\n*ɴᴏ ᴀʟ ᴅíᴀ ❌*\n*ᴘᴇʀᴍɪꜱᴏ 🅿️*\n*ᴇɴᴛʀᴇɢᴀ ᴛᴀʀᴅᴇ ⏱️*\n*ɪɴɢʀᴇꜱᴏ ʏ ʀᴇɪɴɢʀᴇꜱᴏ 🆕*\n\n      ${emoji} 𝕀ℕ𝕋𝔼𝔾ℝ𝔸ℕ𝕋𝔼𝕊 ${emoji}\n\n${lista}\n\n_______________\n*ADM acargo*\n${admins.map(p => '@' + p.id.split('@')[0]).join('\n')}`
    }

    // --- DISEÑO: REVLIST 3 ---
    if (cmd === 'revlist3') {
      let lista = members.slice(0, 100).map((p, i) => `${getNumEstilizado(i, 'negro')} @${p.id.split('@')[0]} ${emoji}\n🄻 🄼 🄼 .🄹 🅅`).join('\n\n')
      const sep = `°❀⋆.ೃ࿔.*:･･:*.ೃ࿔.⋆❀${emoji}°❀⋆.ೃ࿔.*:･･:*.ೃ࿔.⋆❀`
      mensaje = `${emoji} ${groupName} ${emoji}\n⭐ 𝐀𝐋 𝐃𝐈́𝐀\n🄻🄼🄼🄹🅅\n❌ 𝐍𝐎 𝐀𝐋 𝐃𝐈́𝐀\n🆕 𝐍𝐔𝐄𝐕𝐎𝐒\n🅿️ 𝐏𝐄𝐑𝐌𝐈𝐒𝐎𝐒\n🆕 𝐑𝐄𝐈𝐍𝐆𝐑𝐄𝐒𝐎𝐒\n⏱️ 𝐄𝐕𝐈𝐃𝐄𝐍𝐂𝐈𝐀𝐒 𝐌𝐀𝐒 𝐓𝐀𝐑𝐃𝐄\n⭐ 𝐄𝐕𝐈𝐃𝐄𝐍𝐂𝐈𝐀𝐒 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀\n\n${sep}\n\n${lista}\n\n${sep}\n\n𝐄𝐍𝐂𝐀𝐑𝐆𝐀𝐃𝐎𝐒\n${admins.map(p => `${emoji}@${p.id.split('@')[0]}`).join('\n')}`
    }

    // --- DISEÑO: REVLIST 4 ---
    if (cmd === 'revlist4') {
      let lista = members.slice(0, 100).map((p, i) => `${emoji}┊${getNumEstilizado(i, 'super')} @${p.id.split('@')[0]}\n${emoji}┊ 🅛┊🅜.🅜┊🅙🅥\n${emoji}┊`).join('\n')
      mensaje = `*𝐄𝐍𝐂𝐀𝐑𝐆𝐀𝐃𝐎𝐒*\n\n*𝐀𝐋 𝐃𝐈́𝐀 ✅*\n*𝐍𝐎 𝐀𝐋 𝐃𝐈́𝐀 ❌*\n*𝐄𝐍𝐓𝐑𝐄𝐆𝐀 𝐓𝐀𝐑𝐃𝐄 🕛*\n*𝐍𝐔𝐄𝐕𝐎 𝐘 𝐑𝐄𝐈𝐍𝐆𝐑𝐄𝐒𝐎 💌*\n*𝐏𝐄𝐑𝐌𝐈𝐒𝐎 🪪*\n\n${emoji}𓆉 𓆝 𓆡⋆.˚ ${emoji}𓇼𓇼 ⋆.˚ 𓆉 ${emoji}\n           *MIS PEQUES*\n\n${lista}\n\n${emoji}𓆉 𓆝 𓆡⋆.˚ ${emoji}𓇼𓇼 ⋆.˚ 𓆉 ${emoji}\n\n*𝐄𝐍𝐂𝐀𝐑𝐆𝐀𝐃𝐎𝐒*\n${admins.map(p => `${emoji}┊@${p.id.split('@')[0]}`).join('\n')}`
    }

    // --- DISEÑO: REVLIST 5 ---
    if (cmd === 'revlist5') {
      let lista = members.map((p, i) => `${emoji}┊${i+1} @${p.id.split('@')[0]}\n      🄻 🄼 🄼 🄹 🅅\n*`).join('\n')
      mensaje = `──★˙≽^• ˕ • ྀི≼${emoji}≽^• ˕ • ྀི≼★──\n\n*${groupName.toUpperCase()}* ${emoji}\n\n*𝐀𝐋 𝐃𝐈́𝐀* ✅\n*𝐍𝐎 𝐀𝐋 𝐃𝐈́𝐀* ❌\n*𝐄𝐍𝐓𝐑𝐄𝐆𝐀 𝐓𝐀𝐑𝐃𝐄* 🕛\n*𝐍𝐔𝐄𝐕𝐎 𝐘 𝐑𝐄𝐈𝐍𝐆𝐑𝐄𝐒𝐎* 💌\n*𝐏𝐄𝐑𝐌𝐈𝐒𝐎* 🪪\n\n──★˙≽^• ˕ • ྀི≼${emoji}≽^• ˕ • ྀི≼★──\n*MIS PEQUES*\n\n${lista}\n\n──★˙≽^• ˕ • ྀི≼${emoji}≽^• ˕ • ྀི≼★──\n*𝐄𝐍𝐂𝐀𝐑𝐆𝐀𝐃𝐎𝐒*\n\n${admins.map(p => `${emoji}┊@${p.id.split('@')[0]}`).join('\n')}`
    }

    // --- DISEÑO: REVLIST 6 ---
    if (cmd === 'revlist6') {
      const d = ['✨','🔥','🍃','⚡','🌙']
      let listaM = members.map((p, i) => `✺ ${i+1} @${p.id.split('@')[0]} ${emoji}\n${d.join(' ┆ ')}`).join('\n\n')
      mensaje = `${emoji} 𝑻𝒆𝒂𝒎 ${groupName} ${emoji}\n\n✦ *Al día* ✅\n✦ *No al día* ❌\n✦ *Permiso* 🅿️\n✦ *Nuevo / Reingreso* 🆕\n\n*Integrantes:* ${members.length} 🐚\n*L${d[0]} M ${d[1]} M ${d[2]} J ${d[3]} V ${d[4]}*\n\n⋆｡𖦹 ˚ 𓇼 ˚｡⋆⋆｡𖦹 ˚ 𓇼 ˚｡⋆\n\n${listaM}\n\n⋆｡𖦹 ˚ 𓇼 ˚｡⋆⋆｡𖦹 ˚ 𓇼 ˚｡⋆\n\n*Encargados / Admins:*\n${admins.map(a => `⚓ @${a.id.split('@')[0]}`).join('\n')}`
    }

    // --- DISEÑO: REVLIST 7 ---
    if (cmd === 'revlist7') {
      const d = ['⛩️','🌸','🍥','☯','🍜']
      let listaM = members.map((p, i) => `${i + 1}. @${p.id.split('@')[0]} ${emoji}\n${d.join(' ┆ ')}`).join('\n\n')
      mensaje = `${emoji} *${groupName}* ${emoji}\n\n*Al día* ✅\n*No al día* ❌\n*Permiso* 🅿️\n*Nuevo / Reingreso* 🆕\n\n*Integrantes:* ${members.length} 🧧\n*L ${d.join(' M ')}*\n\n𒅒𒈔𒅒𒇫𒄆𒅒\n\n${listaM}\n\n𒅒𒈔𒅒𒇫𒄆𒅒\n*Encargados / Admins*:\n${admins.map(a => `🧧 @${a.id.split('@')[0]}`).join('\n')}`
    }

    // --- DISEÑO: REVLIST 8 ---
    if (cmd === 'revlist8') {
      mensaje = `${emoji} *${groupName}* ${emoji}\n\n*Al día* ✅\n*No al día* ❌\n*Permiso* 🅿️\n*Nuevo / Reingreso* 🆕\n\n🗞️ *Integrantes:* ${members.length}\n\n*L ┋ M ┋ M ┋ J ┋ V*\n🐳 ┋ 🐟 ┋ 🐠 ┋ 🐡 ┋ 🐬\n\n✹⛴•••••⛴•••••⛴•••✹`
      members.forEach((u, i) => { mensaje += `\n\n${emoji} *${i + 1}.* @${u.id.split('@')[0]}\n🐳 ┋ 🐟 ┋ 🐠 ┋ 🐡 ┋ 🐬` })
      mensaje += `\n\n✹⛴•••••⛴•••••⛴•••✹\n\n*Encargados / Admins:*\n${admins.map(a => `${emoji} @${a.id.split('@')[0]}`).join('\n')}`
    }

    // --- DISEÑO: REVLIST 9 ---
    if (cmd === 'revlist9') {
      let lista = members.map((p, i) => `${emoji} ${i + 1} @${p.id.split('@')[0]}\n   🅻. 🅼. 🅼. 🅹. 🆅\n-`).join('\n')
      mensaje = `${emoji} ${groupName} ${emoji}\n*Pueden subir link mis niñ@s* ${emoji}\n*Integrantes:* ${members.length}\n*REACCIÓNES*:\n*AL DÍA* ${emoji}\n*PERMISOS* 🅿️\n*ENTREGA TARDE* ⏳\n*NO AL DÍA* ❌\n*NUEVA INTEGRANTE* 🎊\n*REINGRESO* 🆕\n*SALIÓ DE TEAM* 💔\n_____________________\n${lista}\n_______________________\n${emoji} *Administradoras* ${emoji}\n${admins.map(p => `       ${emoji}@${p.id.split('@')[0]} ${emoji}`).join('\n')}`
    }

    // --- DISEÑO: REVLIST 10 ---
    if (cmd === 'revlist10') {
      let encabezado = `✨${emoji} *LISTA DE REVISIÓN 10* ${emoji}✨\n📅 *Semanal: L M M J V*\n\n*Al día* ✅\n*No al día* ❌\n*Permiso* 🅿️\n*Nuevo / Reingreso* 🆕\n\n`
      let ejemplo = `📌 *Ejemplo de miembro:*\n❥︎@ejemplo ${emoji}\n📅 L ✅   M ✅   M ❌   J ❌   V ✅\n───────────────────────────────\n`
      let listaM = members.map((p, i) => `*${i+1}.* ❥︎@${p.id.split('@')[0]} ${emoji}\n📅 L ___   M ___   M ___   J ___   V ___\n───────────────────────────────`).join('\n')
      mensaje = `${encabezado}${ejemplo}👥 *Miembros:*\n\n${listaM}\n\n🛡️ *Encargados / Admins:*\n${admins.map(a => `@${a.id.split('@')[0]}`).join('\n')}`
    }

    await client.sendMessage(m.chat, { text: mensaje.trim(), mentions }, { quoted: m })
  }
}
