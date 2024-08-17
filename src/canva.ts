import { createCanvas, loadImage } from 'canvas'
import { writeFileSync } from 'fs'
import path from 'path'

const canvas = createCanvas(1280, 720)
const ctx = canvas.getContext('2d')

const createThumbnail = async (text: string) => {
    const andrezitosFace = await loadImage('./images/andrezitos.png')
    const bgImage = await loadImage('./images/background.jpg')

    ctx.drawImage(bgImage, 0, 0, 1280, 720)
    ctx.shadowColor = "black";
    ctx.shadowBlur = 15;
    ctx.drawImage(andrezitosFace, 0, 0, 1280, 720)

    ctx.font = '100px Verdana'
    ctx.rotate(-0.05)
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 8;
    ctx.strokeText('- ' + text, 360, 220, 920);
    ctx.fillText('- ' + text, 360, 220, 920)

    const buffer = canvas.toBuffer("image/png");
    writeFileSync("./images/image.png", buffer);
    return path.join(process.cwd(), 'images', 'image.png')
}


export default createThumbnail