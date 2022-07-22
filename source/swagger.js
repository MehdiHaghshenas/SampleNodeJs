const swaggerAutogen = require("swagger-autogen")()

const outputFile = "./source/swagger_output.json"
//TODO get all ts files in routes
const endpointsFiles = ["./source/routes/sample.routing.ts"]

swaggerAutogen(outputFile, endpointsFiles)
