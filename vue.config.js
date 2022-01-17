const path = require('path');
const fs = require('fs');
//Find all files in src and make alias

const dirs  = fs.readdirSync(path.resolve(__dirname, 'src'));

const alias = {
    src: path.resolve(__dirname, 'src')
}

dirs.forEach(name => {
    const filePath = path.resolve(__dirname, 'src', name);
    //Only add folders
    if (fs.statSync(filePath).isDirectory()) {
        alias[name] = filePath;
    }

});

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './Vue.js-Practice-examples/'
        : '/',
    assetsDir: process.env.BASE_URL,
    devServer: {
        https: true,
    },
    configureWebpack: {
        resolve: {
            alias
        },
    }
}

// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production'
//         ? '/Vue.js-Practice-examples/'
//         : '/'
// }