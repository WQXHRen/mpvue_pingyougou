const BASE_URL = 'https://www.uinav.com'
export default function request ({url, data = {}, method = 'get', dataType = 'json', header = {'content-type': 'application/x-www-form-urlencoded'}}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url, // 开发者服务器接口地址",
      data, // 请求的参数",
      method,
      dataType, // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      header,
      success: res => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
