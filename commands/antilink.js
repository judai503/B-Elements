const linkRegex = /(https?:\/\/[^\s]+)/i

const blockedDomains = [
  'chat.whatsapp.com',
  'whatsapp.com/channel',
  'tiktok.com',
  'vm.tiktok.com',
  'vt.tiktok.com',
  'm.tiktok.com',
  'lite.tiktok.com',
  'instagram.com',
  'facebook.com',
  'fb.watch',
  't.me',
  'twitter.com',
  'x.com'
]

const allowedLinks = [
  'https://whatsapp.com/channel/0029Vb64nWqLo4hb8cuxe23n'
]

export default async (client, m) => {
  if (!m.isGroup || !m.text) return

  const groupMetadata = await client.groupMetadata(m.chat).catch(() => null)
  if (!groupMetadata) return

  const participants = groupMetadata.participants || []
  const groupAdmins = participants
    .filter(p => p.admin)
    .map(p => p.phoneNumber || p.jid || p.id || p.lid)

  const isAdmin = groupAdmins.includes(m.sender)

  const botId = client.user.id.split(':')[0] + '@s.whatsapp.net'
  const isBotAdmin = groupAdmins.includes(botId)

  const isSelf = global.db.data.settings[botId]?.self ?? false
  if (isSelf) return

  const chat = global?.db?.data?.chats?.[m.chat]
  const primaryBotId = chat?.primaryBot
  const isPrimary = !primaryBotId || primaryBotId === botId

  // 🔥 condiciones principales
  if (!chat?.antilinks || isAdmin || !isBotAdmin || !isPrimary) return

  const hasLink = linkRegex.test(m.text)
  if (!hasLink) return

  const isAllowed = allowedLinks.some(link => m.text.includes(link))
  if (isAllowed) return

  const isBlocked = blockedDomains.some(domain =>
    m.text.toLowerCase().includes(domain)
  )
  if (!isBlocked) return

  // 🗑️ eliminar mensaje
  await client.sendMessage(m.chat, {
    delete: {
      remoteJid: m.chat,
      fromMe: false,
      id: m.key.id,
      participant: m.key.participant
    }
  })

  // 🧠 SISTEMA DE WARNS POR GRUPO
  if (!chat.warns) chat.warns = {}

  if (!chat.warns[m.sender]) {
    chat.warns[m.sender] = 0
  }

  chat.warns[m.sender] += 1
  const warn = chat.warns[m.sender]

  const userName = global.db.data.users[m.sender]?.name || 'Usuario'

  // 🔍 detectar tipo de link
  let tipo = 'enlaces externos'
  if (m.text.includes('tiktok')) tipo = 'TikTok'
  else if (m.text.includes('instagram')) tipo = 'Instagram'
  else if (m.text.includes('facebook')) tipo = 'Facebook'
  else if (m.text.includes('t.me')) tipo = 'Telegram'
  else if (m.text.includes('twitter') || m.text.includes('x.com')) tipo = 'Twitter/X'
  else if (m.text.includes('whatsapp.com/channel')) tipo = 'canales'
  else if (m.text.includes('chat.whatsapp.com')) tipo = 'grupos de WhatsApp'

  // ⚠️ advertencias
  if (warn < 3) {
    return client.reply(
      m.chat,
      `⚠️ Advertencia ${warn}/3\n\n@${m.sender.split('@')[0]} no envíes enlaces de *${tipo}*.\nA la 3ra advertencia serás eliminado.`,
      m,
      { mentions: [m.sender] }
    )
  }

  // 🚫 expulsión
  chat.warns[m.sender] = 0

  await client.reply(
    m.chat,
    `🚫 @${m.sender.split('@')[0]} eliminado por exceder las 3 advertencias.`,
    m,
    { mentions: [m.sender] }
  )

  await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
