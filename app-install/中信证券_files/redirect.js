function redirect() {
       var ua = navigator.userAgent;
       var ios_regex_match = /(iPhone|iPad|iPod|ios|Mac os)/i;
       var android_regex_match = /(Android)/i;
       var micromessger_regex_match = /(MicroMessenger)/i;
       var url_all = "";
       var url_iphone = "itms-services:///?action=download-manifest&url=https://etrade.cs.ecitic.com/webtrade/myHome/zxsckh.plist";
       var url_android = "http://download.cs.ecitic.com/download/sjkh/ZXSCKHzs.apk";
       var url_android_micromessger = "http://download.cs.ecitic.com/download/sjkh/ZXSCKHzs.apk";
       var url = "";
       var result = false;
     if (null == ua) {
     		return;
       //url = url_all;
     } else {
       result = ios_regex_match.exec(ua);
       if (null != result) {
         url = url_iphone;
       }else{
       result = android_regex_match.exec(ua);
       if (null != result) {
       	result = micromessger_regex_match.exec(ua);
       	if (null != result) {
         return;
         //url = url_all;
       }else{
         url = url_android;
       	}
       }else{
       	return;
       	//url = url_all;
       }
       }
     }
     try {
     document.location.href= url;
     } catch (e) {
     try {
     document.window.location = url;
     } catch (e) {
     }
     }
    }