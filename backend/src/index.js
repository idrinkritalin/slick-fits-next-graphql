require('dotenv').config({ path: '.env.prod' })
const createServer = require('./createServer')

const server = createServer()

server.start({
  cors: {
    credentials: true,
    origin: [process.env.FRONTEND_URL],
  }
}, data => {
  console.log(`Server is up and running! 🤖 on port ${data.port}`)
})