import { terminal } from 'terminal-kit'
import createThumbnail from './canva'
import path from 'path'

console.clear()
terminal.red()
terminal.bold('Dá pra mudar o rosto e a foto de fundo na pasta: ' + path.join(__dirname, 'images'))
terminal.yellow()
terminal('\nBoas-vindas ao gerador de thumbnail do Amdre Young. Esse programa é ultra secreto e não deve ser fornecido, apenas utlizado pelo Amdré\n')
terminal.blue()
terminal('1. Escreva oque o Amdré vai tá falando na thumbnail: ')
terminal.white()
terminal.inputField(async function(err, input) {
    if(err) console.log('Erro, alerta, evacuar!')
    console.log('\n')
    const path = await createThumbnail(input || '')
    terminal('Preview: \n')
    
    await terminal.drawImage('./images/image.png', { shrink: { width: terminal.width, height: terminal.height * 2 }})

    console.log('\n\nFinalizando o programa, adeus...')
    console.log('Alias, sua imagem foi salva em: ' + path)
    terminal('\nFechando o programa em 10 segundos...')
    setTimeout(() => {
        process.exit(0)
    }, 10000);
})