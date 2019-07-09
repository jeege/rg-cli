//运行nuxt脚手架
const { spawn } = require('child_process')

module.exports = function (name) {
  try {
    spawn('yarn', ['create', 'nuxt-app', name], {
      shell: true,
      stdio: ['inherit','inherit','pipe']
    })
  } catch (error) {
    console.log(error)
  }
}
