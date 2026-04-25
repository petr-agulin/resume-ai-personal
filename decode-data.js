const fs = require('fs')
const path = require('path')

const dataDir = path.join(__dirname, 'data')
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

if (process.env.RESUME_EN) {
  fs.writeFileSync(
    path.join(dataDir, 'resume.json'),
    Buffer.from(process.env.RESUME_EN, 'base64').toString('utf-8')
  )
  console.log('Decoded resume.json from RESUME_EN')
} else {
  console.error('RESUME_EN env var not set — aborting')
  process.exit(1)
}

if (process.env.RESUME_SE) {
  fs.writeFileSync(
    path.join(dataDir, 'resume.se.json'),
    Buffer.from(process.env.RESUME_SE, 'base64').toString('utf-8')
  )
  console.log('Decoded resume.se.json from RESUME_SE')
} else {
  console.warn('RESUME_SE env var not set — skipping Swedish resume')
}
