const fs = require('fs');

export default function FileRouter(directory) {
    let container= {};
    
    fs.readdir(directory).forEach(element => {
        const fileName = element.Name;
        if (fileName==="index"){return};
        container[fileName] = require(directory + fileName);
    });

    return container;
};