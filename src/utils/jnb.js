'use strict'

/**
 * [调用原生方法]
 * @param option 配置项
 * {
 *  debug: true, // 开启调试，显示一些信息
 * }
 * @DateTime 2019-09-30
 * @author aiyay
 */
const JNB = (option = { debug: true }) => {
  const u = navigator.userAgent // 用户代理头
  const name = 'JNB1.0'
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // Android终端
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // IOS终端
  let debug = option.debug // 开启调试

  /**
   * @param callName 调用原生的方法名
   * @param data 传给原生的数据
  */
  let call = (callName, data) => {
    // android的处理
    if (isAndroid) {
      if (that.debug) {
        console.log('setup For ...Android')
      }
      if (window.webViewJavascriptBridge) {
        window.webViewJavascriptBridge[callName](data)
      } else {
        console.log('window.webViewJavascriptBridge 未成功')
      }
      return
    }
    // ios的处理
    if (isIOS) {
      if (that.debug) {
        console.log('setup For ...IOS')
      }
      window.webkit.messageHandlers[callName].postMessage(data)
    }
  }
  /**
   * @param callName 原生调用Js的方法名
   * @param fn js的调用函数
  */
  let place = (callName, fn) => {
    if (isAndroid) {
      if (debug) {
        console.log('setup For ...Android')
      }
      window.AndroidMethod[callName] = fn
      return
    }
    if (isIOS) {
      if (debug) {
        console.log('setup For ...IOS')
      }
      setupWebViewJavascriptBridge((bridge) => {
        // 声明 OC 需要调用的 JS 方法。
        bridge.registerHanlder(callName, (data, responseCallback) => {
          // data 是 OC 传递过来的数据.
          console.log('JS 被 OC 调用了. OC==>JS :', data)
          // responseCallback 是 JS 调用完毕之后传递给 OC 的数据
          responseCallback({ data: 'js 的数据', from: 'JS' })
        })
      })
    }
  }
}

// 设置ios-JavaScript桥
function setupWebViewJavascriptBridge (callback) {
  if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge) }
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
  window.WVJBCallbacks = [callback] // 创建一个 WVJBCallbacks 全局属性数组，并将 callback 插入到数组中。
  var WVJBIframe = document.createElement('iframe') // 创建一个 iframe 元素
  WVJBIframe.style.display = 'none' // 不显示
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__' // 设置 iframe 的 src 属性
  document.documentElement.appendChild(WVJBIframe) // 把 iframe 添加到当前文导航上。
  setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
}

export default JNB
