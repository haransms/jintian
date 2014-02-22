$(function(){
	//动态添加导航
	var navi = $('.navi');
	var html = '<li class="norange current"><a href="#"><i class="icon-file"></i> ' + TITLE + ' </a></li>';
	navi.append(html);
	
	$('input').iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red',
		increaseArea: '20%', // optional
	});
});
function removeid (id) {
	$('#learner_' + id).iCheck('uncheck');
}
$("input").on('ifChecked',function(){
	getResult();
});
$("input").on('ifUnchecked',function(){
	getResult();
});
function getResult () {
	var theid = $('.ids').serialize();
	$.ajax({
		type : 'POST',
		url : MODULE + '/Ajax/getSubjectSelectedResult',
		data : theid,
		dataType : 'json',
		success : function(data){
			$('#count').html(data.count);
			var html = '';
			$.each(data.learner, function(i,k){
				html += '<span style="color:red;margin-right:10px;" id="selected_' + k.id + '">' + k.name;
				html += ' <i class="icon-remove" onclick="removeid(' + k.id + ')"></i></span>';
			})
			$('#learner').html(html);
		}
	});
}
$('.ajax-offer').click(function(){
	var url = $(this).attr('url');
	var ids = $('.ids').serialize();
	$.ajax({
		type : 'POST',
		url : url,
		data : ids,
		dataType : 'json',
		success : completewithurl
	});
})