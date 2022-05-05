let appid = ''
let imgURL = ''
let requestURL = ''
let milkRequest = ''
const WX_APPID = 'wx4015a847131516ad'
const ALI_APPID = '2021001157673614'  

if(process.env.NODE_ENV === 'development'){
	milkRequest = '81.68.225.182:38003'
	requestURL = '81.68.225.182:38003'
	imgURL = '81.68.225.182:38003'
}else{
    requestURL = 'https://xiaoda.mynatapp.cc'
	imgURL = 'https://xiaoda.mynatapp.cc'
	milkRequest = 'https://open-test.mynatapp.cc'
}

export { appid, imgURL, requestURL, WX_APPID, milkRequest }