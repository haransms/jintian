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

});

$("#searchbutton").click(function(){
	$("#learner-search-form").ajaxForm({success:function(data){
		$("#showlearner").html('').html(data);
	}});
});

// $(".pagination li a").click(function(){
// 	var page = $(this).attr('page');
// 	var p = page.split('/p/');
// 	var nowpage = p[1].split('.');
// 	$.post(MODULE + '/Ajax/learnerInfo', {'p':nowpage[0]}, function(data){
// 		$("#showLearner").html(data);
// 	});
// });
// function ajaxPage () {
// 	var href = $(this).prop('href');
// 	//提取页码
// 	var p = href.split('/p/');
// 	var page = p[1].split('.');
// 	$.post(MODULE + '/Ajax/learnerInfo', {'p':page}, function(data){
// 		$("#showLearner").html(data);
// 	});
// }