swaggerAutogen = require('swagger-autogen')()

const outputFile = "./source/swagger_output.json"

//TODO get all ts files in routes
const path = require("path");
const fs = require("fs");

function throughDirectory(Directory) {
    fs.readdirSync(Directory).forEach(file => {
        const filename = path.join(Directory, file);
        const stat = fs.statSync(filename)
        if (stat.isDirectory()) return throughDirectory(filename);
        else if (path.extname(file).toLowerCase() == '.ts' && stat.size >= 100)
            return endpointsFiles.push(filename);
    });
}

// const endpointsFiles = ["./source/routes/sample.routing.ts"]
const endpointsFiles = []

throughDirectory("./source/routes/");

console.log(endpointsFiles)


swaggerAutogen(outputFile, endpointsFiles)
