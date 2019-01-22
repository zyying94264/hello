export default {
  title: 'iView-admin',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description api请求基础路径
   */
 baseUrl: {
    dev: 'http://192.168.4.223:8080',
    // dev: ' https://easy-mock.com/mock/5c21e4c8c96cca79a56f8492/example',
    // pro: 'https://produce.com'
    pro: 'http://192.168.4.223:8080'
  }, 
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
}
