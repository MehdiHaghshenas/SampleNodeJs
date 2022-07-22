const swaggerAutogen = require("swagger-autogen")()

const outputFile = "./source/swagger_output.json"
const endpointsFiles = ["./source/routes/sample.routing.ts"]

swaggerAutogen(outputFile, endpointsFiles)
