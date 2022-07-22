const swaggerAutogen = require('swagger-autogen')()

const outputFile = '../build/swagger_output.json'
const endpointsFiles = ['./routes/sample.routing.ts']

swaggerAutogen(outputFile, endpointsFiles)