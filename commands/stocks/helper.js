import fs from 'fs'

const file = './stocks.json'
const folder = './stock' // 🔥 CAMBIADO (sin la S)

export function loadDB() {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify({}, null, 2))
  }
  return JSON.parse(fs.readFileSync(file))
}

export function saveDB(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2))
}

export function ensureFolder() {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true }) // 🔥 mejora importante
  }
}
