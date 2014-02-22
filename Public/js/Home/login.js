//jQuery Validate 注册表单验证
$.validator.addMethod("mobile", function(value, element) {
	var regMobile = /^1[3|4|5|6|7|8|9][0-9]{1}[0-9]{8}$/;
	return this.optional(element) || (regMobile.test(value));
}, "不是正确的手机号码！");

$(function(){
	//validate验证
	$("#login-form").validate({
		errorElement: "span",
		errorPlacement: function(error, element) {
			element.next('span').html(error).css('color','red');
		},
		success: function(label) {
			label.css('color','green').text("恭喜，检测通过！");
		},
		rules: {
			username: {
				required: true
			},
			password: {
				required: true
			},
			verify : {
				required : true,
				remote : {
					url : CONTROLLER + '/checkVerify',
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
		messages: {
			username: {
				required: '请输入用户名'
			},
			password: {
				required: '请输入密码'
			},
			verify : {
				required : '验证码不能为空',
				remote : '<font color="red">验证码不正确</font>'
			}
		}
	});

	//异步登录
	$("#login-form").ajaxForm({success:completewithurl,dataType:'json'});
});