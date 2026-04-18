export default {
  command: [
    'revlist25', 'revlist24', 'revlist23', 'revlist22', 'revlist21',
    'revlist20', 'revlist19', 'revlist18', 'revlist17', 'revlist16',
    'revlist15', 'revlist14', 'revlist13', 'revlist12', 'revlist11'
  ],
  category: 'grupo',
  isAdmin: true,

  run: async (client, m) => {
    if (!m.isGroup) return client.reply(m.chat, '⚠️ Este comando solo funciona en grupos.', m)

    const body = m.text || ''
    const cmd = m.command
    const textAfter = body.slice(body.indexOf(cmd) + cmd.length).trim()
    const emoji = textAfter.split(' ')[0]

    if (!emoji) {
      return client.reply(m.chat, `⚠️ Uso correcto:\n.${cmd} <emoji>\n\nEjemplo:\n.${cmd} 🍒`, m)
    }

    const metadata = await client.groupMetadata(m.chat)
    const groupName = metadata.subject
    const participants = metadata.participants.filter(p => !p.admin)
    const admins = metadata.participants.filter(p => p.admin)
    const mentions = metadata.participants.map(p => p.id)
    
    let mensaje = ''

    // --- COMANDOS 21 A 25 ---
    if (cmd === 'revlist25') {
      mensaje = `\n${emoji} *${groupName}* ${emoji}\n\n*AL 100 🔥*\n*TARDE 🍻*\n*SANSION ⛔*\n*PERMISO 🪪*\n*NUEV@S ✏️*\n*REINGRESO ♻️*\n\n⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆${emoji}⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆\n                *🔥 AL 100 🔥*\n${participants.map(p => `${emoji}┃@${p.id.split('@')[0]} 🔥🍻⛔🪪✏️♻️`).join('\n')}\n\n⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆${emoji}⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆\n              *🍻TARDE 🍻*\n\n⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆${emoji}⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆\n           *⛔SANSION ⛔*\n\n⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆${emoji}⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆\n          *🪪PERMISO 🪪*\n\n⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆${emoji}⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆\n            *✏️NUEV@S ✏️*\n\n⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆${emoji}⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆\n       *♻️REINGRESO ♻️*\n\n⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆${emoji}⋆｡‧˚ʚ-𖹭´-ɞ˚‧｡⋆\n  *🕶️ADMINISTRACIÓN🕶️*\n${admins.map(a => `${emoji}┇@${a.id.split('@')[0]}`).join('\n')}\n`
    }
    if (cmd === 'revlist24') {
      mensaje = `\n${emoji} *${groupName}* ${emoji}\n\n*𖦪𖤢ꕷꛤ𖣠ꛘꕷꛎꔪꚳ𖤢ꕷ  🍸*\n*𖢧ꛎ𖦪𖤀𖤢 🧋*\n*ꛈ𖦪𖦪𖤢ꕷꛤ𖣠ꛘꕷꛎꔪꚳ𖤢ꕷ 🫗*\n*ꛤ𖤢𖦪𖢑ꛈꕷ𖣠 🕶️*\n*ꛘꚶ𖤢ꚴ𖣠ꕷ 🍹*\n*𖤀𖤢ꚴꚶ𖤢ꚳ𖢧ꛎ ⛱️*\n\n⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆${emoji}⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆\n*🍸𖦪𖤢ꕷꛤ𖣠ꛘꕷꛎꔪꚳ𖤢ꕷ  🍸*\n${participants.map(p => `${emoji}┇ @${p.id.split('@')[0]} 🍸🧋🫗🕶️🍹⛱️`).join('\n')}\n\n⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆${emoji}⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆\n*🧋𖢧ꛎ𖦪𖤀𖤢 🧋*\n\n⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆${emoji}⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆\n*🫗ꛈ𖦪𖦪𖤢ꕷꛤ𖣠ꛘꛎꔪꚳ𖤢ꕷ 🫗*\n\n⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆${emoji}⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆\n*🕶️ꛤ𖤢𖦪𖢑ꛈꕷ𖣠 🕶️*\n\n⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆${emoji}⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆\n*🍹ꛘꚶ𖤢ꚴ𖣠ꕷ 🍹*\n\n⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆${emoji}⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆\n*⛱️𖤀𖤢ꚴꚶ𖤢ꚳ𖢧ꛎ ⛱️*\n\n⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆${emoji}⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆\n*${emoji}ꛎꛕꛎ𖦪ꚽ𖣠${emoji}*\n\n${admins.map(a => `${emoji}┇@${a.id.split('@')[0]}`).join('\n')}\n`
    }
    if (cmd === 'revlist23') {
      mensaje = `\n*${groupName}* 𝓐𝓵 𝓓𝓲𝓪 : 🍩\n𝓢𝓲𝓷 𝓔𝓿𝓲𝓭𝓮𝓷𝓬𝓲𝓪: ❌\n𝓘𝓷𝓰𝓻𝓮𝓼𝓸𝓼: 🧁\n𝓟𝓮𝓻𝓶𝓲𝓼𝓸𝓼: 🍪\n𝓔𝓷𝓽𝓻𝓮𝓰𝓪 𝓣𝓪𝓻𝓭𝓮: 🍫\n𝓘𝓷𝓽𝓮𝓰𝓻𝓪𝓷𝓽𝓮𝓼:\n\n︵‿₊୨ᰔ୧₊‿︵‧˚₊🩷₊˚‧︵‿₊୨ᰔ୧₊‿︵\n꒷꒦🍨꒷꒦🍧꒦꒷🍨꒦꒷\n🍩𝓐𝓵 𝓓𝓲𝓪 🍩\n${participants.map((p, i) => `${emoji}.- ${i + 1}. @${p.id.split('@')[0]} 🍩🍪🍫🧁❌`).join('\n')}\n\n꒷꒦🍨꒷꒦🍧꒦꒷🍨꒦꒷\n🍪 𝓟𝓮𝓻𝓶𝓲𝓼𝓸𝓼 🍪\n\n꒷꒦🍨꒷꒦🍧꒦꒷🍨꒦꒷\n🍫 𝓔𝓷𝓽𝓻𝓮𝓰𝓪 𝓣𝓪𝓻𝓭𝓮 🍫\n\n꒷꒦🍨꒷꒦🍧꒦꒷🍨꒦꒷\n❌ 𝓢𝓲𝓷 𝓔𝓿𝓲𝓭𝓮𝓷𝓬𝓲𝓪 ❌\n\n꒷꒦🍨꒷꒦🍧꒦꒷🍨꒦꒷\n🧁 𝓘𝓷𝓰𝓻𝓮𝓼𝓸𝓼 🧁\n\n︵‿₊୨ᰔ୧₊‿︵‧˚₊🩷₊˚‧︵‿₊୨ᰔ୧₊‿︵\n𝓐𝓭𝓶𝓲𝓷 𝓪 𝓒𝓪𝓻𝓰𝓸\n${admins.map(a => `${emoji}┆@${a.id.split('@')[0]}`).join('\n')}\n`
    }
    if (cmd === 'revlist22') {
      mensaje = `\n*${groupName}* 𝐀𝐋 𝐃𝐈𝐀 : ♣️\n𝐍𝐎 𝐀𝐋 𝐃𝐈𝐀: ❌\n𝐈𝐍𝐆𝐑𝐄𝐒𝐎𝐒: ♦️\n𝐏𝐄𝐑𝐌𝐈𝐒𝐎𝐒: ♠️\n𝐄𝐍𝐓𝐑𝐄𝐆𝐀 𝐓𝐀𝐑𝐃𝐄: ⌛\n𝐈𝐍𝐓𝐄𝐆𝐑𝐀𝐍𝐓𝐄𝐒:\n\n𖣯▫▪▫𖣯▫▪▫𖣯▫▪▫\n🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁\n♣️𝐀𝐋 𝐃𝐈𝐀 ♣️\n${participants.map((p, i) => `${emoji}┆${i + 1}. @${p.id.split('@')[0]} ♣️♥️♠️⌛❌`).join('\n')}\n\n🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁\n♠️ 𝐏𝐄𝐑𝐌𝐈𝐒𝐎𝐒♠️\n\n🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁\n⌛𝐄𝐍𝐓𝐑𝐄𝐆𝐀 𝐓𝐀𝐑𝐃𝐄⌛\n\n🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁\n❌𝐍𝐎 𝐀𝐋 𝐃𝐈𝐀❌\n\n🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁\n♦️𝐈𝐍𝐆𝐑𝐄𝐒𝐎𝐒♦️\n\n🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁🂭🂺🃜🃚🃖🃁\n𝐀𝐃𝐌𝐈𝐍 𝐀 𝐂𝐀𝐑𝐆𝐎\n${admins.map(a => `${emoji}┆@${a.id.split('@')[0]}`).join('\n')}\n`
    }
    if (cmd === 'revlist21') {
      mensaje = `\nꕥ▂ꕥ▂ꕥ▂ꕥ▂ꕥ▂ꕥ▂\n\n${emoji} *${groupName}* ${emoji}\n*ᴀʟ ᴅɪᴀ*: ✅\n*ᴇɴᴛʀᴇɢᴀ ᴛᴀʀᴅᴇ*: 🕝\n*ɴᴏ ᴀʟ ᴅɪᴀ*: ❌\n*ᴘᴇʀᴍɪsᴏ*: 🅿️\n*ɪɴɢʀᴇsᴏs*: 🆕\n*ɪɴᴛᴇɢʀᴀɴᴛᴇs*\n\nꕥ▂ꕥ▂ꕥ▂ꕥ▂ꕥ▂ꕥ▂\n\n𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭´-𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭\n💗ᴀʟ ᴅɪᴀ💗\n${participants.map(p => `${emoji}┆@${p.id.split('@')[0]} ✅🕝❌🅿️🆕`).join('\n')}\n\n𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭´-𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭\n💗ᴇɴᴛʀᴇɢᴀ ᴛᴀʀᴅᴇ💗\n\n𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭´-𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭\n💗ɴᴏ ᴀʟ ᴅɪᴀ💗\n\n𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭´-𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭\n💗ᴘᴇʀᴍɪsᴏs💗\n\n𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭´-𖹭´--𖹭´--𖹭´--𖹭´--𖹭´--𖹭\n💗ɪɴɢʀᴇsᴏs💗\n\nꕥ▂ꕥ▂ꕥ▂ꕥ▂ꕥ▂ꕥ▂\nᴀᴅᴍɪɴ ᴀ ᴄᴀʀɢᴏ\n${admins.map(a => `${emoji} ${a.notify || '@' + a.id.split('@')[0]} ʚᡣ𐭩ɞ`).join('\n')}\n`
    }

    // --- COMANDOS 16 A 20 ---
    if (cmd === 'revlist20') {
      mensaje = `\n${emoji}*${groupName}*${emoji}\n\nEXCELENTE 🐯\nTARDE 🐌\nNO AL DIA 🪳\nINGRESO 🐧\nREINGRESO 🐦‍🔥\nPERMISO 🐾\n\n⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞\n     🐯 *EXCELENTE* 🐯\n\n${participants.map(p => `${emoji}⤿@${p.id.split('@')[0]} 🐯🐌🪳🐧🐦‍🔥🐾`).join('\n')}\n\n⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞\n     🐌 *ENTREGA TARDE* 🐌\n\n⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞\n     🪳 *NO AL DIA* 🪳\n\n⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞\n      🐾 *PERMISO* 🐾\n\n⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞\n      🐧 *INGRESO* 🐧\n\n⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞\n      🐦‍🔥 *REINGRESO* 🐦‍🔥\n\n⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞⠳⣄⣀⣠⠞✿⢷ ֹ۪⡞\n☘️🍀 *ADMINISTRACIÓN* 🍀☘️\n\n${admins.map(a => `${emoji} @${a.id.split('@')[0]} ${emoji}`).join('\n')}\n`
    }
    if (cmd === 'revlist19') {
      mensaje = `\n${groupName}\n\n🥹 𝗣𝗲𝗿𝗺𝗶𝘀𝗼𝘀\n🙄 𝗘𝗻𝘁𝗿𝗲𝗴𝗮 𝘁𝗮𝗿𝗱𝗲\n😡 𝗡𝗼 𝗮𝗹 𝗱í𝗮\n🤩 𝗜𝗻𝗴𝗿𝗲𝘀𝗼\n🙂‍↔️ 𝗥𝗲𝗶𝗻𝗴𝗿𝗲𝘀𝗼\n\n✚✖✚✖ ${emoji} ✖✚✖✚ \n     🤪 𝗔𝗟 𝗗Í𝗔 🤪\n${participants.map(p => `${emoji} @${p.id.split('@')[0]} 🤪🙄😡🥹🤩🙂‍↔️`).join('\n')}\n\n✚✖✚✖ ${emoji} ✖✚✖✚ \n🙄 𝗘𝗡𝗧𝗥𝗘𝗚𝗔 𝗧𝗔𝗥𝗗𝗘 🙄\n\n✚✖✚✖ ${emoji} ✖✚✖✚ \n😡 𝗡𝗢 𝗔𝐋 𝗗Í𝗔 😡\n\n✚✖✚✖ ${emoji} ✖✚✖✚ \n    🥹 𝗣𝗘𝗥𝗠𝗜𝗦𝗢𝗦 🥹\n\n✚✖✚✖ ${emoji} ✖✚✖✚ \n     🤩 𝗜𝗡𝗚𝗥𝗘𝗦𝗢 🤩\n\n✚✖✚✖ ${emoji} ✖✚✖✚ \n     🙂‍↔️ 𝗥𝗘𝗜𝗡𝗚𝗥𝗘𝗦𝗢 🙂‍↔️\n\n✚✖✚✖ ${emoji} ✖✚✖✚ \n👑 𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗖𝗜Ó𝗡 👑\n${admins.map(a => `${emoji}@${a.id.split('@')[0]}${emoji}`).join('\n')}\n`
    }
    if (cmd === 'revlist18') {
      mensaje = `\n${groupName}\n🅟🅤🅝🅣🅤🅐🅛🅔🅢 😼\n🅔🅝🅣🅡🅔🅖🅐🅝 🅣🅐🅡🅓🅔 😿\n🅝🅞 🅐🅛 🅓🅘🅐 😾\n🅟🅔🅡🅜🅘🅢🅞 😺\n🅘🅝🅖🅡🅔🅢🅞 🙀\n🅡🅔🅘🅝🅖🅡🅔🅢🅞 😻\n\n ■□■□■ ${emoji} ■□■□■\n🅐🅛 🅓🅘🅐\n${participants.map(p => `${emoji}- @${p.id.split('@')[0]} 😼😿😾😺🙀😻`).join('\n')}\n ■□■□■ ${emoji} ■□■□■\n\n🅔🅝🅣🅡🅔🅖🅐🅝 🅣🅐🅡🅓🅔\n ■□■□■ ${emoji} ■□■□■\n\n🅝🅞 🅐🅛 🅓🅘🅐\n ■□■□■ ${emoji} ■□■□■\n\n🅟🅔🅡🅜🅘🅢🅞\n ■□■□■ ${emoji} ■□■□■\n\n🅘🅝🅖🅡🅔🅢🅞\n ■□■□■ ${emoji} ■□■□■\n\n🅡🅔🅘🅝🅖🅡🅔🅢🅞\n ■□■□■ ${emoji} ■□■□■\n\n🅐🅓🅜🅘🅝🅘🅢🅣🅡🅐🅒🅘🅞🅝\n${admins.map(a => `${emoji}${emoji} @${a.id.split('@')[0]} ${emoji}${emoji}`).join('\n')}\n`
    }
    if (cmd === 'revlist17') {
      mensaje = `\n${emoji} ${groupName} ${emoji}\n\n𝑨𝒍 𝒅𝒊́𝒂 🐥\n𝑬𝒏𝒕𝒓𝒆𝒈𝒂 𝒕𝒂𝒓𝒅𝒆 🐣\n𝑵𝒐 𝒂𝒍 𝒅𝒊́𝒂 🐤\n𝑷𝒆𝒓𝒎𝒊𝒔𝒐 🪶\n𝑵𝒖𝒆𝒗𝒐 🥚\n𝑹𝒆𝒊𝒏𝒈𝒓𝒆𝒔𝒐 🫕\n°❀⋆.ೃ࿔*:･ ${emoji} °❀⋆.ೃ࿔*:･\n🐥𝑨𝒍 𝒅𝒊́𝒂 🐥\n${participants.map(p => `${emoji}- @${p.id.split('@')[0]} 🐥🐣🐤🪶🥚🫕`).join('\n')}\n\n°❀⋆.ೃ࿔*:･ ${emoji} °❀⋆.ೃ࿔*:･\n🐤𝑵𝒐 𝒂𝒍 𝒅𝒊́𝒂 🐤\n\n°❀⋆.ೃ࿔*:･ ${emoji} °❀⋆.ೃ࿔*:･\n🐣𝑬𝒏𝒕𝒓𝒆𝒈𝒂 𝒕𝒂𝒓𝒅𝒆 🐣\n\n°❀⋆.ೃ࿔*:･ ${emoji} °❀⋆.ೃ࿔*:･\n🪶𝑷𝒆𝒓𝒎𝒊𝒔𝒐 🪶\n\n°❀⋆.ೃ࿔*:･ ${emoji} °❀⋆.ೃ࿔*:･\n🥚𝑵𝒖𝒆𝒗𝒐 🥚\n\n°❀⋆.ೃ࿔*:･ ${emoji} °❀⋆.ೃ࿔*:･\n🫕𝑹𝒆𝒊𝒏𝒈𝒓𝒆𝒔𝒐 🫕\n\n°❀⋆.ೃ࿔*:･ ${emoji} °❀⋆.ೃ࿔*:･\n💅 Administración 💅\n${admins.map(a => `${emoji}${emoji} @${a.id.split('@')[0]} ${emoji}${emoji}`).join('\n')}\n`
    }
    if (cmd === 'revlist16') {
      mensaje = `\n*Lista de revisión (${groupName})*\n\n*Al día 🔋*\n*No al día 🪫*\n*Permiso 🚑*\n*Entrega tarde 🕰️*\n*Nuevos 🧸*\n*Reingreso 🫂*\n\n⧉━━━━━━━${emoji}━━━━━━━⧉\n*🔋 Al día 🔋*\n\n${participants.map(p => `┃${emoji}┃@${p.id.split('@')[0]} 🔋🕰️🚑🫂🧸🚫`).join('\n')}\n\n⧉━━━━━━━${emoji}━━━━━━━⧉\n*🪫 No al día 🪫*\n\n⧉━━━━━━━${emoji}━━━━━━━⧉\n*🚑 Permiso 🚑*\n\n⧉━━━━━━━${emoji}━━━━━━━⧉\n*🕰️ Entrega tarde 🕰️*\n\n⧉━━━━━━━${emoji}━━━━━━━⧉\n*🧸 Nuevos 🧸*\n\n⧉━━━━━━━${emoji}━━━━━━━⧉\n*🫂 Reingreso 🫂*\n\n⧉━━━━━━━${emoji}━━━━━━━⧉\n*👑 Administración 👑*\n\n${admins.map(a => `@${a.id.split('@')[0]}`).join('\n')}\n`
    }

    // --- COMANDOS 11 A 15 ---
    if (cmd === 'revlist15') {
      mensaje = `\n📋𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐑𝐄𝐕𝐈𝐒𝐈𝐎́𝐍 *${groupName}*\n\n*𝐀𝐋 𝐃𝐈́𝐀 = 🟢*\n*𝐏𝐄𝐑𝐌𝐈𝐒𝐎𝐒 = 🔵*\n*𝐍𝐎 𝐀𝐋 𝐃𝐈́𝐀 = 🔴*\n*𝐄𝐍𝐓𝐑𝐄𝐆𝐀 𝐓𝐀𝐑𝐃𝐄 = 🟠*\n*𝐍𝐔𝐄𝐕𝐎𝐒 = ⚪*\n\n🟢★·.·´¯·.·★  🟢  ★·.·´¯·.·★🟢\n            🟢 *𝐀𝐋 𝐃𝐈́𝐀* 🟢\n${participants.map(p => `[${emoji}] @${p.id.split('@')[0]} 🟢🟠🔵⚪🔴`).join('\n')}\n\n🟠★·.·´¯·.·★  🟠 ★·.·´¯·.·★🟠\n       🟠 *𝐄𝐍𝐓𝐑𝐄𝐆𝐀 𝐓𝐀𝐑𝐃𝐄* 🟠\n\n🔵★·.·´¯·.·★  🔵  ★·.·´¯·.·★🔵\n         🔵 *𝐏𝐄𝐑𝐌𝐈𝐒𝐎𝐒* 🔵\n\n⚪★·.·´¯·.·★  ⚪  ★·.·´¯·.·★⚪\n            ⚪ *𝐍𝐔𝐄𝐕𝐎𝐒* ⚪\n\n🔴★·.·´¯·.·★  🔴  ★·.·´¯·.·★🔴\n         🔴 *𝐍𝐎 𝐀𝐋 𝐃𝐈́𝐀* 🔴\n\n⚫★·.·´¯·.·★  ⚫  ★·.·´¯·.·★⚫\n        ⚫ *𝐀𝐃𝐌𝐈𝐒* ⚫\n${admins.map(a => `[${emoji}] @${a.id.split('@')[0]}`).join('\n')}\n`
    }
    if (cmd === 'revlist14') {
      mensaje = `\n*📋𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐑𝐄𝐕𝐈𝐒𝐈𝐎́𝐍 "${groupName.toUpperCase()}"*\n\n*💯𝐀𝐋 𝐃𝐈́𝐀*\n*❌𝐍𝐎 𝐄𝐒𝐓Á𝐍 𝐀𝐋 𝐃𝐈́𝐀*\n*♻️𝐕𝐔𝐄𝐋𝐕𝐄𝐍 𝐃𝐄 𝐏𝐄𝐑𝐌𝐈𝐒𝐎*\n*🅿️𝐏𝐄𝐑𝐌𝐈𝐒𝐎𝐒*\n*⏱️𝐄𝐍𝐓𝐑𝐄𝐆𝐀𝐍 𝐌Á𝐒 𝐓𝐀𝐑𝐃𝐄*\n*🆕𝐏𝐄𝐑𝐒𝐎𝐍𝐈𝐓𝐀𝐒 𝐍𝐔𝐄𝐕𝐀𝐒*\n\n•——————•°•${emoji}•°•——————•\n*💯𝐀𝐋 𝐃𝐈́𝐀*\n${participants.map(p => `${emoji}| @${p.id.split('@')[0]} 💯⏱️🆕🅿️❌♻️`).join('\n')}\n•——————•°•${emoji}•°•——————•\n*⏱️𝐄𝐍𝐓𝐑𝐄𝐆𝐀 𝐓𝐀𝐑𝐃𝐄*\n\n•——————•°•${emoji}•°•——————•\n*🅿️𝐏𝐄𝐑𝐌𝐈𝐒𝐎*\n\n•——————•°•${emoji}•°•——————•\n*❌𝐍𝐎 𝐀𝐋 𝐃𝐈𝐀*\n\n•——————•°•${emoji}•°•——————•\n*♻️𝐕𝐔𝐄𝐋𝐕𝐄𝐍 𝐃𝐄 𝐏𝐄𝐑𝐌𝐈𝐒𝐎*\n\n•——————•°•${emoji}•°•——————•\n**🆕𝐏𝐄𝐑𝐒𝐎𝐍𝐈𝐓𝐀𝐒 𝐍𝐔𝐄𝐕𝐀𝐒*\n\n•——————•°•${emoji}•°•——————•\n*✨𝐀𝐃𝐌𝐈𝐒✨*\n${admins.map(a => `${emoji}| @${a.id.split('@')[0]}`).join('\n')}\n`
    }
    if (cmd === 'revlist13') {
      mensaje = `\n${emoji}${emoji} *${groupName}* ${emoji}${emoji}\n\n*Total de integrantes: ${participants.length}*\n\n𝐌𝐀𝐍𝐃𝐀𝐑𝐎𝐍 𝐄𝐕𝐈𝐃𝐄𝐍𝐂𝐈𝐀𝐒\n•——————•°•${emoji}•°•——————•\n\n${participants.map(p => `${emoji} @${p.id.split('@')[0]} ⌛✅❌🅿️🆕`).join('\n')}\n\n•——————•°•${emoji}•°•——————•\n𝐃𝐄𝐁𝐄𝐍 𝐄𝐕𝐈𝐃𝐄𝐍𝐂𝐈𝐀\n\n•——————•°•${emoji}•°•——————•\n𝐏𝐄𝐑𝐌𝐈𝐒𝐎\n\n•——————•°•${emoji}•°•——————•\n\n*Admis*\n${admins.map(a => `${emoji} @${a.id.split('@')[0]}`).join('\n')}\n`
    }
    if (cmd === 'revlist12') {
      mensaje = `\n${emoji} *MIS PEQUEÑ@S DIA* ${emoji}\n\n💗 (${groupName})💗\n\n👥 Integrantes: ${participants.length}\n\n•.•.•.•.•.•.•.•.•${emoji}•.•.•.•.•.•.•.•.•\n\n${participants.map(p => `${emoji}| @${p.id.split('@')[0]} ✅❌🆕⏱️🅿️`).join('\n')}\n\n•.•.•.•.•.•.•.•.•${emoji}•.•.•.•.•.•.•.•.•\n\n❌ No al día ❌\n\n•.•.•.•.•.•.•.•.•${emoji}•.•.•.•.•.•.•.•.•\n\n🆕🫂 Nuevos & reingresos 🫂🆕\n\n•.•.•.•.•.•.•.•.•${emoji}•.•.•.•.•.•.•.•.•\n\n⏱️🅿️ Permisos & entregas tarde 🅿️⏱️\n\n•.•.•.•.•.•.•.•.•${emoji}•.•.•.•.•.•.•.•.•\n\n✨️ *Admis* ✨️\n${admins.map(a => `${emoji}| @${a.id.split('@')[0]}`).join('\n')}\n`
    }
    if (cmd === 'revlist11') {
      mensaje = `\n${emoji} *lista de revisión (${groupName})* ${emoji}\n\n*Al día 🏆*\n*Entrega tarde 💤*\n*No al día 💢*\n*Permiso ⛑️*\n*Ingreso 👤*\n*Reingreso ♻️*\n\n⌁⚡⌁━━━━━━${emoji}━━━━━━⌁⚡⌁\n             *🏆Al día 🏆*\n\n${participants.map(p => `┃🏆💤⛑️💢👤♻️┃ @${p.id.split('@')[0]} ${emoji}`).join('\n')}\n\n⌁⚡⌁━━━━━━${emoji}━━━━━━⌁⚡⌁\n       *💤Entrega tarde 💤*\n\n⌁⚡⌁━━━━━━${emoji}━━━━━━⌁⚡⌁\n          *💢No al día 💢*\n\n⌁⚡⌁━━━━━━${emoji}━━━━━━⌁⚡⌁\n        *⛑️Permiso ⛑️*\n\n⌁⚡⌁━━━━━━${emoji}━━━━━━⌁⚡⌁\n          *👤Ingreso 👤*\n\n⌁⚡⌁━━━━━━${emoji}━━━━━━⌁⚡⌁\n          *♻️Reingreso ♻️*\n\n⌁⚡⌁━━━━━━${emoji}━━━━━━⌁⚡⌁\n${admins.map(a => `📢 @${a.id.split('@')[0]}`).join('\n')}\n`
    }

    return client.reply(m.chat, mensaje.trim(), m, { mentions })
  }
}
