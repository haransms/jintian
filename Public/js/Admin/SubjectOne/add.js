$(function(){
	//动态添加导航
	var navi = $('.navi');
	var html = '<li class="norange current"><a href="#"><i class="icon-file"></i> ' + TITLE + ' </a></li>';
	navi.append(html);

	$('.ajax-offer').click(function(){
		var url = $(this).attr('url');
		alert(url);
		var pid = $('#pid').val();
		var type = $('#type').val();
		$.post(url,{'pid':pid,'type':type},
			completewithurl
			// function(data){
			// 	alert(data);
			// }
			);
	});
});
function get_value(id){
	var theid = $('.ids').serialize();
	$.post( MODULE + '/Ajax/getSelectCount',theid,function(data){
		// $('#learner').html(data);
		eval('var data=' + data);
		$('#count').html(data.count);
		var html = '';
		$.each(data.learner, function(i,k){
			html += '<span style="color:red;margin-right:10px;" id="selected_' + k.id + '">' + k.name;
			html += ' <i class="icon-remove" onclick="removeid(' + k.id + ')"></i></span>';
		})
		$('#learner').html(html);
	});
}
function removeid(id) {
	$.post( MODULE + '/Ajax/removeid', {'id':id}, function(data){
		// $('#learner').html(data);
			eval('var data=' + data);
			$('#count').html(data.count);
			var html = '';
			$.each(data.learner, function(i,k){
				html += '<span style="color:red;margin-right:10px;" id="selected_' + k.id + '">' + k.name;
				html += ' <i class="icon-remove" onclick="removeid(' + k.id + ')"></i></span>';
			});
			$('#learner').html(html);
			// $('#selected_' + id).remove();
			$('#learner_' + id).prop('checked',false);		
	});
}
