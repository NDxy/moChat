import { request, orientationRequest } from '../utils/request.js'
import { milkRequest } from '../utils/config'


/**
 * 登录注册 
 */
// 账号登录
export function loginByAccount(data) {
	return request('/v1/app/loginByAccount', 'post', data).then(res => res)
}
// 手机号码登录
export function loginByPhoneNumber (data) {
	return request('/v1/app/loginByPhoneNumber ', 'post', data).then(res => res)
}
// 生成手机验证码
export function login(data) {
	return request(`/v1/app/genSmsCode/${(typeof data == 'string' ? data : '')}`, 'post', data).then(res => res)
}
// 注册
export function login(data) {
	return request('/v1/app/register ', 'post', data).then(res => res)
}


/**
 * 资源管理
 */
// 流式上传文件
export function uploadStream(data) {
	return request('/v1/resource/uploadStream', 'post', data)
}
// 通过form-data上传文件
export function uploadFormData(data) {
	return request('/v1/resource/uploadFormData', 'post', data)
}
// 下载文件
export function downloadFormData(data) {
	return request('/v1/resource/downloadFormData', 'post', data)
}


/**
 * app登陆用户
 */
// 查询账号
export function userList(data) {
	return request('/v1/app/user/list', 'post', data)
}


/**
 * 好友
 */
// 下载好友列表
export function loadFriends(data) {
	return request('/v1/app/user/friend/loadFriends', 'post', data)
}
// 添加好友
export function addFriend(data) {
	return request('/v1/app/user/friend/addFriend', 'post', data)
}
// 查询好友添加请求列表
export function queryFriendInvite(data) {
	return request('/v1/app/user/friend/queryFriendInvite', 'post', data)
} 
// 确认加好友
export function confirmFriendInvite(data) {
	return request('/v1/app/user/friend/confirmFriendInvite', 'post', data)
}
// 移除好友
export function delFriend(data) {
	return request('/v1/app/user/friend/delFriend', 'post', data)
}
// 加入黑名单
export function addToBlacklist(data) {
	return request('/v1/app/user/friend/addToBlacklist', 'post', data)
}
// 移除黑名单
export function queryBlacklist(data) {
	return request('/v1/app/user/friend/queryBlacklist', 'post', data)
}



// 设置消费限额
export function setMilkCardLimitAmount(data) {
	return orientationRequest(milkRequest, '/ecm/api/app/student/emp/setCardConsumeLimitAmount', 'post', data)
}