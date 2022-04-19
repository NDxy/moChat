import { request, orientationRequest } from '../utils/request.js'
import { milkRequest } from '../utils/config'

// 登录
export function login(data) {
	return request('/ecm/api/app/student/user/login', 'post', data).then(res => res)
}

// 隐性登陆注册
export function rccLogin(data) {
	return request('/ecm/api/app/student/user/rccLogin', 'post', data).then(res => res)
}

// 用户注册
export function register(data) {
	return request('/ecm/api/app/student/user/register', 'post', data).then(res => res)
}

// 用户实名认证
export function updateIDCard(data) {
	return request('/ecm/api/app/student/user/updateIDCard', 'post', data).then(res => res)
}

// 获取验证码
export function sendSmsCode(data) {
	return request('/ecm/api/app/sendSmsCode', 'post', data)
}

// 修改登录密码
export function modifyStudentPwd(data) {
	return request('/ecm/api/app/student/user/modifyStudentPwd', 'post', data).then(res => res)
}

// 修改手机号
export function modifyStudentMobileNo(data) {
	return request('/ecm/api/app/student/user/modifyStudentMobileNo', 'post', data).then(res => res)
}

// 修改头像
export function image(data) {
	return request('/ecm/api/app/student/user/modify/image', 'post', data).then(res => res)
}

// 退出登录
export function logout(data) {
	return request('/ecm/api/app/student/user/logout', 'post', data).then(res => res)
}

// 绑定学生
export function bindEmp(data) {
	return request('/ecm/api/app/student/emp/bindEmp', 'post', data).then(res => res)
}

// 查询已绑定的学生及其持卡钱包余额信息
export function queryStudentCardBalance(data) {
	return request('/ecm/api/app/student/emp/queryStudentCardBalance', 'post', data).then(res => res)
}

// 补助查询
export function queryStudentSubsidy(data) {
	return request('/ecm/api/app/srcb/student/queryStudentSubsidy', 'post', data)
}

// 补助明细
export function queryStudentSubsidyDetail(data) {
	return request('/ecm/api/app/srcb/student/queryStudentSubsidyDetail', 'post', data)
}

// 查询学校列表
export function queryOrg(data) {
	return request('/ecm/api/app/bankcard/queryOrg', 'post', data)
}

// 根据用户Id查找用户信息
export function findUserByUserId(data) {
	return request('/ecm/api/app/student/user/findUserByUserId', 'get', data)
}

// 用户修改接口
export function userinfo(data) {
	return request('/ecm/api/app/srcb/appsrcbuser/modify/userinfo', 'post', data)
}

// 上传文件
export function updateAvatar(data) {
	return request('/ecm/api/app/srcb/appsrcbsign/uploadFile', 'post', data)
}

// 学生端微信充值下单
export function wxStudentOrder(data) {
	return request('/ecm/api/app/student/order/wxStudentOrder', 'post', data)
}

// 学生端微信充值下单
export function wxStudentAppOrder(data) {
	return request('/ecm/api/app/student/order/wxStudentAppOrder', 'post', data)
}

// 获取二维码
export function refreshQRCode(data) {
	return request('/ecm/api/app/student/emp/refreshQRCode', 'post', data)
}

// 充值记录
export function findRecharge(data) {
	return request('/ecm/api/app/srcb/appsrcbrecharge/findRecharge', 'post', data)
}

// 设置消费限额
export function setCardConsumeLimitAmount(data) {
	return request('/ecm/api/app/student/emp/setCardConsumeLimitAmount', 'post', data)
}
// 解绑学生
export function UnStudentBindEmp(data) {
	return request('/ecm/api/app/student/emp/UnStudentBindEmp', 'post', data)
}

// 食堂消费记录
export function queryStudentSTConsume(data) {
	return request('/ecm/api/app/srcb/student/queryStudentSTConsume', 'post', data)
}

// 通过卡号查询卡信息
export function findEmpCard(data) {
	return request('/ecm/api/app/student/emp/findEmpCard', 'get', data)
}

// 历史记录
export function getRechargeEmp(data) {
	return request('/ecm/api/app/student/emp/getRechargeEmp', 'post', data)
}

// 查看金额输入卡号
export function checkCardPwd(data) {
	return request('/ecm/api/app/srcb/checkCardPwd', 'get', data)
}

// H5微信支付
export function wxNLoginOrder(data) {
	return request('/ecm/api/app/wxNLoginOrder', 'post', data)
}

// 学生端小程序获取微信jsp_sdk调用签名
export function getWxJsApiSignature(data) {
	return request('/ecm/api/app/student/user/getStudentWxJsApiSignature', 'post', data)
}

// 授权访问令牌和aliUserId
export function getAccessToken(data) {
	return request('/ecm/api/app/student/order/getAccessToken', 'post', data)
}

// 授权访问令牌和aliUserId
export function studentAlipay(data) {
	return request('/ecm/api/app/student/order/studentAlipay', 'post', data)
}

// 获取支付科目
export function getPaySubject(data) {
	return request('/repaid/getPaySubject', 'post', data)
}

// 获取支付科目
export function getPaySubject2(data) {
	return request('/repaid/getPaySubject2', 'post', data)
}

// 根据身份证查找用户
export function findUserByIdCard(data) {
	return request('/ecm/api/app/srcb/findUserByIdCard', 'post', data)
}

// 获取小程序Openid
export function miniStudentOpenId(data) {
	return request('/ecm/api/app/student/order/miniStudentOpenId', 'post', data)
}

// 根据empId和Orgid查找用户
export function findEmpByEmpId(data) {
	return request('/ecm/api/app/srcb/findEmpByEmpId', 'post', data)
}

// 新的历史记录
export function getHistoryRecharge(data) {
	return request('/ecm/api/app/student/emp/getHistoryRecharge', 'post', data)
}

// 新的APP下单充值接口
export function studentAppAlipay(data) {
	return request('/ecm/api/app/student/order/studentAppAlipay', 'post', data)
}

// 获取已采集人像
export function getFaceImg(data) {
	return request('/ecm/api/app/consumption/faceManage/getFaceImg', 'post', data)
}

// 采集人像
export function upFaceImg(data) {
	return request('/ecm/api/app/consumption/faceManage/upFaceImg', 'post', data)
}

// 更新人像
export function updateFaceImg(data) {
	return request('/ecm/api/app/consumption/faceManage/updateFaceImg', 'post', data)
}


/**
 * @param {Object} data
 * 报餐、预约接口
 */

// 获取商铺列表
export function getMerchantList(data) {
	return request('/ecm/api/app/getMerchantList', 'get', data)
}

/* ---------------------------------------------------预约---------------------------------------------- */

// 预定供应列表
export function getSupplyList(data) {
	return request('/ecm/api/app/findSupplyCookbook', 'get', data)
}
// 我的预约接口
export function findBookedOrderPage(data) {
	return request('/ecm/api/app/booked/findBookedOrderPage', 'get', data)
}
// 创建预约订单
export function createBookedOrder(data) {
	return request('/ecm/api/app/booked/wxCreateBookedOrder', 'post', data)
}
// 确定预约订单
export function confirmBookedOrder(data) {
	return request('/ecm/api/app/booked/wxConfirmBookedOrder', 'post', data)
}
// 取消预约订单
export function cancelBookedOrder(data) {
	return request('/ecm/api/app/booked/wxCancelBookedOrder', 'post', data)
}
// 删除预约订单
export function orderToInvisible(data) {
	return request('/ecm/api/app/booked/orderToInvisible', 'post', data)
}
// 授权支付预约订单
export function bookedOrderPay(data) {
	return request('/ecm/api/app/booked/wxBookedOrderPay', 'post', data)
}
// 预约二维码取餐
export function findBookedOrder(data) {
	return request('/ecm/api/app/booked/wxFindBookedOrder', 'get', data)
}
// 预约二维码状态（使用情况）
export function updateBookedTakeType(data) {
	return request('/ecm/api/app/booked/updateBookedTakeType', 'post', data)
}

/* ---------------------------------------------------报餐---------------------------------------------- */

// 我的报餐接口
export function findMealOrderPage(data) {
	return request('/ecm/api/app/findMealOrderPage', 'get', data)
}
// 创建报餐订单
export function createMealOrder(data) {
	return request('/ecm/api/app/wxCreateMealOrder', 'post', data)
}
// 确定报餐订单
export function confirmMealOrder(data) {
	return request('/ecm/api/app/wxConfirmMealOrder', 'post', data)
}
// 取消报餐订单
export function cancelMealOrder(data) {
	return request('/ecm/api/app/wxCancelMealOrder', 'post', data)
}
// // 删除报餐订单
// export function orderToInvisible(data) {
// 	return request('/ecm/api/app/booked/orderToInvisible', 'post', data)
// }
// 授权支付报餐订单
export function mealOrderPay(data) {
	return request('/ecm/api/app/wxMealOrderPay', 'post', data)
}
// 报餐二维码取餐
export function findMealOrder(data) {
	return request('/ecm/api/app/wxFindMealOrder', 'get', data)
}
// 报餐二维码状态（使用情况）
export function updateTakeType(data) {
	return request('/ecm/api/app/updateTakeType', 'post', data)
}


/**
 * 支付中心接口封装
 * @
 */


// 支付详情查询
export function payCenterList(data) {
	return request('/repaid/payCenterList', 'post', data)
}
// // 获取支付科目
// export function getPaySubject(data) {
// 	return request('/repaid/getPaySubject', 'post', data)
// }
// 获取支付项目
export function getPayItem(data) {
	return request('/repaid/getPayItem', 'post', data)
}

// 缴费记录查询
export function paymentList(data) {
	return request('/repaid/paymentList', 'post', data)
}

export function paymentList2(data) {
	return request('/repaid/paymentList2', 'post', data)
}

// 获取支付渠道
export function getPayChannel(data) {
	return request('/repaid/getPayChannel', 'post', data)
}

// 缴费下单
export function payment(data) {
	return request('/repaid/payment', 'post', data)
}

// 充值下单
export function pay(data) {
	return request('/repaid/pay', 'post', data)
}

// 提现退卡
export function cash(data) {
	return request('/repaid/cash', 'post', data)
}
// 个人现金收支明细查询
export function queryEmpwalletDetail(data) {
	return request('/ecm/api/app/queryEmpwalletDetail', 'post', data)
}

// 充值记录查询
export function payList(data) {
	return request('/repaid/list', 'post', data)
}

export function payList2(data) {
	return request('/repaid/list2', 'post', data)
}

// 支付宝授权访问令牌和userId
export function getAlipayAccessToken(data) {
	return request('/repaid/getAccessToken', 'post', data)
}

// 微信获取openId
export function getOpenId(data) {
	return request('/repaid/getOpenId', 'post', data)
}

// 消息列表查询
export function queryNewsList(data) {
	return request('/repaid/msg/list', 'post', data)
}
export function queryNewsList2(data) {
	return request('/repaid/msg/list2', 'post', data)
}

// 未读消息查询
export function readCount(data) {
	return request('/repaid/msg/readCount', 'post', data)
}

// 查询用户积分情况（包括总积分和状态）
export function selectIntegralUser(data) {
	return request('/ecm/api/app/student/integral/selectIntegralUser', 'post', data)
}

// 查询积分明细集合
export function selectIntegralDetailPage(data) {
	return request('/ecm/api/app/student/integral/selectIntegralDetailPage', 'post', data)
}

// 二维码消费新增积分接口（消费成功后前端触发）
export function insertQrCodeConsumeIntegral(data) {
	return request('/ecm/api/app/student/integral/insertQrCodeConsumeIntegral', 'post', data)
}

// 未读状态更新成已读
export function readTo(data) {
	return request('/repaid/msg/read', 'post', data)
}

// 设置/修改支付密码
export function payPwd(data) {
	return request('/ecm/api/app/student/user/payPwd', 'post', data)
}

// 忘记支付密码
export function resetPayPwd(data) {
	return request('/ecm/api/app/student/user/resetPayPwd', 'post', data)
}

// 查询卡记录
export function queryStudentCard(data) {
	return request('/ecm/api/app/student/emp/queryStudentCard', 'post', data)
}

// 查询学生轨迹信息
export function trailList(data) {
	return request('/ecm/api/app/student/user/trailList', 'post', data)
}

// 个人现金收支明细查询
export function queryEmpwalletDetailAndCount(data) {
	return request('/ecm/api/app/queryEmpwalletDetailAndCount', 'post', data)
}

// 挂失
export function reportlost(data) {
	return request('/ecm/api/app/card/reportlost', 'post', data)
}

// 校验登录密码
export function checkPwd(data) {
	return request('/ecm/api/app/checkPwd', 'post', data)
}
// 校验支付密码
export function checkPayPwd(data) {
	return request('/ecm/api/app/checkPayPwd', 'post', data)
}

// 微信获取openId 
export function wxGetOpenId(data) {
	return request('/ecm/api/app/student/user/getOpenId', 'post', data)
}

// 微信公众号获取getWebAccessToken 
export function getWebAccessToken(data) {
	return request('/ecm/api/app/student/user/getWebAccessToken', 'post', data)
}

// 微信获取openId 
export function wxLogin(data) {
	return request('/ecm/api/app/student/user/wxLogin', 'post', data)
}
// app微信登录
export function appWxLogin(data) {
	return request('/ecm/api/app/student/user/appWxLogin', 'post', data)
}
// app微信登录注册
export function appWxLoginBind(data) {
	return request('/ecm/api/app/student/user/appWxLoginBind', 'post', data)
}



// 获取我发起的请假
export function getMyLeaveList(data) {
	return request('/ecm/api/app/leave/getMyLeaveList', 'post', data)
}
// 请求请假
export function applyLeave(data) {
	return request('/ecm/api/app/leave/applyLeave', 'post', data)
}
// 获取晚归时间
export function backLate(data) {
	return request('/ecm/api/app/leave/backLate', 'post', data)
}
// 获取待办请假任务
export function getTodoLeaveList(data) {
	return request('/ecm/api/app/leave/getTodoLeaveList', 'post', data)
}
// 请假任务审核
export function approveLeave(data) {
	return request('/ecm/api/app/leave/approveLeave', 'post', data)
}
// 获取所有参与的任务
export function getInvolvedLeaveList(data) {
	return request('/ecm/api/app/leave/getInvolvedLeaveList', 'post', data)
}
// 获取岗位
export function post(data) {
	return request('/ecm/api/app/leave/post', 'post', data)
}
// 获取流程进度
export function getActivityInfo(data) {
	return request('/ecm/api/app/leave/getActivityInfo', 'post', data)
}
// 获取我的有效的实习请假单
export function getMyPracticeLeaveList(data) {
	return request('/ecm/api/app/leave/getMyPracticeLeaveList', 'post', data)
}
// 宿舍楼栋接口
export function dormParentCollect(data) {
	return request('/ecm/api/hotpump/ljd/dormParentCollect', 'post', data)
}
// 新宿舍接口
export function dormCollect(data) {
	return request('/ecm/api/hotpump/ljd/dormCollect', 'post', data)
}
// 新宿舍人员接口
export function dormParentFindMan(data) {
	return request('/ecm/api/hotpump/ljd/dormParentFindMan', 'post', data)
}
// 宿舍楼列表接口
export function dormParentList(data) {
	return request('/ecm/api/hotpump/ljd/dormParentList', 'post', data)
}



// 获取流程进度
export function queryEmpsubsidyDetail(data) {
	return request('/ecm/api/app/queryEmpsubsidyDetail', 'post', data)
}

// 获取绑定人的数量
export function queryBindStudentQuantity(data) {
	return request('/ecm/api/app/student/emp/queryBindStudentQuantity', 'post', data)
}

// 获取区
export function findBaseArea(data) {
	return request('/ecm/api/app/srcb/appsrcbsign/findBaseArea', 'post', data)
}

// 二维码消费结果查询
export function queryQrcodeConsumeResult(data) {
	return request('/ecm/api/app/queryQrcodeConsumeResult', 'post', data)
}

// 二维码消费结果查询
export function querySubsidyDetail(data) {
	return request('/ecm/api/app/querySubsidyDetail', 'post', data)
}

// 查询App信息
export function selectAppInfo(data) {
	return request('/ecm/api/app/selectAppInfo', 'post', data)
}

// 上传人脸信息
export function upFaceImgApp(data) {
	return request('/ecm/api/app/consumption/faceManage/upFaceImgApp', 'post', data)
}

// 二维码脱机扫码下单
export function offlineQrcodeConsumeOrder(data) {
	return request('/ecm/api/app/offlineQrcodeConsumeOrder', 'post', data)
}

// 二维码脱机扫码确认付款
export function offlineQrcodeConsumePay(data) {
	return request('/ecm/api/app/offlineQrcodeConsumePay', 'post', data)
}

// 查询食堂消费记录
export function querySTConsumeLog(data) {
	return request('/ecm/api/app/querySTConsumeLog', 'post', data)
}

// 查询热水消费记录
export function queryWaterConsumeLog(data) {
	return request('/ecm/api/app/queryWaterConsumeLog', 'post', data)
}

// 查询热水消费记录
export function selectOfflineQrcodeCallbackInfo(data) {
	return request('/ecm/api/app/selectOfflineQrcodeCallbackInfo', 'post', data)
}

// 常见问题
export function selectFaqPage(data) {
	return request('/ecm/api/app/faq/selectFaqPage', 'get', data)
}

// 获取公司简介
export function getAppCompanyInfo(data) {
	return request('/ecm/api/app/productinfo/getAppCompanyInfo', 'get', data)
}

// 获取功能信息
export function getAppProductInfo(data) {
	return request('/ecm/api/app/productinfo/getAppProductInfo', 'get', data)
}

// 通过身份证查询档案及卡片信息
export function selectCardInfoByIdCardNo(data) {
	return request('/ecm/api/app/student/emp/selectCardInfoByIdCardNo', 'get', data)
}

/**
 * 云打印接口
 */

//查询打印文件列表
export function printList(data) {
	return request('/print/info/list', 'post', data)
}
// 删除打印文件
export function printRemove(data) {
	return request('/print/info/remove', 'post', data, {'content-type': 'application/x-www-form-urlencoded;charset=utf-8'})
}
// 上传打印文件
export function uploadPrintFile(data) {
	return request('/print/info/uploadPrintFile', 'post', data, {'content-type': 'multipart/form-data'})
}
// 打印记录
export function printOrderList(data) {
	return request('/print/device/printOrderList', 'post', data)
}

/**
 * 牛奶卡业务接口
 */

// 绑定开通牛奶卡业务
export function openStudentMike(data) {
	return request('/ecm/api/app/student/milk/openStudentMike', 'post', data)
}

// 查询已绑定的牛奶卡钱包余额信息
export function queryMilkCardBalance(data) {
	return orientationRequest(milkRequest, '/ecm/api/app/student/emp/queryStudentCardBalance', 'post', data).then(res => res)
}

// 查询卡记录
export function queryMilkCard(data) {
	return orientationRequest(milkRequest, '/ecm/api/app/student/emp/queryStudentCard', 'post', data)
}

// 获取奶机构二维码
export function milkQRCode(data) {
	return orientationRequest(milkRequest, '/ecm/api/app/student/emp/refreshQRCode', 'post', data)
}

// 获取奶机构二维码
export function selectMilkByCode(data) {
	return orientationRequest(milkRequest, '/ecm/api/app/student/emp/selectMilkByCode', 'get', data)
}
// 上传人脸信息
export function milkUpFace(data) {
	return orientationRequest(milkRequest, '/ecm/api/app/consumption/faceManage/upFaceImgApp', 'post', data)
}

// 获取已采集人像
export function getMilkFaceImg(data) {
	return orientationRequest(milkRequest, '/ecm/api/app/consumption/faceManage/getFaceImg', 'post', data)
}

// 查询奶卡消费记录
export function queryMilkConsumeLog(data) {
	return orientationRequest(milkRequest, '/ecm/api/app/querySTConsumeLog', 'post', data)
}

// 奶机构提现退卡
export function milkCash(data) {
	return orientationRequest(milkRequest, '/repaid/cash', 'post', data)
}

// 奶机构退卡记录
export function cashQuery(data) {
	return orientationRequest(milkRequest, '/repaid/cashQuery', 'post', data)
}

// 获取支付渠道
export function getMilkPayChannel(data) {
	return orientationRequest(milkRequest, '/repaid/getPayChannel', 'post', data)
}

// 缴费下单
export function paymentMilk(data) {
	return orientationRequest(milkRequest, '/repaid/payment', 'post', data)
}

// 充值下单
export function payMilk(data) {
	return orientationRequest(milkRequest, '/repaid/pay', 'post', data)
}

// 支付宝授权访问令牌和userId
export function getMilkAlipayAccessToken(data) {
	return orientationRequest(milkRequest, '/repaid/getAccessToken', 'post', data)
}

// 微信获取openId
export function getMilkOpenId(data) {
	return orientationRequest(milkRequest, '/repaid/getOpenId', 'post', data)
}

// 充值记录
export function payMilkList(data) {
	return orientationRequest(milkRequest, '/repaid/list2', 'post', data)
}

// 设置消费限额
export function setMilkCardLimitAmount(data) {
	return orientationRequest(milkRequest, '/ecm/api/app/student/emp/setCardConsumeLimitAmount', 'post', data)
}