#! /usr/bin/env node

const program = require('commander')  //可以解析用户输入的命令
const inquirer = require('inquirer')   //对话交互
const { exec, spawn } = require('child_process');

const { down, checkDir, nuxt, vue, react } = require('../lib')

program
  .version('0.1.0')

program
  .command('init <name>')
  .alias('i')
  .description('创建一个rgg-build项目')
  .action(async (name, cmd) => {
    await checkDir(name)
    init().then(answers => {
      switch (answers.kj) {
        case 'nuxt':
          nuxt(name)
          break;
        case 'vue':
          vue(name)
          break;
        case 'react':
          react(name)
          break;
        case 'template':
          inquirer.prompt([{
            type: 'input',
            message: '请输入模板路径：',
            name: 'path',
            default: 'Dajiege/send_email'
          }]).then(res => {
            down(res.path, name)
          })
          break;
      }
    })
  })

program.parse(process.argv);

function init() {
  return inquirer.prompt([{
    type: 'list',
    message: '请选择一种框架:',
    name: 'kj',
    choices: [
      "nuxt",
      "vue",
      "react",
      "template"
    ]
  }])
}
