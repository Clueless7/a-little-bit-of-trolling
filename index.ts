import { randomUUID } from 'node:crypto'
import fs from 'node:fs'

const blobToFile = (blob: ArrayBuffer, filename: string) => {
  const fileStream = fs.createWriteStream(filename)

  // Write the buffer to the file stream
  fileStream.write(Buffer.from(blob))

  // Close the file stream
  fileStream.end()
}

const main = async function () {
  try {
    const res = await fetch('https://trollface.dk/trollfaceONE.png')
    const imgBlob = await res.arrayBuffer()

    blobToFile(imgBlob, randomUUID() + '.png')

    console.log('Get trolled!')
  } catch (error) {
    console.error(error)
  }
}

// Start trolling
setInterval(main, 50)
