$(function(){
	$("#learner-Coach-Form input").iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});
	$("#learner-Coach-Form").ajaxForm({success:completewithurl,dataType:'json'});
});
