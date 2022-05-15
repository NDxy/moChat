import { requestURL } from './config'
import { _showModal } from '../js/utils.js'

function getType(data, method) { // 获取请求方式
	let type = {}
	if (method == 'post') {
		method = 'post'
		type = {
			method,
			// data: typeof data == 'string'?data:{...data},
			data,
			header: {
				'content-type': 'application/json'
			}
		}
	} else {
		method = 'get'
		type = {
			method,
			data
		}
	}
	return type
}
function request(url, method, data, header = {'Content-Type': 'application/json'}) {
	let cookie = wx.getStorageSync('token');
	if (cookie) {
	     header.Authorization = cookie;
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: requestURL + url,
			...getType(data, method),
			header,
			success: res => {
				if (res && res.header && res.header['Set-Cookie']) {
					wx.setStorageSync('token', res.header['Set-Cookie']);   //保存Cookie到Storage
				}
				if(res.statusCode == 200) {
					resolve(res.data)
				} else {
					if(res.statusCode == 500) {
						_showModal('温馨提示', '服务器端出错, 请稍后打开!')
					} else if(res.statusCode == 502){
						_showModal('温馨提示', '网络超时,请稍后打开!')
					} else if(res.statusCode == 404){
						_showModal('温馨提示', '请求错误, 未找到该资源!')
					} else {
						_showModal('温馨提示', res.errMsg)
					}
				}
			},
			fail: err => {
				uni.hideLoading()
				_showModal('温馨提示', '网络超时,请稍后打开!')
				reject(err)
			},
			complete:function(){
				// uni.hideLoading()
			}
		})
	}).catch(err => {
		uni.hideLoading()
		reject(err)
	})
}
// 定向请求
function orientationRequest(domain, url, method, data, header = {'Content-Type': 'application/json'}) {
	let cookie = wx.getStorageSync('token');
	if (cookie) {
	     header.Authorization = cookie;
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: domain + url,
			...getType(data, method),
			header,
			success: res => {
				if (res && res.header && res.header['Set-Cookie']) {
					wx.setStorageSync('token', res.header['Set-Cookie']);   //保存Cookie到Storage
				}
				if(res.statusCode == 200) {
					resolve(res.data)
				} else {
					if(res.statusCode == 500) {
						_showModal('温馨提示', '服务器端出错, 请稍后打开!')
					} else if(res.statusCode == 502){
						_showModal('温馨提示', '网络超时,请稍后打开!')
					} else if(res.statusCode == 404){
						_showModal('温馨提示', '请求错误, 未找到该资源!')
					} else {
						_showModal('温馨提示', res.errMsg)
					}
				}
			},
			fail: err => {
				uni.hideLoading()
				_showModal('温馨提示', '网络超时,请稍后打开!')
				reject(err)
			},
			complete:function(){
				// uni.hideLoading()
			}
		})
	}).catch(err => {
		uni.hideLoading()
		reject(err)
	})
}

export {
	request,
	orientationRequest
} 