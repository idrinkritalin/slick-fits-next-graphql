const { Prisma } = require('prisma-binding')

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.DB_ENDPOINT,
  secret: process.env.DB_SECRET,
  debug: false
})

module.exports = db