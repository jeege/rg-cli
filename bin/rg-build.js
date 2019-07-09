#! /usr/bin/env node

const program = require('commander')  //可以解析用户输入的命令
const download = require('download-git-repo') //拉取github上的文件
const chalk = require('chalk')  //改变输出文字的颜色
const ora = require('ora')  //小图标（loading、succeed、warn等）
const inquirer = require('inquirer')

program
  .version('0.0.1')
  .option('-i, init [name]', '初始化rg-build项目')
  .parse(process.argv)

const promptList = [{
  type: 'rawlist',
  message: '请选择一种框架:',
  name: 'kj',
  choices: [
    "nuxt",
    "vue",
    "react"
  ]
}];

if (program.init) {

  init().then(answers => {
    switch (answers.kj) {
      case 'nuxt':
        down('Dajiege/send_email')
        break;
      case 'vue':
        down('Dajiege/cc')
        break;
      case 'react':
        down('Dajiege/ee')
        break;
      default: 
        down('Dajiege/dd')
    }
  })
}

function down(path) {
  const spinner = ora('正在从github下载rg-build...').start();
  download(path, program.init, function (err) {
    if (!err) {
      spinner.succeed('下载成功')
    } else {
      console.info('\n' + chalk.red(err))
      spinner.fail('下载失败')
    }
  })
}

function init() {
  return inquirer.prompt(promptList)
}
