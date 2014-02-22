$(function(){
	var searchUrl = $("#search-learner-name").attr('url');
	var cache = {};
	$("#search-learner-name").autocomplete({
		source : function ( request, response ) {
			var term = request.term;
			if( term in cache ) {
				response( $.map( cache[ term ], function( item ) {
						return {
							label : item.name
						}
					}) );
				return;
			}
			$.ajax({
				url : searchUrl,
				dataType : 'json',
				data : {
					lname : request.term
				},
				success : function ( data ) {
					cache[ term ] = data;
					response( $.map( data, function( item ) {
						return {
							label : item.name
						}
					}) );
				}
			});
		}
	});

	$(".ajax-checkout").click(function(){
		var checkoutUrl = $(this).attr('url');
		window.location.href = checkoutUrl;
	});

	$(".ajax-update").click(function(){
		var method = $(this).attr('method');
		var url = $(this).attr('url');
		var ids = $('input[type=checkbox]:checked').val();
		if(ids == undefined) {
			jError('请选择！');
		} else {
			var theid = $('.ids').serialize();
			$.post(APP + '/Admin/Ajax/getSingleLearnerPayment', theid, function(data){
				if(data.status == 0) {
					jError(data.info);
				} else {
					if(method == 'add') {
						$("#updatePaymentModalLabel").html('添加缴费信息');
						$("#updateAction").val('add');						
					}else if(method == 'modify') {
						$("#updatePaymentModalLabel").html('修改缴费信息');
						$("#updateAction").val('modify');	
					} else {
						return false;
					}
					$("#modal-body").html(data);
					$("#updatePaymentModal").modal();
				}
			});
		}
	});
	$("#update-Payment-Form").ajaxForm({success:completewithurl,dataType:'json'});
});

$("#searchbutton").click(function(){
	$("#learner-search-form").ajaxForm({success:function(data){
		$("#showLearner").html('').html(data);
	}});
});