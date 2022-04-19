
export function _showLoading(title) {
	uni.showLoading({
		title,
		icon: 'none',
		mask: true
	})
}

export function _showToast(title) {
	uni.showToast({
		title,
		icon: 'none'
	})
}


// 获取当前月份的天数
export function mGetDate(year, mouth) {
	var date = new Date();
	var year = year ? year : date.getFullYear();
	var month = mouth ? mouth : date.getMonth() + 1;
	var d = new Date(year, month, 0);
	return d.getDate();
}

// 时间格式化
export function dateFtt(fmt, date) {
	if(typeof date === 'string') date = new Date(date.replace(/-/g,"/"))
	var o = {
		"M+": date.getMonth() + 1, //月份 
		"d+": date.getDate(), //日 
		"h+": date.getHours(), //小时 
		"m+": date.getMinutes(), //分 
		"s+": date.getSeconds(), //秒 
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度 
		"S": date.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

// 计算时间差
export function datediff(startTime, endTime) {
	let datediff = new Date(endTime) - new Date(startTime)
	return datediff / 1000 / 60 / 60 / 24
}

export function isCardId(sId, _this) {
	let aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
	let iSum=0, info = "", sBirthday = "";
	if(!/^\d{17}(\d|x)$/i.test(sId)) {
		_this.showTxt('你输入的身份证长度或格式错误')
		return false;
	} else {
		sId=sId.replace(/x$/i,"a");
		if(aCity[parseInt(sId.substr(0,2))]==null) {
			_this.showTxt('你的身份证地区非法')
			return false;
		} else {
			sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
			var d=new Date(sBirthday.replace(/-/g,"/")) ;
			if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate())) {
				_this.showTxt('身份证上的出生日期非法')
				return false;
			} else {
				 for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11);
				 if(iSum%11!=1) {
					 _this.showTxt('你输入的身份证号非法')
					 return false;
				 } else {
					 console.log('身份证合法！')
					 return true
				 }
			}
		}
	}
}
//移除链接中多余属性并返回
export function funcUrlDel(name){
	var loca = window.location;
	var baseUrl = loca.origin + loca.pathname + "?";
	var query = loca.search.substr(1);
	if (query.indexOf(name)>-1) {
		var obj = {}
		var arr = query.split("&");
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].split("=");
			obj[arr[i][0]] = arr[i][1];
		};
		delete obj[name];
		var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
		return url + loca.hash
	}else{
		return window.location.href;
	};
}
// 获取链接中的属性值
export function getQueryString(url, name) {
	var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i');
	var r = url.substr(1).match(reg);
	if (r != null) {
		return r[2];
	}
	return null;
}