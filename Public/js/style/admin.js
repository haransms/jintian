/* Navigation */
$(document).ready(function(){
	$(window).resize(function() {
		if($(window).width() >= 765) {
			$(".sidebar .sidebar-inner").slideDown(350);
		} else {
			$(".sidebar .sidebar-inner").slideUp(350);
		}
	});
});

/* Scroll to Top */
$(".totop").hide();
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop()>200) {
			$('.totop').slideDown();
		} else {
			$('.totop').slideUp();
		}
	});

	$('.totop a').click(function (e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: 0}, 500);
	});
	//全选的实现
	$(".check-all").click(function(){
		$(".ids").prop("checked", this.checked);
	});
	$(".ids").click(function(){
		var option = $(".ids");
		option.each(function(i){
			if(!this.checked){
				$(".check-all").prop("checked", false);
				return false;
			}else{
				$(".check-all").prop("checked", true);
			}
		});
	});
});

$(document).ready(function(){
	$(".has_submenu > a").click(function(e){
		e.preventDefault();
		var menu_li = $(this).parent("li");
		var menu_ul = $(this).next("ul");

		if(menu_li.hasClass("open")){
			menu_ul.slideUp(350);
			menu_li.removeClass("open");
		} else {
			$(".navi > li > ul").slideUp(350);
			$(".navi > li").removeClass("open");
			menu_ul.slideDown(350);
			menu_li.addClass("open");
		}
	});
});

$(document).ready(function(){
	$(".sidebar-dropdown a").on('click',function(e){
		e.preventDefault();

		if(!$(this).hasClass("dropy")) {
			// hide any open menus and remove all other classes
			$(".sidebar .sidebar-inner").slideUp(350);
			$(".sidebar-dropdown a").removeClass("dropy");

			// open our new menu and add the dropy class
			$(".sidebar .sidebar-inner").slideDown(350);
			$(this).addClass("dropy");

		} else if ($(this).hasClass("dropy")) {
			$(this).removeClass("dropy");
			$(".sidebar .sidebar-inner").slideUp(350);
		}
	});
});

/* Widget close */

$('.wclose').click(function(e){
	e.preventDefault();
	var $wbox = $(this).parent().parent().parent();
	$wbox.hide(100);
});

/* Widget minimize */

$('.wminimize').click(function(e){
	e.preventDefault();
	var $wcontent = $(this).parent().parent().next('.widget-content');
	if($wcontent.is(':visible')) {
		$(this).children('i').removeClass('icon-chevron-up');
		$(this).children('i').addClass('icon-chevron-down');
	} else {
		$(this).children('i').removeClass('icon-chevron-down');
		$(this).children('i').addClass('icon-chevron-up');
	}
	$wcontent.toggle(500);
});

// $(function() {
// 	$( "#todaydate" ).datepicker();
// });

$("#logout").click(function(){
	$.post(LogoutUrl,{},completewithurl,'json');
});

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