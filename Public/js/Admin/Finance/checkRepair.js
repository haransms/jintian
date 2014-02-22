$('.ajax-return').click(function(){
	var url = $(this).attr('url');
	var ids = $('input[type=checkbox]:checked').val();
	if(ids == undefined) {
		jError('请选择！');
	} else {
		var theid = $('.ids').serialize();
		$.post( CONTROLLER + '/uncheckRepair', theid, completewithurl);
	}
});
$('.ajax-check').click(function(){
	var url = $(this).attr('url');
	var ids = $('input[type=checkbox]:checked').val();
	if(ids == undefined) {
		jError('请选择！');
	} else {
		var theid = $('.ids').serialize();
		$.post( CONTROLLER + '/checkRepair', theid, completewithurl);
	}
});