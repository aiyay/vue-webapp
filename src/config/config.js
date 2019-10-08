/* 扩展 */
import VConsole from 'vconsole/dist/vconsole.min.js' // vconsole

if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_CURRENTMODE === 'test') {
  let vConsole = new VConsole() // 初始化
  if (!vConsole) console.log('vConsole init fail')
}

console.log(process.env)
