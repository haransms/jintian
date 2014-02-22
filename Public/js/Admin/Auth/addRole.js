$(function(){
	$('#add-Role-Form input').iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});
	$("#add-Role-Form").ajaxForm({success:completewithurl,dataType:'json'});
});