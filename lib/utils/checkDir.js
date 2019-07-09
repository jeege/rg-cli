//检查文件夹是否存在

const fs = require('fs');
const chalk = require('chalk');

module.exports = function(name) {
  return new Promise((resolve, reject) => {
    fs.exists(name, exists => {
      if (exists) {
        console.log(chalk.red(
          `${name} 该项目已存在，请换一个项目名！`
        ));
        process.exit(1);
        reject(exists);
      } else {
        resolve();
      }
    });
  });
};