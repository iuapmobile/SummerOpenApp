//here is your code...
summerready = function () {
	$summer.byId("content").innerHTML += "<h3 style='text-align: center'>Hello friends, welcome to touch the summer frame!</h3><h3 style='text-align: center'>The frame update at " +(new Date()).toLocaleString()+"</h3>";
};


//对于ios，打开第三方app还需要在当前app配置要打开的目标app的白名单，参见config.xml中的queriesSchemes配置
function openApp(urlScheme, pkgName){
	$summer.alert('ios需要再config.xml中配置queriesSchemes')
	summer.openApp({
        "ios_appid" : urlScheme, //ios所需的参数，目标app的urlscheme，例如："weixin://"
        "android_packagename" : pkgName,//android所需的参数，目标app的包名，例如："com.tencent.mm"
        "param" : {'name':''}, //不支持
        "callback" : function(args){
        	//目前只有Android有callback
        	$summer.alert(args); //android args is {"status":"打开成功","code":"1"}
        	 					  //andriod args is {"err_msg":{"status":"没有访问权限或者应用不存在","code":"0"}}
        }
    })
}

