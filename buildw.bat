rmdir /s/q build
prettier --write --no-semi source/ 
node source/swagger.js
mkdir build
copy source\swagger_output.json build\swagger_output.json /Y
tsc
