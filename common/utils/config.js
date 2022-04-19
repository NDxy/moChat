let appid = ''
let imgURL = ''
let requestURL = ''
let milkRequest = ''
const WX_APPID = 'wx4015a847131516ad'
const ALI_APPID = '2021001157673614'  

if(process.env.NODE_ENV === 'development'){
    // requestURL = 'http://192.168.0.25:15001'
	// imgURL = 'http://192.168.0.25:15001'
    // requestURL = 'http://open-test.mynatapp.cc'
	// imgURL = 'http://open-test.mynatapp.cc'
	// milkRequest = 'https://open-test.mynatapp.cc'
	// milkRequest = 'https://open-test.mynatapp.cc'
 //    requestURL = 'https://xiaoda.mynatapp.cc'
	// imgURL = 'https://xiaoda.mynatapp.cc'
	milkRequest = 'https://milk.sndcard.com'
	requestURL = 'https://sndcard.com'
	imgURL = 'https://sndcard.com'
	appid = 'wxf9bf13bc7fbf0cbc'
}else{
    requestURL = 'https://xiaoda.mynatapp.cc'
	imgURL = 'https://xiaoda.mynatapp.cc'
	milkRequest = 'https://open-test.mynatapp.cc'
	// milkRequest = 'https://milk.sndcard.com'
    // requestURL = 'http://open-test.mynatapp.cc'
	// imgURL = 'http://open-test.mynatapp.cc'
	// requestURL = 'https://sndcard.com'
	// imgURL = 'https://sndcard.com'
	appid = 'wxd0572409648a8520'
}

export { appid, imgURL, requestURL, WX_APPID, milkRequest }