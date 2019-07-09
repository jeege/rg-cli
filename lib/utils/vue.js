//运行nuxt脚手架
const { spawn } = require('child_process')

function createVueApp(name) {
  return spawn('vue', ['create', name], {
    shell: true,
    stdio: ['inherit', 'inherit', 'pipe']
  })
}

function downVueCli(name) {
  const downCra = spawn('yarn', ['global', 'add', '@vue/cli'], {
    shell: true,
    stdio: ['inherit', 'inherit', 'pipe']
  })
  downCra.on('close', (code) => {
    if (code == 0) {
      console.log('vue-cli安装完成');
      createVueApp(name)
    }
  })
}

module.exports = function (name) {
  try {
    const cra = createVueApp(name)
    cra.on('close', (code) => {
      if (code == 1) {
        console.log('安装vue-cli...');
        downVueCli(name)
      }
    });
  } catch (error) {
    console.log(error)
  }
}