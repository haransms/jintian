$('#show-more').click(function(){
	var hidden = $('div').find('.more');
	if($(this).html() == '显示更多&nbsp;&nbsp;<i class="icon-angle-down"></i>') {
		hidden.removeClass('hidden');
		$(this).html('隐藏更多&nbsp;&nbsp;<i class="icon-angle-up"></i>');
	} else {
		hidden.addClass('hidden');
		$(this).html('显示更多&nbsp;&nbsp;<i class="icon-angle-down"></i>');
	}
});
//jQuery Validate 注册表单验证
$.validator.addMethod("checkmobile", function(value, element) {
	var regMobile = /^1[3|4|5|6|7|8|9][0-9]{1}[0-9]{8}$/;
	return this.optional(element) || (regMobile.test(value));
}, "不是正确的手机号码！");

$(function(){
	$( "#start_time" ).datepicker({
		onClose: function( selectedDate ) {
			$( "#end_time" ).datepicker( "option", "minDate", selectedDate );
		}
	});
	$( "#end_time" ).datepicker({
		onClose: function( selectedDate ) {
			$( "#start_time" ).datepicker( "option", "maxDate", selectedDate );
		}
	});
	//validate验证
	$("#add-Sub-Form").validate({
		errorElement: "span",
		errorPlacement: function(error, element) {
			element.parent().next('span').html(error).css('color','red');
		},
		success: function(label) {
			label.css('color','green').text("恭喜，检测通过！");
		},
		rules: {
			name: {
				required: true
			},
			start_time: {
				required: true
			},
			end_time: {
				required: true
			},
			address: {
				required: true
			},
			phone: {
				required: true
			},
			char: {
				required: true
			},
			mobile: {
				required: true,
				checkmobile: true
			}
		},
		messages: {
			name: {
				required: '请输入驾校名称'
			},
			start_time: {
				required: '请输入合作开始日期'
			},
			end_time: {
				required: '请输入合作开始日期'
			},
			address: {
				required: '请输入驾校地址'
			},
			phone: {
				required: '请输入联系电话'
			},
			char: {
				required: '请输入负责人姓名'
			},
			mobile: {
				required: '请输入负责人手机',
				checkmobile: '不是正确的手机号码！'
			}
		}
	});

	//异步登录
	$("#add-Sub-Form").ajaxForm({success:completewithurl,dataType:'json'});
});