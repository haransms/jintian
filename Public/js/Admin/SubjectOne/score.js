$(function(){
	$('#subject-Score-Form input').iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});
	$('#subject-Score-Form').ajaxForm({success:completewithurl,dataType:'json'});
})