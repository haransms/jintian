//jQuery Validate 注册表单验证
$.validator.addMethod("checkmobile", function(value, element) {
	var regMobile = /^1[3|4|5|6|7|8|9][0-9]{1}[0-9]{8}$/;
	return this.optional(element) || (regMobile.test(value));
}, "不是正确的手机号码！");

$(function(){
	$("#add-Learner-Form").iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});

	//validate验证
	$("#add-Learner-Form").validate({
		errorElement: "span",
		errorPlacement: function(error, element) {
			element.parent().next('span').html(error).css('color','red');
		},
		success: function(label) {
			label.css('color','green').text("恭喜，检测通过！");
		},
		rules: {
			sid: {
				required: true
			},
			name: {
				required: true
			},
			identity: {
				required: true,
				remote : {
					url : MODULE + '/Ajax/checkIdentity',
					type : 'post',
					dataType : 'json',
					data : {
						Iden : function () {
							return $("#txtidcard").val();
						}
					}
				}
			},
			phone: {
				required: true,
				checkmobile : true
			}
		},
		messages: {
			sid: {
				required: '必须选择分部'
			},
			name: {
				required: '姓名不能为空'
			},
			identity: {
				required: '身份证必须',
				remote: '身份证已存在'
			},
			phone: {
				required: '请输入手机号码',
				checkmobile : '<font color="red">不是正确的手机号码！</font>'
			}
		}
	});

	//异步注册
	$("#add-Learner-Form").ajaxForm({success:completewithurl,dataType:'json'});
});
