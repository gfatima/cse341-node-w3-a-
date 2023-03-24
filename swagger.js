const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Korean Idol API',
    description: 'My Korean Idol API'
  },
  host: 'localhost:8080',
  basePath: '/',
  schemes: [
    'http']
}
const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)
