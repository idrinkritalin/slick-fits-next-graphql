require('dotenv').config({ path: '.env.dev' })
const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

server.start({
  cors: {
    credential: true,
    origin: process.env.FRONTEND_URL
  }
}, data => {
  console.log(`Server is up and running! 🤖 on port ${data.port}`)
})