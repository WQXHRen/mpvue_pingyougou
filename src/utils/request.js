const BASE_URL = 'https://www.uinav.com'
export default function request ({
  url,
  noLoading,
  data = {},
  method = 'get',
  dataType = 'json'
}) {
  return new Promise((resolve, reject) => {
    if (!noLoading) {
      wx.showLoading({
        title: '加载中...', // 提示的内容,
        mask: true // 显示透明蒙层，防止触摸穿透,
      })
    }
    wx.request({
      url: BASE_URL + url, // 开发者服务器接口地址",
      data, // 请求的参数",
      method,
      dataType, // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => {
        let { meta, message } = res.data
        if (meta.status === 200) {
          resolve(message)
        } else {
          wx.showToast({
            title: `[ ${meta.status} ]${meta.msg} `, // 提示的内容,
            icon: 'none', // 图标,
            duration: 2000, // 延迟时间,
            mask: true, // 显示透明蒙层，防止触摸穿透,
            success: res => {}
          })
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete () {
        wx.hideLoading()
      }
    })
  })
}
