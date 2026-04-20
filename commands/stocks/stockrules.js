export default {
  command: ['stockrules', 'vendedor'],
  run: async (client, m) => {

    const txt = `📦 *SISTEMA DE STOCKS*

🛠️ *Comandos disponibles:*

➤ *.setstock <tipo> <texto>*
Guarda un stock con texto
Ejemplo:
.setstock pago Recuerda pagar primero

➤ *Responder a texto*
Responde a un mensaje y escribe:
.setstock pago

➤ *Responder a imagen*
Responde a una imagen y escribe:
.setstock pago Métodos disponibles

➤ *.stock <tipo>*
Muestra el stock guardado
Ejemplo:
.stock pago

➤ *.delstock <tipo>*
Elimina un stock
Ejemplo:
.delstock pago

➤ *.liststock*
Muestra todos los stocks disponibles

━━━━━━━━━━━━━━━
📌 *Tipos de stock ejemplos:*
• pago
• diamantes
• roblox
• pavos
• pp

Puedes usar cualquier nombre
━━━━━━━━━━━━━━━
💡 *Notas:*
- Cada grupo tiene sus propios stocks
- Puedes guardar texto e imagen
- Si no pones texto, usa el del mensaje respondido

✨ Sistema automático listo para usar
`

    m.reply(txt)
  }
}
