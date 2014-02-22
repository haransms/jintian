checkBrowser();
$(function(){
	var oOl = $("#mainslider ol");
	var oUl = $("#mainslider ul.flex-direction-nav");
	oOl.remove();
	oUl.remove();
});
$("#logout").click(function(){
	$.post(LogoutUrl,{},completewithurl,'json');
});
$('#mainslider').flexslider({
	animation: "fade",
	slideshowSpeed:5000,
	animationSpeed:800,
	controlNav:true,
	directionNav:true
});
function checkBrowser () {
	var userAgent=navigator.userAgent.toLowerCase(), s, o = {};
	var browser={
		version:(userAgent.match(/(?:firefox|opera|safari|chrome|msie)[\/: ]([\d.]+)/))[1],
		safari:/version.+safari/.test(userAgent),
		chrome:/chrome/.test(userAgent),
		firefox:/firefox/.test(userAgent),
		ie:/msie/.test(userAgent),
		opera: /opera/.test(userAgent ) 
	} /* 获得浏览器的名称及版本信息 */

	if (browser.ie && browser.version < 9) {
		window.location.href = MODULE + '/Public/browserError';
	}
}
function completewithurl(data){
	if( data.status == 1 ) {
		jSuccess(data.info,{
			TimeShown:1000,
			onClosed:function(){
				window.location.href=data.url;
			}
		})
	} else {
		jError(data.info);
	}
}
function complete(data){
	if(data.status == 1){
		jSuccess(data.info,{
			TimeShown:1000,
			onClosed:function(){
				window.location.href=window.location.href;
			}
		})
	}else{
		jError(data.info);
	}
}