//从github上下载仓库

const download = require('download-git-repo') //拉取github上的文件
const chalk = require('chalk')  //改变输出文字的颜色
const ora = require('ora')  //小图标（loading、succeed、warn等）

module.exports = function(path, dir) {
  const spinner = ora('正在从github下载模板...').start();
  try {
    download(path, dir, function (err) {
      if (!err) {
        spinner.succeed('下载成功')
      } else {
        console.info('\n' + chalk.red(err))
        spinner.fail('下载失败')
      }
    })
  } catch (error) {
    console.info('\n' + chalk.red('请输入正确的模板路径'))
    spinner.fail('下载失败')
  }
}