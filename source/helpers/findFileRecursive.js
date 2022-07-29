const path = require("path");
const fs = require("fs");
const { endpointsFiles } = require("./swagger");

function findFileRecursive(directory){
    const endpointsFiles = []
    throughDirectoryInternal(directory, endpointsFiles)
    return endpointsFiles
}

function throughDirectoryInternal(Directory, endpointsFiles) {
    fs.readdirSync(Directory).forEach(file => {
        const filename = path.join(Directory, file);
        const stat = fs.statSync(filename);
        if (stat.isDirectory())
            return throughDirectoryInternal(filename, endpointsFiles);
        else if (path.extname(file).toLowerCase() == '.ts' && stat.size >= 100)
            return endpointsFiles.push(filename);
    });
}
exports.findFileRecursive = findFileRecursive;
