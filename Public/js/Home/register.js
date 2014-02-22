//jQuery Validate 注册表单验证
$.validator.addMethod("mobileReg", function(value, element) {
	var regMobile = /^1[3|4|5|6|7|8|9][0-9]{1}[0-9]{8}$/;
	return this.optional(element) || (regMobile.test(value));
}, "不是正确的手机号码！");

$(function(){
	$("#register-form").validate({
		errorElement: "span",
		errorPlacement: function(error, element) {
			element.next('span').html(error).css('color','red');
		},
		success: function(label) {
			label.css('color','green').text("恭喜，检测通过！");
		},
		rules : {
			jiaxiao : {
				required : true,
				remote : {
					url : checkJiaxiao,
					type : 'post',
					dataType : 'json',
					data : {
						jiaxiao : function () {
							return $("#jiaxiao").val();
						}
					}
				}
			},
			tel : {
				required : true,
				mobileReg : true
			},
			verify : {
				required : true,
				remote : {
					url : checkVerify,
					type : 'post',
					dataType : 'json',
					data : {
						code : function () {
							return $("#verify").val();
						}
					}
				}
			}
		},
		messages : {
			jiaxiao : {
				required : '请输入驾校名称！',
				remote : '此驾校已注册'
			},
			tel : {
				required : '请输入手机号码',
				mobileReg : '不是正确的手机号码！'
			},
			verify : {
				required : '验证码不能为空',
				remote : '<font color="red">验证码不正确</font>'
			}
		}
	});
	$("#register-form").ajaxForm({success:completewithurl,dataType:'json'});
});
// $("#submit").click(function(e){
// 	e.preventDefault();
// 	$("#register-form").ajaxForm({success:completewithurl,dataType:'json'});
// })