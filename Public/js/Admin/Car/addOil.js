$(function(){
	//动态添加导航
	var navi = $('.navi');
	var html = '<li class="norange current"><a href="#"><i class="icon-file"></i> 新增加油记录 </a></li>';
	navi.append(html);

	$.validator.addMethod("valueNotEquals", function(value, element, arg){
		return arg != value;
	}, "车号未选择");

	//validate验证
	$("#add-Oil-Form").validate({
		errorElement: "span",
		errorPlacement: function(error, element) {
			element.parent().next('span').html(error).css('color','red');
		},
		success: function(label) {
			label.css('color','green').text("恭喜，检测通过！");
		},
		rules: {
			cid : {
				required : true,
				valueNotEquals : "0"
			},
			cost: {
				required: true
			}
		},
		messages: {
			cid : {
				required : '车号未选择'
			},
			cost: {
				required : '费用未填写'
			}
		}
	});

	$("#add-Oil-Form").ajaxForm({success:completewithurl,dataType:'json'});
});
function getCoachName (id) {
	$.post(MODULE + '/Ajax/getCoachName',{'id' : id}, function(data){
		// alert(data);
		$('#lname').val(data);
	});
}