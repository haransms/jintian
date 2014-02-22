$(function(){
	$( "#last_check_time" ).datepicker();
	$("#add-Car-Form").iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});
	
	//validate验证
	$("#add-Car-Form").validate({
		errorElement: "span",
		errorPlacement: function(error, element) {
			element.parent().next('span').html(error).css('color','red');
		},
		success: function(label) {
			label.css('color','green').text("恭喜，检测通过！");
		},
		rules: {
			sid : {
				required : true
			},
			num: {
				required: true
			},
			last_check_time: {
				required: true
			}
		},
		messages: {
			sid : {
				required : '分部未选择'
			},
			num: {
				required : '车牌未填写'
			},
			last_check_time: {
				required : '上次年检日期未填写'
			}
		}
	});

	$("#add-Car-Form").ajaxForm({success:completewithurl,dataType:'json'});
});
$('input').on('ifChecked', function(event){
	var sid = $(this).val();
	$.post( MODULE + '/Ajax/getFreeCoach',{'sid':sid},function(data){
		if(data.status == 0){
			jError(data.info);
			$("#uid").html('').append('<option value="0">先选择分部</option>');
		}else{
			$.each(data,function(no,items){
				$("#uid").append('<option value="'+items.id+'">'+items.name+'</option>');
			});
		}
	});
});