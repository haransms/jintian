function addPlan(){
	$("#addPlanModal").modal();
}
$(function(){
	$('#time').datepicker();
	$('#add-Plan-Form').ajaxForm({success:completewithurl,dataType:'json'});
});
