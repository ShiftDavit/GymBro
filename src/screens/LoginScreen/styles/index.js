const fs = require('fs');
const path = require('path');

let styleFiles = {};

fs.readdir('./').forEach(element => {
    const fileName = element.Name;
    if (fileName==="index"){return};
    styleFiles[fileName] = require("../"+fileName);
});

export default styleFiles;