//运行nuxt脚手架
const { spawn } = require('child_process')

function createReactApp(name) {
  return spawn('create-react-app', [name], {
    shell: true,
    stdio: ['inherit', 'inherit', 'pipe']
  })
}

function downCRA(name) {
  const downCra = spawn('yarn', ['global', 'add', 'create-react-app'], {
    shell: true,
    stdio: ['inherit', 'inherit', 'pipe']
  })
  downCra.on('close', (code) => {
    if (code == 0) {
      console.log('create-react-app安装完成');
      createReactApp(name)
    }
  })
}

module.exports = function (name) {
  try {
    const cra = createReactApp(name)
    cra.on('close', (code) => {
      if (code != 0) {
        console.log('安装create-react-app...');
        downCRA(name)
      }
    });
  } catch (error) {
    console.log(error)
  }
}