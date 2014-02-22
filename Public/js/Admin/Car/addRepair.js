$(function(){
	//动态添加导航
	var navi = $('.navi');
	var html = '<li class="norange current"><a href="#"><i class="icon-file"></i> 新增修理记录 </a></li>';
	navi.append(html);

	$.validator.addMethod("valueNotEquals", function(value, element, arg){
		return arg != value;
	}, "<span style='color:red;'>车号未选择</span>");

	//validate验证
	$("#add-Repair-Form").validate({
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
				required : "<span style='color:red;'>车号未选择</span>"
			},
			cost: {
				required : "<span style='color:red;'>费用未填写</span>"
			}
		}
	});

	$("#add-Repair-Form").ajaxForm({success:completewithurl,dataType:'json'});
});
function getCoachName (id) {
	$.post(MODULE + '/Ajax/getCoachName',{'id' : id}, function(data){
		// alert(data);
		$('#lname').val(data);
	});
}