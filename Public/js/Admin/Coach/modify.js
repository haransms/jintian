//jQuery Validate 注册表单验证
$.validator.addMethod("checkmobile", function(value, element) {
	var regMobile = /^1[3|4|5|6|7|8|9][0-9]{1}[0-9]{8}$/;
	return this.optional(element) || (regMobile.test(value));
}, "不是正确的手机号码！");

$(function(){
	//动态添加导航
	var navi = $('.navi');
	var html = '<li class="nlightblue current"><a href="#"><i class="icon-file"></i> 修改教练 </a></li>';
	navi.append(html);

	//icheck样式加载
	$("#modify-Coach-Form").iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});

	//validate验证
	$("#modify-Coach-Form").validate({
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
			birthday: {
				required: true
			},
			identity: {
				required: true,
				remote : {
					url : MODULE + '/Ajax/checkModifyCoachIdentity',
					type : 'post',
					dataType : 'json',
					data : {
						Iden : function () {
							return $("#txtidcard").val();
						},
						id : function () {
							return $('#id').val();
						}
					}
				}
			},
			phone: {
				required: true
			},
			certificate: {
				required: true
			}
		},
		messages: {
			sid: {
				required: '必须选择分部'
			},
			name: {
				required: '姓名不能为空'
			},
			birthday: {
				required: '出生日期不能为空，在身份证号码栏点击鼠标'
			},
			identity: {
				required: '身份证必须',
				remote: '<font color="red">身份证已存在</font>'
			},
			phone: {
				required: '请输入手机号码'
			},
			certificate: {
				required: '请输入资格证号码'
			}
		}
	});

	//异步登录
	$("#modify-Coach-Form").ajaxForm({success:completewithurl,dataType:'json'});
});
