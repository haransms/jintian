// $(".ajax-post").click(function(){
// 	var url = $(this).attr('url');
// 	alert(url);
// 	var ids = $('input[type=checkbox]:checked').val();
// 	if(ids == undefined) {
// 		jError('请选择！');
// 	} else {
// 		var theid = $('.ids').serialize();
// 		$.post(APP + '/Home/Index/getSerialize', theid, function(data){
// 			$("#result").html(data);
// 		});
// 	}
// });