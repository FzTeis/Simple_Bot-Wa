import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. Que nombre le pongo al plugin?`
    if (!m.quoted.text) throw `Responder al mensaje!`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Guardado en ${path}`)
}
handler.help = ['saveplugin']
handler.tags = ['owner']
handler.command = ["salvar", "plugin"]

handler.private = true
export default handler
