// schemaGenerator.js
const path = require("path");
const tjs = require("typescript-json-schema");
const fs = require("fs");

const settings = {
    required: true,
    ref: false,
};
const compilerOptions = {
    strictNullChecks: true,
};
const { findFileRecursive } = require("./findFileRecursive");
const endpointsFiles = findFileRecursive("./source/DTO/");
console.log(endpointsFiles)

// const program = tjs.getProgramFromFiles([path.resolve("schema_definition.ts")], compilerOptions, "./");
const program = tjs.getProgramFromFiles(endpointsFiles, compilerOptions, "./");

const schema = tjs.generateSchema(program, "*", settings);
fs.writeFileSync(
    "_schema.ts",
    "const schema = " + JSON.stringify(schema) + " as const;\nexport default schema.definitions;"
);