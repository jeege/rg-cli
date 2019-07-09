#! /usr/bin/env node

const program = require('commander')  //可以解析用户输入的命令
const download = require('download-git-repo') //拉取github上的文件
const chalk = require('chalk')  //改变输出文字的颜色
const ora = require('ora')  //小图标（loading、succeed、warn等）

program
  .version('0.0.1')
  .option('-i, init [name]', '初始化rg-build项目')
  .parse(process.argv)

if(program.init){
  const spinner = ora('正在从github下载rg-build').start();
  download('Dajiege/send_email',program.init,function(err){
    if(!err){
      console.info(chalk.blueBright('下载成功'));
    } else {
      console.info('下载失败')
    }
  })
}