$(function(){
	$('#modify-group-access input').iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});
	// $('input[level=1]').on('ifChecked', function(){
	// 	var inputs=$(this).parents('.app').find('input');
	// 	$(inputs).iCheck('check');
	// });
	// $('input[level=1]').on('ifUnchecked', function(){
	// 	var inputs=$(this).parents('.app').find('input');
	// 	$(inputs).iCheck('uncheck');
	// });
	// $('input[level=2]').on('ifChecked', function(){
	// 	var inputs=$(this).parents('li').find('input');
	// 	$(inputs).iCheck('check');
	// });
	// $('input[level=2]').on('ifUnchecked', function(){
	// 	var inputs=$(this).parents('li').find('input');
	// 	$(inputs).iCheck('uncheck');
	// });
	$("#modify-group-access").ajaxForm({success:completewithurl,dataType:'json'});
});